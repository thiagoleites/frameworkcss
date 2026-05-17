# 📊 Dashboard Moderno - Framework CSS

Um **dashboard profissional, elegante e moderno** criado com o Framework CSS puro, sem dependências externas. Perfeito para **aprender web design**, usar como **portfolio** ou como **base para seus projetos**.

---

## 🎨 Características Principais

✅ **Design Responsivo** - Funciona em desktop, tablet e mobile  
✅ **Componentes Modernos** - Cards, tabelas, modais, tabs, acordeões  
✅ **Gradient Colorido** - Paleta de cores vibrantes e profissional  
✅ **Sidebar Navegável** - Menu lateral com ícones SVG  
✅ **Dark Mode Ready** - Suporta preferências do sistema  
✅ **Sem Dependências** - 100% HTML, CSS e JavaScript puro  
✅ **SEO Otimizado** - HTML semântico e acessível  
✅ **Performance** - Carregamento rápido e otimizado  

---

## 📁 Estrutura do Projeto

```
frameworkcss/
├── index.html              # Página de demonstração do framework
├── style.css               # Estilos base do framework
├── dashboard.css           # Estilos específicos da dashboard (deprecated)
├── dashboared.html         # Página exemplo (typo no nome)
├── default.html            # Template padrão
├── jquery.js               # (Opcional)
├── scripts.js              # Scripts gerais
│
└── examples/               # 📁 PASTA COM DASHBOARD COMPLETO
    ├── dashboard.html      # 🏠 Página principal (START HERE)
    ├── produtos.html       # 🛍️ Gerenciamento de Produtos
    ├── usuarios.html       # 👥 Gerenciamento de Usuários
    ├── relatorios.html     # 📈 Relatórios e Análises
    ├── configuracoes.html  # ⚙️ Configurações do Sistema
    │
    ├── dashboard-custom.css # Estilos customizados do dashboard
    └── dashboard.js         # JavaScript interativo
```

---

## 🚀 Como Usar

### Iniciando o Dashboard

1. **Abra no navegador:**
   ```bash
   open examples/dashboard.html
   # ou use um live server
   ```

2. **Navegue pelos exemplos:**
   - **Dashboard** - Visão geral com estatísticas
   - **Produtos** - Tabela e gerenciamento
   - **Usuários** - Cards com perfis
   - **Relatórios** - Análises e gráficos
   - **Configurações** - Perfil e preferências

---

## 🎯 Componentes Utilizados

O dashboard demonstra o uso de **TODOS** os componentes do framework:

### 1. **Cards & Status**
```html
<div class="card status-card">
    <div class="status-card-icon">📊</div>
    <div class="status-card-content">
        <h2>R$ 45.230</h2>
        <p class="stat-label">Total de Vendas</p>
    </div>
</div>
```

### 2. **Tabelas Responsivas**
```html
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>#001</td>
            <td>Notebook Dell</td>
            <td>R$ 3.500,00</td>
        </tr>
    </tbody>
</table>
```

### 3. **Abas (Tabs)**
```html
<div class="tabs">
    <div class="tab-nav">
        <button class="tab-link active" data-tab="1">Aba 1</button>
        <button class="tab-link" data-tab="2">Aba 2</button>
    </div>
    <div class="tab-content">
        <div class="tab-pane active" data-tab="1">Conteúdo 1</div>
        <div class="tab-pane" data-tab="2">Conteúdo 2</div>
    </div>
</div>
```

### 4. **Formulários**
```html
<div class="form-group">
    <label for="nome">Nome</label>
    <input type="text" id="nome" placeholder="Digite seu nome">
</div>
```

### 5. **Badges e Status**
```html
<span class="badge">Novo</span>
<span class="badge" style="background: #28a745; color: white;">Ativo</span>
```

### 6. **Alertas**
```html
<div class="alert alert-success">
    <strong>Sucesso!</strong> Operação concluída.
</div>

<div class="alert alert-error">
    <strong>Erro!</strong> Tente novamente.
</div>

<div class="alert alert-info">
    <strong>Informação:</strong> Novidade importante.
</div>
```

### 7. **Modal (Pop-up)**
```html
<div class="modal-overlay">
    <div class="modal-content">
        <div class="modal-header">
            <h3>Título</h3>
            <button class="modal-close">×</button>
        </div>
        <div class="modal-body">Conteúdo aqui</div>
        <div class="modal-footer">
            <button class="btn btn-primary">Salvar</button>
        </div>
    </div>
</div>
```

### 8. **Barras de Progresso**
```html
<div class="progress-container">
    <div class="progress-bar" data-progress="75"></div>
</div>
```

### 9. **Spinners (Loaders)**
```html
<div class="spinner"></div>
<div class="spinner-sm"></div>
```

### 10. **Comentários**
```html
<div class="comment">
    <img src="avatar.jpg" class="avatar avatar-sm">
    <div class="comment-body">
        <div class="comment-header">
            <span class="comment-author">João Silva</span>
            <span class="comment-timestamp">2 horas atrás</span>
        </div>
        <p class="comment-text">Excelente trabalho!</p>
    </div>
</div>
```

### 11. **Acordeão (Sanfona)**
```html
<div class="accordion">
    <details>
        <summary>Pergunta 1</summary>
        <div class="accordion-content">
            <p>Resposta aqui...</p>
        </div>
    </details>
</div>
```

### 12. **Sidebar Navegável**
```html
<aside class="dashboard-sidebar">
    <nav class="dashboard-nav">
        <a href="#" class="active">
            <svg>...</svg> Dashboard
        </a>
    </nav>
</aside>
```

---

## 🎨 Customização

### Alterar Cores Primárias

No arquivo `dashboard-custom.css`:

```css
:root {
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-tertiary: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --gradient-success: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}
```

### Alterar Fonte

Em `style.css`:

```css
body {
    font-family: 'Inter', sans-serif;
}
```

### Adicionar Novas Páginas

1. Crie um novo arquivo: `nova-pagina.html`
2. Copie a estrutura do `dashboard.html`
3. Adapte o conteúdo
4. Adicione o link na navegação da sidebar

---

## 🔧 JavaScript Interativo

### Tabs Funcionando
```javascript
// Automatic - O dashboard.js já cuida disso!
// Clique nas abas para trocar de conteúdo
```

### Modais
```javascript
// Abrir modal
document.querySelector('.modal-overlay').classList.add('active');

// Fechar modal
document.querySelector('.modal-overlay').classList.remove('active');
```

### Like Buttons
```javascript
// Clique para curtir/descurtir comentários
// Animação automática ao clicar
```

### Progress Bars Animadas
```javascript
// Barra anima automaticamente ao carregar
// Use data-progress="75" para definir percentual
```

---

## 📱 Responsividade

O dashboard é **100% responsivo** com breakpoints em:

- **Desktop:** 1024px+
- **Tablet:** 768px - 1024px
- **Mobile:** até 480px

**Teste em diferentes tamanhos redimensionando o navegador!**

---

## 🎓 Aprendizado

Este projeto é perfeito para aprender:

✅ **HTML Semântico** - Estrutura correta e acessível  
✅ **CSS Moderno** - Grid, Flexbox, Gradients, Media Queries  
✅ **Variáveis CSS** - Temas e customização  
✅ **JavaScript Vanilla** - Sem frameworks, 100% puro  
✅ **Design Responsivo** - Mobile-first approach  
✅ **UX/UI Moderno** - Animações, transições, feedback visual  

---

## 📊 Estrutura CSS

### Variáveis Globais
```css
:root {
    --color-dark: #111111;
    --color-white: #ffffff;
    --color-success: #28a745;
    --color-error: #dc3545;
    --color-info: #17a2b8;
    
    --spacing-1: 0.25rem; /* 4px */
    --spacing-3: 1rem;    /* 16px */
    --spacing-5: 2rem;    /* 32px */
}
```

### Utilidades de Espaçamento
```css
.mt-3 { margin-top: var(--spacing-3); }
.mb-3 { margin-bottom: var(--spacing-3); }
.p-2 { padding: var(--spacing-2); }
```

---

## 🚀 Performance

- **Sem dependências externas** - Carregamento ultra-rápido
- **CSS otimizado** - Apenas ~50KB de CSS
- **JavaScript leve** - Apenas ~15KB de JS
- **Imagens placeholder** - placeholer.co (remova para produção)

---

## 🤝 Contribuições

Quer melhorar? Considere adicionar:

- [ ] Modo escuro completo
- [ ] Gráficos interativos (Chart.js)
- [ ] Multi-idiomas
- [ ] Temas customizáveis
- [ ] PWA (Progressive Web App)

---

## 📝 Licença

Livre para usar e modificar em projetos pessoais e comerciais!

---

## 🎉 Próximos Passos

1. **Estude o código** - Abra `dashboard.html` e leia o HTML
2. **Customize as cores** - Mude as variáveis CSS
3. **Adicione conteúdo real** - Substitua dados fictícios
4. **Conecte a um backend** - Use JavaScript para chamar APIs
5. **Deploy** - Publique em Netlify, Vercel ou seu servidor

---

## 💡 Dicas

- Use Chrome DevTools (F12) para inspecionar elementos
- Teste responsividade com Ctrl+Shift+M
- Valide HTML em [validator.w3.org](https://validator.w3.org/)
- Otimize imagens com [tinypng.com](https://tinypng.com/)

---

## 📞 Suporte

Tem dúvidas? Confira:
- `examples/dashboard.html` - Exemplo completo
- `style.css` - Documentação de componentes
- `dashboard-custom.css` - Customizações do tema

**Divirta-se criando! 🚀**
