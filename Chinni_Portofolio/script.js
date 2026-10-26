// Smooth Scroll Reveal
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

sections.forEach(sec => observer.observe(sec));

// Skills Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.skill-chip').forEach(chip => {
      chip.classList.remove('hide');
      if (filter !== 'all' && !chip.classList.contains(filter)) {
        chip.classList.add('hide');
      }
    });
  });
});

// Contact Form
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  // Later: send via fetch() to backend
  alert('Thank you for reaching out!');
});

// Navbar Active Link
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section[id]').forEach(sec => {
    const secTop = sec.offsetTop - 200;
    if (scrollY >= secTop) current = sec.getAttribute('id');
  });

  document.querySelectorAll('nav a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
  });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Smooth Scroll for Nav Links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile nav after click
    nav.classList.remove('open');
  });
});