-- ============================================================
-- Dos Guri Imports — CORRIGIR UPLOAD DE FOTOS
-- Rode este arquivo UMA vez no Supabase (SQL Editor > New query > cole tudo > Run).
--
-- Ele faz 2 coisas:
--   1) Cria o bucket "produtos" (onde as fotos ficam guardadas) e libera o envio
--   2) Marca a SUA conta como "dono" (só o dono pode enviar fotos)
-- ============================================================


-- 1) BUCKET DE FOTOS + PERMISSÕES ----------------------------

-- Cria o bucket "produtos" (público). Se já existir, só garante que fica público.
insert into storage.buckets (id, name, public)
values ('produtos', 'produtos', true)
on conflict (id) do update set public = true;

-- Qualquer pessoa pode VER as fotos:
drop policy if exists "produtos storage: leitura publica" on storage.objects;
create policy "produtos storage: leitura publica"
  on storage.objects for select using (bucket_id = 'produtos');

-- Só o dono pode ENVIAR fotos:
drop policy if exists "produtos storage: dono envia" on storage.objects;
create policy "produtos storage: dono envia"
  on storage.objects for insert with check (bucket_id = 'produtos' and public.is_dono());

-- Só o dono pode ATUALIZAR/substituir fotos:
drop policy if exists "produtos storage: dono atualiza" on storage.objects;
create policy "produtos storage: dono atualiza"
  on storage.objects for update using (bucket_id = 'produtos' and public.is_dono());


-- 2) MARCAR A SUA CONTA COMO "DONO" --------------------------
-- IMPORTANTE: troque o e-mail abaixo pelo e-mail com que você
-- criou a sua conta de dono na loja, se for diferente.

update public.profiles
set role = 'dono'
where id = (select id from auth.users where email = 'davimrtns006@gmail.com');


-- 3) CONFERIR (opcional) -------------------------------------
-- Depois de rodar, esta linha deve mostrar a sua conta com role = 'dono'.
select p.id, u.email, p.name, p.role
from public.profiles p
join auth.users u on u.id = p.id
where u.email = 'davimrtns006@gmail.com';

-- ============================================================
-- Pronto! Volte no Painel do dono e envie a foto do produto.
-- ============================================================
