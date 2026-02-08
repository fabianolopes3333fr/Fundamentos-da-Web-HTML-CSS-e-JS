// ========================================
    // FAQ ACCORDION - Interatividade Acessível
    // ========================================
    document.addEventListener('DOMContentLoaded', () => {
      // Selecionando todos os botões FAQ
      const faqButtons = document.querySelectorAll('.faq__question');

      faqButtons.forEach(button => {
        button.addEventListener('click', () => {
          const faqItem = button.parentElement;
          const isExpanded = button.getAttribute('aria-expanded') === 'true';

          // Fecha todos os outros itens
          document.querySelectorAll('.faq__item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq__question')
              .setAttribute('aria-expanded', 'false');
          });

          // Toggle do item atual
          if (!isExpanded) {
            faqItem.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
          }
        });
      });

      // ========================================
      // SMOOTH SCROLL - Navegação suave
      // ========================================
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));

          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });

            // Foco para acessibilidade
            target.setAttribute('tabindex', '-1');
            target.focus();
          }
        });
      });

      // ========================================
      // EXEMPLO: Fetch API (para demonstração)
      // ========================================
      const fetchData = async (url) => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
          return null;
        }
      };

      // ========================================
      // EXEMPLO: Local Storage
      // ========================================
      const storage = {
        set: (key, value) => {
          try {
            localStorage.setItem(key, JSON.stringify(value));
          } catch (e) {
            console.error('Erro ao salvar no localStorage:', e);
          }
        },
        get: (key) => {
          try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
          } catch (e) {
            console.error('Erro ao ler do localStorage:', e);
            return null;
          }
        },
        remove: (key) => {
          localStorage.removeItem(key);
        }
      };

      // ========================================
      // EXEMPLO: Debounce (Performance)
      // ========================================
      const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
          const later = () => {
            clearTimeout(timeout);
            func(...args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
      };

      // ========================================
      // EXEMPLO: Intersection Observer (Lazy Loading)
      // ========================================
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Opcional: parar de observar após visível
            // observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observar todas as seções
      document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
      });

      console.log('🚀 Página carregada com sucesso!');
      console.log('📚 Este é um exemplo didático de HTML, CSS e JS');
    });
