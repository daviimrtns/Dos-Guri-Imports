/* ============================================================
   Dos Guri Imports — dados e utilidades compartilhadas
   ------------------------------------------------------------
   FASE 2: conectado ao Supabase (login seguro + banco de dados
   de verdade). Produtos e pedidos ficam no banco e valem para
   todos os visitantes. O carrinho continua no navegador (é algo
   pessoal e temporário, não precisa ir para o banco).
   ============================================================ */

/* ---- Conexão com o Supabase (valores PÚBLICOS, podem ir no site) ---- */
const SUPABASE_URL  = 'https://lqonaodfjvewgdivrdla.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxb25hb2RmanZld2dkaXZyZGxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3ODg5ODUsImV4cCI6MjEwMTM2NDk4NX0.SdvNcyt1xmKrw9KNtxTVqQOY39BWvFkMBrr-VaeAwXk';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

/* Categorias fixas da loja (chave -> rótulo exibido) */
const CATS = {
  cosmeticos:  'Cosméticos e Beleza',
  eletronicos: 'Eletrônicos',
  audio:       'Áudio',
  bebidas:     'Bebidas',
  viagem:      'Viagem',
  moda:        'Moda e Acessórios',
  mobilidade:  'Mobilidade',
  ferramentas: 'Ferramentas',
};

/* Catálogo inicial — usado só para "Restaurar catálogo" no painel do dono. */
const DEFAULT_PRODUCTS = [
  { cat:'cosmeticos', name:'Eau de Parfum Noir', brand:'Maison Lumière', origin:'França', glyph:'🧴', image:'', price:589, was:820, badge:'-30%', rating:4.9, reviews:214, bestseller:true, stock:8,
    optLabel:'Tamanho', options:['50 ml','100 ml','150 ml'],
    desc:'Fragrância amadeirada e envolvente, com notas de âmbar, baunilha e madeiras nobres. Importada da França, com lacre original e garantia Dos Guri Imports.' },
  { cat:'audio', name:'Fone Bluetooth ANC Pro', brand:'AudioLab', origin:'EUA', glyph:'🎧', image:'', price:749, was:999, badge:'-25%', rating:4.8, reviews:512, bestseller:true, stock:15,
    optLabel:'Cor', options:['Preto','Branco','Areia'],
    desc:'Cancelamento de ruído ativo, som de alta fidelidade e até 40h de bateria. Bluetooth 5.3. Original, com garantia Dos Guri Imports.' },
  { cat:'eletronicos', name:'Smartphone Ultra 256GB', brand:'Nexon', origin:'Coreia do Sul', glyph:'📱', image:'', price:3299, was:3899, badge:'', rating:4.7, reviews:88, bestseller:false, stock:5,
    optLabel:'Armazenamento', options:['256 GB','512 GB'],
    desc:'Tela AMOLED 6.7" 120Hz, câmera tripla de 108MP e bateria de 5000mAh. Aparelho novo, lacrado e original, com garantia Dos Guri Imports.' },
  { cat:'mobilidade', name:'Bike Elétrica Urban 350W', brand:'VoltRide', origin:'Alemanha', glyph:'🚲', image:'', price:6490, was:7490, badge:'-13%', rating:4.9, reviews:37, bestseller:false, stock:3,
    optLabel:'Tamanho do quadro', options:['Aro 26 (M)','Aro 29 (G)'],
    desc:'Motor de 350W, autonomia de até 60km, pedal assistido e freios a disco. Entregue montada e revisada, com garantia Dos Guri Imports.' },
  { cat:'viagem', name:'Mala de Bordo Rígida 20"', brand:'TravelCo', origin:'Itália', glyph:'🧳', image:'', price:459, was:640, badge:'-28%', rating:4.6, reviews:156, bestseller:false, stock:20,
    optLabel:'Cor', options:['Preto','Prata','Vinho'],
    desc:'Casco em ABS resistente, 4 rodas giratórias 360° e cadeado TSA embutido. Tamanho aprovado para bagagem de mão. Original, com garantia Dos Guri Imports.' },
  { cat:'cosmeticos', name:'Perfume Floral Blossom 75ml', brand:'Fleur Paris', origin:'França', glyph:'🌸', image:'', price:399, was:520, badge:'', rating:4.9, reviews:301, bestseller:true, stock:12,
    optLabel:'Tamanho', options:['50 ml','75 ml','100 ml'],
    desc:'Fragrância leve e floral, com notas de jasmim, peônia e almíscar. Perfeita para o dia a dia. Importada da França, com garantia Dos Guri Imports.' },
  { cat:'audio', name:'Earbuds True Wireless Mini', brand:'AudioLab', origin:'EUA', glyph:'🎵', image:'', price:289, was:389, badge:'-26%', rating:4.7, reviews:420, bestseller:false, stock:25,
    optLabel:'Cor', options:['Preto','Branco'],
    desc:'Compactos, leves e com ótima qualidade de som. Estojo com carga para o dia todo e resistência IPX4. Originais, com garantia Dos Guri Imports.' },
  { cat:'eletronicos', name:'Smartphone Lite 128GB', brand:'Nexon', origin:'Coreia do Sul', glyph:'📲', image:'', price:1799, was:2099, badge:'', rating:4.6, reviews:143, bestseller:false, stock:9,
    optLabel:'Armazenamento', options:['128 GB','256 GB'],
    desc:'Ótimo desempenho para o dia a dia, tela de 6.5" 90Hz e bateria de 5000mAh. Excelente custo-benefício. Novo, lacrado e original, com garantia Dos Guri Imports.' },
];

/* ------------------------------------------------------------
   Conversão entre a linha do banco e o objeto usado nas páginas.
   (No banco algumas colunas têm nomes diferentes: descricao,
   opt_label, options; aqui viram desc, optLabel, options.)
   ------------------------------------------------------------ */
function rowToProduct(r) {
  return {
    id: r.id, cat: r.cat, name: r.name, brand: r.brand || '', origin: r.origin || '',
    glyph: r.glyph || '', image: r.image || '',
    price: Number(r.price) || 0, was: (r.was == null ? '' : Number(r.was)),
    badge: r.badge || '', rating: (r.rating == null ? 5 : Number(r.rating)), reviews: r.reviews || 0,
    bestseller: !!r.bestseller, stock: r.stock || 0,
    optLabel: r.opt_label || '', options: r.options || [], desc: r.descricao || '',
  };
}
function productToRow(p) {
  return {
    name: p.name, brand: p.brand || null, origin: p.origin || null, cat: p.cat,
    price: p.price || 0, was: (p.was === '' || p.was == null ? null : p.was),
    badge: p.badge || null, glyph: p.glyph || null, image: p.image || null,
    rating: (p.rating == null ? 5 : p.rating), reviews: p.reviews || 0,
    opt_label: p.optLabel || null, options: p.options || [], descricao: p.desc || null,
    stock: p.stock || 0, bestseller: !!p.bestseller,
  };
}

/* Normaliza um pedido do banco para o formato que as telas usam. */
function rowToOrder(r) {
  const payload = r.items || {};
  const lines = Array.isArray(payload) ? payload : (payload.lines || []);
  return {
    id: r.id,
    email: payload.buyer_email || '',
    name: payload.buyer_name || '',
    date: r.created_at ? new Date(r.created_at).toLocaleDateString('pt-BR') : '',
    createdAt: r.created_at || null,
    items: lines,
    total: Number(r.total) || 0,
    status: r.status || 'novo',
  };
}

/* Etapas do pedido (para o acompanhamento). A ordem importa. */
const ORDER_STATUS = [
  { key: 'novo',       label: 'Pedido recebido' },
  { key: 'separando',  label: 'Separando' },
  { key: 'a_caminho',  label: 'A caminho' },
  { key: 'entregue',   label: 'Entregue' },
];
function statusLabel(key) {
  if (key === 'cancelado') return 'Cancelado';
  const s = ORDER_STATUS.find(x => x.key === key);
  return s ? s.label : 'Pedido recebido';
}
function statusIndex(key) {
  const i = ORDER_STATUS.findIndex(x => x.key === key);
  return i < 0 ? 0 : i;
}
/* Monta a "linha de progresso" do pedido (usada na conta do cliente). */
function statusStepper(status) {
  if (status === 'cancelado') return '<span style="font-size:13px;font-weight:600;color:var(--bad)">✕ Pedido cancelado</span>';
  const cur = statusIndex(status);
  return '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">' +
    ORDER_STATUS.map((s, idx) => {
      const done = idx <= cur;
      const dot = '<span style="display:inline-flex;align-items:center;gap:6px">' +
        '<span style="width:11px;height:11px;border-radius:999px;background:' + (done ? 'var(--gold)' : 'var(--line)') + '"></span>' +
        '<span style="font-size:12.5px;color:' + (done ? 'var(--ink)' : 'var(--ink-mute)') + '">' + s.label + '</span></span>';
      const sep = idx < ORDER_STATUS.length - 1 ? '<span style="flex:0 0 16px;height:1px;background:var(--line)"></span>' : '';
      return dot + sep;
    }).join('') + '</div>';
}

/* ------------------------------------------------------------
   Store: agora conversa com o Supabase (produtos, pedidos, login).
   Quase tudo é assíncrono (retorna Promise) — por isso as páginas
   usam "await".
   ------------------------------------------------------------ */
const Store = {
  CART_KEY: 'dgi_cart',

  /* ---------- Produtos ---------- */
  async products() {
    const { data, error } = await sb.from('products').select('*').order('id', { ascending: true });
    if (error) { console.error('Erro ao carregar produtos:', error); return []; }
    return data.map(rowToProduct);
  },
  async product(id) {
    if (id == null) return null;
    const { data, error } = await sb.from('products').select('*').eq('id', id).maybeSingle();
    if (error || !data) return null;
    return rowToProduct(data);
  },
  async upsertProduct(prod) {
    const row = productToRow(prod);
    if (prod.id) {
      const { error } = await sb.from('products').update(row).eq('id', prod.id);
      if (error) throw error;
    } else {
      const { error } = await sb.from('products').insert(row);
      if (error) throw error;
    }
  },
  async deleteProduct(id) {
    const { error } = await sb.from('products').delete().eq('id', id);
    if (error) throw error;
  },
  /* Recria o catálogo com os produtos de exemplo (só o dono consegue). */
  async seedDefaults() {
    const { error: delErr } = await sb.from('products').delete().gte('id', 0);
    if (delErr) throw delErr;
    const { error } = await sb.from('products').insert(DEFAULT_PRODUCTS.map(productToRow));
    if (error) throw error;
  },

  /* ---------- Carrinho (continua no navegador) ---------- */
  cart() { try { return JSON.parse(localStorage.getItem(this.CART_KEY)) || []; } catch (e) { return []; } },
  saveCart(c) { try { localStorage.setItem(this.CART_KEY, JSON.stringify(c)); } catch (e) {} },

  /* ---------- Login / sessão (Supabase Auth) ---------- */
  async session() {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return null;
    let role = 'cliente', name = user.email;
    const { data: prof } = await sb.from('profiles').select('name, role').eq('id', user.id).maybeSingle();
    if (prof) { role = prof.role || 'cliente'; name = prof.name || user.email; }
    return { type: role === 'dono' ? 'dono' : 'cliente', id: user.id, email: user.email, name };
  },
  async signUp(name, email, pass) {
    const { data, error } = await sb.auth.signUp({ email, password: pass, options: { data: { name } } });
    if (error) throw error;
    return data; // data.session != null => já entrou; senão precisa confirmar e-mail
  },
  async signIn(email, pass) {
    const { error } = await sb.auth.signInWithPassword({ email, password: pass });
    if (error) throw error;
  },
  async signOut() { await sb.auth.signOut(); },

  /* ---------- Pedidos ---------- */
  // Cliente vê os seus; dono vê todos (a segurança é garantida pelo banco/RLS).
  async orders() {
    const { data, error } = await sb.from('orders').select('*').order('created_at', { ascending: false });
    if (error) { console.error('Erro ao carregar pedidos:', error); return []; }
    return data.map(rowToOrder);
  },
  async createOrder(items, total, buyer) {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) throw new Error('Entre na sua conta para finalizar o pedido.');
    const payload = { buyer_name: buyer?.name || '', buyer_email: buyer?.email || user.email, lines: items };
    const { error } = await sb.from('orders').insert({ user_id: user.id, items: payload, total });
    if (error) throw error;
  },
  /* Dono muda o status do pedido (acompanhamento). */
  async updateOrderStatus(id, status) {
    const { error } = await sb.from('orders').update({ status }).eq('id', id);
    if (error) throw error;
  },

  /* ---------- Avaliações ---------- */
  async reviews(productId) {
    const { data, error } = await sb.from('reviews').select('*')
      .eq('product_id', productId).order('created_at', { ascending: false });
    if (error) { console.error('Erro ao carregar avaliações:', error); return []; }
    return data.map(r => ({
      id: r.id, name: r.name || 'Cliente', rating: r.rating, comment: r.comment || '',
      date: r.created_at ? new Date(r.created_at).toLocaleDateString('pt-BR') : '',
    }));
  },
  async addReview(productId, rating, comment) {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) throw new Error('Entre na sua conta para avaliar.');
    let name = user.email;
    const { data: prof } = await sb.from('profiles').select('name').eq('id', user.id).maybeSingle();
    if (prof && prof.name) name = prof.name;
    const { error } = await sb.from('reviews').insert({ product_id: productId, user_id: user.id, name, rating, comment });
    if (error) throw error;
  },

  /* ---------- Foto do produto (Storage) ---------- */
  async uploadImage(file) {
    const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
    const path = 'prod-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8) + '.' + ext;
    const { error } = await sb.storage.from('produtos').upload(path, file, { upsert: false, contentType: file.type });
    if (error) throw error;
    const { data } = sb.storage.from('produtos').getPublicUrl(path);
    return data.publicUrl;
  },

  /* ---------- Resumo de vendas (painel do dono) ---------- */
  async salesStats() {
    const orders = await this.orders();
    const hoje = new Date().toLocaleDateString('pt-BR');
    let pedidosHoje = 0, fatHoje = 0, fatTotal = 0;
    const contagem = {};
    orders.forEach(o => {
      fatTotal += o.total;
      if (o.date === hoje) { pedidosHoje++; fatHoje += o.total; }
      (o.items || []).forEach(l => {
        var nome = l.name || 'Produto';
        contagem[nome] = (contagem[nome] || 0) + (l.qty || 1);
      });
    });
    let top = null, topQtd = 0;
    Object.keys(contagem).forEach(n => { if (contagem[n] > topQtd) { topQtd = contagem[n]; top = n; } });
    return { totalPedidos: orders.length, pedidosHoje, fatHoje, fatTotal, topProduto: top, topQtd };
  },
};

/* Expõe no window para que o carrossel do hero (script type="module") consiga
   acessar. Scripts de módulo não enxergam const/let do escopo clássico. */
window.Store = Store;

/* Traduz mensagens de erro comuns do Supabase para português. */
function friendlyError(err) {
  const m = (err && err.message) ? err.message : String(err || 'Erro desconhecido');
  if (/Invalid login credentials/i.test(m)) return 'E-mail ou senha incorretos.';
  if (/User already registered/i.test(m)) return 'Este e-mail já tem conta. Tente entrar.';
  if (/Password should be at least/i.test(m)) return 'A senha é muito curta. Use pelo menos 6 caracteres.';
  if (/Email not confirmed/i.test(m)) return 'Confirme seu e-mail antes de entrar (veja sua caixa de entrada).';
  if (/Unable to validate email address/i.test(m)) return 'E-mail inválido.';
  if (/rate limit|too many/i.test(m)) return 'Muitas tentativas. Aguarde um minuto e tente de novo.';
  return m;
}

/* ------------------------------------------------------------
   Utilidades
   ------------------------------------------------------------ */
const money = n => 'R$ ' + Number(n || 0).toLocaleString('pt-BR');
window.money = money; // usado também pelo carrossel do hero (script de módulo)
const starStr = n => '★★★★★'.slice(0, Math.round(n)) + '☆☆☆☆☆'.slice(0, 5 - Math.round(n));

/* Imagem do produto: usa foto se houver, senão o emoji */
function productThumb(p, cls) {
  return p.image ? `<img src="${p.image}" alt="${p.name}">` : `<span class="${cls || 'glyph'}">${p.glyph || '📦'}</span>`;
}

/* Prévia de busca ao vivo: mostra um painel flutuante logo abaixo do campo,
   com os produtos que combinam com o que está sendo digitado — sem precisar
   rolar a página. Clicar num item abre a página do produto.
   Uso: wireSearchPreview('searchInput'). */
function wireSearchPreview(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const panel = document.createElement('div');
  panel.className = 'search-preview';
  panel.style.display = 'none';
  document.body.appendChild(panel);

  const hide = () => { panel.style.display = 'none'; };
  const place = () => {
    const r = input.getBoundingClientRect();
    panel.style.left = Math.round(r.left) + 'px';
    panel.style.top = Math.round(r.bottom + 8) + 'px';
    panel.style.width = Math.round(Math.max(r.width, 300)) + 'px';
  };

  let token = 0;
  async function update() {
    const q = (input.value || '').toLowerCase().trim();
    if (!q) { hide(); return; }
    const my = ++token;
    let prods = [];
    try { prods = await Store.products(); } catch (e) { prods = []; }
    if (my !== token) return; // ignora respostas antigas
    const matches = prods
      .filter(p => (p.name + ' ' + (p.brand || '')).toLowerCase().includes(q))
      .slice(0, 6);
    if (!matches.length) {
      panel.innerHTML = '<div class="sp-empty">Nenhum produto encontrado.</div>';
    } else {
      panel.innerHTML = matches.map(p => `
        <a class="sp-item" href="produto.html?id=${p.id}">
          <span class="sp-thumb">${p.image ? `<img src="${p.image}" alt="">` : (p.glyph || '📦')}</span>
          <span class="sp-info">
            <span class="sp-name">${p.name}</span>
            ${p.brand ? `<span class="sp-brand">${p.brand}</span>` : ''}
          </span>
          <span class="sp-price">${money(p.price)}</span>
        </a>`).join('');
    }
    place();
    panel.style.display = '';
  }

  input.addEventListener('input', update);
  input.addEventListener('focus', () => { if (input.value.trim()) update(); });
  input.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
  document.addEventListener('click', e => { if (e.target !== input && !panel.contains(e.target)) hide(); });
  window.addEventListener('scroll', () => { if (panel.style.display !== 'none') place(); }, { passive: true });
  window.addEventListener('resize', () => { if (panel.style.display !== 'none') place(); });
}

/* Tema escuro por padrão; alterna ao clicar */
function wireTheme(btnId) {
  const root = document.documentElement;
  const btn = document.getElementById(btnId);
  if (btn) btn.addEventListener('click', () => {
    const cur = root.getAttribute('data-theme') || 'dark';
    root.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
  });
}

/* Atualiza o botão de conta no cabeçalho conforme o login (assíncrono) */
async function renderAccountLink(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const label = el.querySelector('span');
  if (!label) return;
  try {
    const s = await Store.session();
    if (s && s.type === 'cliente') label.textContent = (s.name || '').split(' ')[0] || 'Conta';
    else if (s && s.type === 'dono') label.textContent = 'Dono';
    else label.textContent = 'Entrar';
  } catch (e) { label.textContent = 'Entrar'; }
}

/* Ajusta a interface para o perfil do dono, se ele estiver logado:
   - adiciona a classe "owner-mode" no <body> (o CSS esconde carrinho e botões
     de compra — o dono gerencia a loja, não compra);
   - revela os atalhos exclusivos do dono (class="owner-only", escondidos por
     padrão com style="display:none"), como o botão "Painel" no topo.
   Visitantes e clientes não são afetados. */
async function applyOwnerMode() {
  try {
    const s = await Store.session();
    if (s && s.type === 'dono') {
      document.body.classList.add('owner-mode');
      document.querySelectorAll('.owner-only').forEach(el => { el.style.display = ''; });
    }
  } catch (e) { /* em caso de erro, mantém a interface padrão (comprador) */ }
}
