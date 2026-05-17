// ========================================
// DASHBOARD - JAVASCRIPT FUNCTIONALITY
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== TABS ====================
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active de todas as abas e painéis
            tabLinks.forEach(l => l.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Adiciona active na aba clicada
            this.classList.add('active');
            
            // Mostra o painel correspondente
            const tabId = this.getAttribute('data-tab');
            const activePane = document.querySelector(`.tab-pane[data-tab="${tabId}"]`);
            if (activePane) {
                activePane.classList.add('active');
            }
        });
    });

    // ==================== PROGRESS BAR ====================
    // Anima a barra de progresso quando a página carrega
    const progressBars = document.querySelectorAll('[data-progress]');
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        
        // Usa setTimeout para garantir que a animação comece
        setTimeout(() => {
            bar.style.width = progress + '%';
            bar.style.opacity = '1';
        }, 100);
    });

    // ==================== LIKE BUTTONS ====================
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const likeCount = this.querySelector('.like-count');
            let currentCount = parseInt(likeCount.textContent);
            
            // Alterna entre curtido e não curtido
            if (this.classList.contains('liked')) {
                this.classList.remove('liked');
                currentCount--;
            } else {
                this.classList.add('liked');
                currentCount++;
            }
            
            likeCount.textContent = currentCount;
            
            // Efeito visual
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // ==================== MODAL ====================
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    if (modalOverlay) {
        // Fecha ao clicar no X
        closeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                modalOverlay.classList.remove('active');
            });
        });
        
        // Fecha ao clicar fora do modal
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
        
        // Fecha com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modalOverlay.classList.remove('active');
            }
        });
    }

    // ==================== SMOOTH SCROLL ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ==================== TOOLTIPS ====================
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip-popup';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
            tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
        });
        
        el.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip-popup');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // ==================== FORMULÁRIO NO MODAL ====================
    const formButtons = document.querySelectorAll('.modal-footer .btn-primary');
    formButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const form = this.closest('.modal-content').querySelector('form');
            if (form) {
                const formData = new FormData(form);
                console.log('Dados do formulário:', Object.fromEntries(formData));
                // Aqui você enviaria os dados para um servidor
            }
        });
    });

    // ==================== COMMENT FORM ====================
    const commentBtn = document.querySelector('.comment-input-area button');
    const commentTextarea = document.querySelector('.comment-input-area textarea');
    
    if (commentBtn && commentTextarea) {
        commentBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const commentText = commentTextarea.value.trim();
            if (commentText === '') {
                alert('Por favor, escreva um comentário!');
                return;
            }
            
            // Aqui você criaria um novo comentário
            console.log('Novo comentário:', commentText);
            
            // Limpa o textarea
            commentTextarea.value = '';
            
            // Feedback visual
            this.textContent = 'Publicado!';
            this.style.background = 'var(--color-success)';
            setTimeout(() => {
                this.textContent = 'Publicar';
                this.style.background = '';
            }, 2000);
        });
    }

    // ==================== NAVEGAÇÃO ATIVA ====================
    const navLinks = document.querySelectorAll('.dashboard-nav a');
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'dashboard.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ==================== DARK MODE TOGGLE ====================
    // Você pode adicionar um botão para toggle de tema claro/escuro
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Aplicar tema baseado na preferência do sistema
    if (prefersDark.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    prefersDark.addEventListener('change', (e) => {
        if (e.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    });

    // ==================== ANIMAÇÃO DE ENTRADA ====================
    // Anima os cards ao entrar na viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.card, .status-card').forEach(card => {
        observer.observe(card);
    });

    // ==================== NOTIFICAÇÕES ====================
    const notificationBtn = document.querySelector('[href*="Notificações"]');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Você tem 5 novas notificações!\n\n- 2 pedidos prontos para envio\n- 1 novo comentário\n- 2 mensagens de clientes');
        });
    }

    console.log('✅ Dashboard carregado com sucesso!');
});

// ==================== FUNÇÃO AUXILIAR ====================
function mostrarAlerta(mensagem, tipo = 'info') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${tipo}`;
    alert.innerHTML = `<strong>${tipo.toUpperCase()}:</strong> ${mensagem}`;
    
    const container = document.querySelector('.dashboard-main');
    if (container) {
        container.insertBefore(alert, container.firstChild);
        
        setTimeout(() => {
            alert.style.opacity = '0';
            alert.style.transition = 'opacity 0.3s ease';
            setTimeout(() => alert.remove(), 300);
        }, 5000);
    }
}

// Exemplo de uso: mostrarAlerta('Operação realizada com sucesso!', 'success');
