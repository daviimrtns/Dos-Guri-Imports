-- ============================================================
-- Dos Guri Imports — configuração do banco no Supabase
-- Como usar: no painel do Supabase, abra "SQL Editor",
-- cole TODO este conteúdo e clique em "Run".
-- ============================================================

-- 1) PERFIS -----------------------------------------------------
-- Guarda o nome e o "papel" de cada usuário (cliente ou dono).
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  role text not null default 'cliente'   -- 'cliente' ou 'dono'
);
alter table public.profiles enable row level security;

drop policy if exists "perfil: o dono do registro lê" on public.profiles;
create policy "perfil: o dono do registro lê"
  on public.profiles for select using (auth.uid() = id);

drop policy if exists "perfil: cria o próprio" on public.profiles;
create policy "perfil: cria o próprio"
  on public.profiles for insert with check (auth.uid() = id);

-- Ao cadastrar um usuário, cria o perfil automaticamente.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', 'Cliente'));
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Função auxiliar: o usuário logado é o dono?
create or replace function public.is_dono()
returns boolean language sql security definer stable set search_path = public as $$
  select exists(
    select 1 from public.profiles where id = auth.uid() and role = 'dono'
  );
$$;

-- 2) PRODUTOS ---------------------------------------------------
-- Todos podem VER; só o dono pode adicionar/editar/excluir.
create table if not exists public.products (
  id bigint generated always as identity primary key,
  name text not null,
  brand text,
  origin text,
  cat text,
  price numeric not null default 0,
  was numeric,
  badge text,
  glyph text,
  image text,
  rating numeric default 5,
  reviews int default 0,
  opt_label text,
  options text[] default '{}',
  descricao text,
  stock int default 0,
  bestseller boolean default false,
  created_at timestamptz default now()
);
alter table public.products enable row level security;

drop policy if exists "produtos: todos veem" on public.products;
create policy "produtos: todos veem"
  on public.products for select using (true);

drop policy if exists "produtos: só o dono altera" on public.products;
create policy "produtos: só o dono altera"
  on public.products for all
  using (public.is_dono()) with check (public.is_dono());

-- 3) PEDIDOS ----------------------------------------------------
-- O cliente vê os seus; o dono vê todos.
create table if not exists public.orders (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id),
  items jsonb not null,
  total numeric not null,
  created_at timestamptz default now()
);
alter table public.orders enable row level security;

drop policy if exists "pedidos: cliente vê os seus, dono vê todos" on public.orders;
create policy "pedidos: cliente vê os seus, dono vê todos"
  on public.orders for select
  using (auth.uid() = user_id or public.is_dono());

drop policy if exists "pedidos: cliente cria o seu" on public.orders;
create policy "pedidos: cliente cria o seu"
  on public.orders for insert with check (auth.uid() = user_id);

-- ============================================================
-- PRONTO. Depois de rodar, volte ao passo a passo para:
--  (a) criar sua conta de dono e marcar role = 'dono';
--  (b) pegar a URL e a chave "anon public" do projeto.
-- ============================================================
