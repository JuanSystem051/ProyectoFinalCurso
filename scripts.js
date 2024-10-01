document.addEventListener('DOMContentLoaded', function() {
    // Efecto de scroll para la barra de navegación
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    const fadeElems = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    fadeElems.forEach(elem => observer.observe(elem));
  
    const cards = document.querySelectorAll('.product-card, .game-card, .offer-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 255, 255, 0.3)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
      });
    });
  
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
  
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  
    const subscriptionForm = document.getElementById('subscriptionForm');
    if (subscriptionForm) {
      subscriptionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('#emailInput');
        if (emailInput.value.trim() && isValidEmail(emailInput.value)) {
          // Aquí iría la lógica para enviar el formulario
          showNotification('¡Gracias por suscribirte!', 'success');
          this.reset();
        } else {
          showNotification('Por favor, introduce un email válido.', 'error');
        }
      });
    }
  
    function isValidEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  
    function showNotification(message, type) {
      const notification = document.createElement('div');
      notification.textContent = message;
      notification.className = `notification ${type}`;
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 500);
      }, 3000);
    }
  
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      const heroVideo = document.querySelector('.hero-video');
      if (heroVideo) {
        heroVideo.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    });
  
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.color = getRandomNeonColor();
      });
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
        icon.style.color = '#fff';
      });
    });
  
    function getRandomNeonColor() {
      const neonColors = ['#ff00ff', '#00ffff', '#ff00cc', '#00ccff', '#ff3300', '#33ff00'];
      return neonColors[Math.floor(Math.random() * neonColors.length)];
    }
  
    var productCarousel = document.getElementById('productCarousel');
    if (productCarousel) {
      new bootstrap.Carousel(productCarousel, {
        interval: 3000,
        wrap: true
      });
    }
  
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
      const text = heroTitle.textContent;
      heroTitle.textContent = '';
      let i = 0;
      function typeWriter() {
        if (i < text.length) {
          heroTitle.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      }
      typeWriter();
    }

    const foroItems = document.querySelectorAll('.foro-item');
    foroItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'rgba(0, 255, 255, 0.2)';
      });
      item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '';
      });
    });

    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
      price.addEventListener('mouseenter', () => {
        price.style.transform = 'scale(1.1)';
        price.style.transition = 'transform 0.3s ease';
      });
      price.addEventListener('mouseleave', () => {
        price.style.transform = 'scale(1)';
      });
    });
});