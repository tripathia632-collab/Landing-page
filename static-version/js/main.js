// ── MAIN.JS — Shared across all pages ────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initBackToTop();
  highlightActiveNav();
  initMobileMenu();
});

// ── NAVBAR ────────────────────────────────────────────────────────────────────
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 40
      ? '0 4px 24px rgba(0,0,0,.5)' : 'none';
  });
}

// ── MOBILE MENU ───────────────────────────────────────────────────────────────
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = open ? 'none' : 'flex';
    hamburger.classList.toggle('active', !open);
  });
}

// ── ACTIVE NAV LINK ───────────────────────────────────────────────────────────
function highlightActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ── BACK TO TOP ───────────────────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.querySelector('.back-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── TOAST NOTIFICATION ────────────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = `toast ${type}`;
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => t.classList.remove('show'), 3500);
}
window.showToast = showToast;

// ── CONTACT FORM ──────────────────────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…'; btn.disabled = true;
    // Replace with actual form service (e.g. Formspree) endpoint
    // For now, shows a success message after 1 second
    await new Promise(r => setTimeout(r, 1000));
    showToast('✅ Message sent! We will reply within 2–3 working days.');
    contactForm.reset();
    btn.textContent = 'Send Message'; btn.disabled = false;
  });
}

// ── BUILD NAV HTML (shared helper) ───────────────────────────────────────────
// Call buildNav() in any page that doesn't have a hand-coded nav
function buildNav(activePage) {
  const s = window.SITE || {};
  const links = [
    { href:'index.html',           label:'Home' },
    { href:'about.html',           label:'About' },
    {
      label:'Programs', dropdown: [
        { href:'gurukul.html',          label:'Gurukul' },
        { href:'school.html',           label:'School' },
        { href:'gaushala.html',         label:'Gaushala' },
        { href:'organic-farming.html',  label:'Organic Farming' },
        { href:'satsang.html',          label:'Satsang & Yoga' },
      ]
    },
    { href:'blog.html',            label:'Blog' },
    { href:'gallery.html',         label:'Gallery' },
    { href:'contact.html',         label:'Contact' },
  ];

  const navLinkHTML = links.map(l => {
    if (l.dropdown) {
      const items = l.dropdown.map(d => `<a href="${d.href}">${d.label}</a>`).join('');
      return `<li class="dropdown"><a href="#">${l.label} ▾</a><div class="dropdown-menu">${items}</div></li>`;
    }
    const cls = l.href === activePage ? ' class="active"' : '';
    return `<li><a href="${l.href}"${cls}>${l.label}</a></li>`;
  }).join('');

  const mobileHTML = links.map(l => {
    if (l.dropdown) return l.dropdown.map(d => `<a href="${d.href}">${d.label}</a>`).join('');
    return `<a href="${l.href}">${l.label}</a>`;
  }).join('');

  return `
  <nav class="navbar" id="navbar">
    <div class="container">
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-icon">🕉️</div>
        <div>
          <div class="nav-logo-text">${s.name || 'Ma Sharanam Ashram'}</div>
          <div class="nav-logo-sub">Est. ${s.founded || '2018'}</div>
        </div>
      </a>
      <ul class="nav-links">${navLinkHTML}</ul>
      <div class="nav-cta">
        <a href="donate.html" class="nav-donate">Donate</a>
        <a href="login.html" class="btn-outline btn" style="padding:.45rem 1rem;font-size:.82rem;">Member Login</a>
        <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
      </div>
    </div>
    <div class="nav-mobile" style="display:none;">${mobileHTML}</div>
  </nav>`;
}
window.buildNav = buildNav;

// ── BUILD FOOTER HTML ────────────────────────────────────────────────────────
function buildFooter() {
  const s = window.SITE || {};
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>🕉️ ${s.name || 'Ma Sharanam Ashram'}</h3>
          <p>${s.tagline || ''}</p>
          <p style="margin-top:.75rem;font-size:.8rem;">Reg. No: ${s.regNo || ''}</p>
          <div class="footer-social">
            ${s.youtube ? `<a href="${s.youtube}" target="_blank" class="social-btn" title="YouTube">▶</a>` : ''}
            ${s.facebook ? `<a href="${s.facebook}" target="_blank" class="social-btn" title="Facebook">f</a>` : ''}
            ${s.whatsapp ? `<a href="https://wa.me/${s.whatsapp}" target="_blank" class="social-btn" title="WhatsApp">💬</a>` : ''}
          </div>
        </div>
        <div class="footer-col">
          <h4>Programs</h4>
          <ul>
            <li><a href="gurukul.html">Gurukul</a></li>
            <li><a href="school.html">School</a></li>
            <li><a href="gaushala.html">Gaushala</a></li>
            <li><a href="organic-farming.html">Organic Farming</a></li>
            <li><a href="satsang.html">Satsang & Yoga</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="donate.html">Donate</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="login.html">Member Login</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:${s.email || ''}">${s.email || ''}</a></li>
            <li><a href="tel:${(s.phone||'').replace(/[^+\d]/g,'')}">${s.phone || ''}</a></li>
            ${s.phone2 ? `<li><a href="tel:${s.phone2.replace(/[^+\d]/g,'')}">${s.phone2}</a></li>` : ''}
            ${s.brochure ? `<li><a href="${s.brochure}" target="_blank">Download Brochure</a></li>` : ''}
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${s.name || 'Ma Sharanam Ashram'}. All rights reserved.</span>
        <span>Built with 🙏 for the ashram community</span>
      </div>
    </div>
  </footer>
  <div class="back-top">↑</div>`;
}
window.buildFooter = buildFooter;
