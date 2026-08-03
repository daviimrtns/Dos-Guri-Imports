-- ============================================================
-- Dos Guri Imports — produtos de exemplo (rode UMA vez)
-- No painel do Supabase: SQL Editor > cole tudo > Run.
-- Isso preenche a loja com os 8 produtos iniciais.
-- (Rodar de novo cria cópias; se quiser recomeçar, use antes:
--  delete from public.products;)
-- ============================================================

insert into public.products
  (name, brand, origin, cat, price, was, badge, glyph, image, rating, reviews, opt_label, options, descricao, stock, bestseller)
values
  ('Eau de Parfum Noir','Maison Lumière','França','perfume',589,820,'-30%','🧴','',4.9,214,'Tamanho',
   array['50 ml','100 ml','150 ml'],'Fragrância amadeirada e envolvente, com notas de âmbar, baunilha e madeiras nobres. Importada da França, com lacre original e garantia Dos Guri Imports.',8,true),

  ('Fone Bluetooth ANC Pro','AudioLab','EUA','fone',749,999,'-25%','🎧','',4.8,512,'Cor',
   array['Preto','Branco','Areia'],'Cancelamento de ruído ativo, som de alta fidelidade e até 40h de bateria. Bluetooth 5.3. Original, com garantia Dos Guri Imports.',15,true),

  ('Smartphone Ultra 256GB','Nexon','Coreia do Sul','celular',3299,3899,'','📱','',4.7,88,'Armazenamento',
   array['256 GB','512 GB'],'Tela AMOLED 6.7" 120Hz, câmera tripla de 108MP e bateria de 5000mAh. Aparelho novo, lacrado e original, com garantia Dos Guri Imports.',5,false),

  ('Bike Elétrica Urban 350W','VoltRide','Alemanha','bike',6490,7490,'-13%','🚲','',4.9,37,'Tamanho do quadro',
   array['Aro 26 (M)','Aro 29 (G)'],'Motor de 350W, autonomia de até 60km, pedal assistido e freios a disco. Entregue montada e revisada, com garantia Dos Guri Imports.',3,false),

  ('Mala de Bordo Rígida 20"','TravelCo','Itália','mala',459,640,'-28%','🧳','',4.6,156,'Cor',
   array['Preto','Prata','Vinho'],'Casco em ABS resistente, 4 rodas giratórias 360° e cadeado TSA embutido. Tamanho aprovado para bagagem de mão. Original, com garantia Dos Guri Imports.',20,false),

  ('Perfume Floral Blossom 75ml','Fleur Paris','França','perfume',399,520,'','🌸','',4.9,301,'Tamanho',
   array['50 ml','75 ml','100 ml'],'Fragrância leve e floral, com notas de jasmim, peônia e almíscar. Perfeita para o dia a dia. Importada da França, com garantia Dos Guri Imports.',12,true),

  ('Earbuds True Wireless Mini','AudioLab','EUA','fone',289,389,'-26%','🎵','',4.7,420,'Cor',
   array['Preto','Branco'],'Compactos, leves e com ótima qualidade de som. Estojo com carga para o dia todo e resistência IPX4. Originais, com garantia Dos Guri Imports.',25,false),

  ('Smartphone Lite 128GB','Nexon','Coreia do Sul','celular',1799,2099,'','📲','',4.6,143,'Armazenamento',
   array['128 GB','256 GB'],'Ótimo desempenho para o dia a dia, tela de 6.5" 90Hz e bateria de 5000mAh. Excelente custo-benefício. Novo, lacrado e original, com garantia Dos Guri Imports.',9,false);
