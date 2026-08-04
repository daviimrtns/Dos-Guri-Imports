-- ============================================================
-- Dos Guri Imports — recursos novos (rode UMA vez no SQL Editor)
--   1) Status do pedido (acompanhamento)
--   2) Baixa de estoque automática
--   3) Avaliações de clientes
--   4) Fotos dos produtos (Supabase Storage)
-- ============================================================

-- 1) STATUS DO PEDIDO ----------------------------------------
-- Valores usados: novo, separando, a_caminho, entregue, cancelado
alter table public.orders add column if not exists status text not null default 'novo';

drop policy if exists "pedidos: dono atualiza" on public.orders;
create policy "pedidos: dono atualiza" on public.orders
  for update using (public.is_dono()) with check (public.is_dono());

-- 2) BAIXA DE ESTOQUE AUTOMÁTICA -----------------------------
-- A cada pedido, desconta a quantidade comprada do estoque de cada produto.
create or replace function public.baixa_estoque()
returns trigger language plpgsql security definer set search_path = public as $$
declare linha jsonb;
begin
  for linha in select value from jsonb_array_elements(coalesce(new.items->'lines', '[]'::jsonb)) as t(value)
  loop
    if (linha->>'pid') is not null then
      update public.products
        set stock = greatest(0, coalesce(stock,0) - coalesce((linha->>'qty')::int, 1))
        where id = (linha->>'pid')::bigint;
    end if;
  end loop;
  return new;
end $$;

drop trigger if exists trg_baixa_estoque on public.orders;
create trigger trg_baixa_estoque
  after insert on public.orders
  for each row execute procedure public.baixa_estoque();

-- 3) AVALIAÇÕES DE CLIENTES ----------------------------------
create table if not exists public.reviews (
  id bigint generated always as identity primary key,
  product_id bigint references public.products(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  name text,
  rating int not null check (rating between 1 and 5),
  comment text,
  created_at timestamptz default now()
);
alter table public.reviews enable row level security;

drop policy if exists "avaliacoes: todos leem" on public.reviews;
create policy "avaliacoes: todos leem"
  on public.reviews for select using (true);

drop policy if exists "avaliacoes: logado cria a sua" on public.reviews;
create policy "avaliacoes: logado cria a sua"
  on public.reviews for insert with check (auth.uid() = user_id);

-- 4) FOTOS DOS PRODUTOS (Supabase Storage) -------------------
-- IMPORTANTE: antes de rodar esta parte, crie o bucket no painel:
--   Storage > New bucket >  Nome: produtos  |  Public bucket: SIM
-- Depois rode as políticas abaixo:
drop policy if exists "produtos storage: leitura publica" on storage.objects;
create policy "produtos storage: leitura publica"
  on storage.objects for select using (bucket_id = 'produtos');

drop policy if exists "produtos storage: dono envia" on storage.objects;
create policy "produtos storage: dono envia"
  on storage.objects for insert with check (bucket_id = 'produtos' and public.is_dono());

drop policy if exists "produtos storage: dono atualiza" on storage.objects;
create policy "produtos storage: dono atualiza"
  on storage.objects for update using (bucket_id = 'produtos' and public.is_dono());

-- ============================================================
-- Pronto! Agora o site já pode: acompanhar pedidos, baixar estoque,
-- receber avaliações e guardar fotos dos produtos.
-- ============================================================
