// ── AUTH.JS — Login & Member Protection ──────────────────────────────────────
// This file handles all login/logout and page protection logic.
// ─────────────────────────────────────────────────────────────────────────────

// ══════════════════════════════════════════════════════════════════
// ⭐ STATIC TEST LOGIN (works without Firebase — for local testing)
//    Email:    test@masharanam.org
//    Password: Sharanam@2024
//
//    Once Firebase is set up, this is bypassed automatically.
//    To disable test login: change ENABLE_TEST_LOGIN to false
// ══════════════════════════════════════════════════════════════════
const ENABLE_TEST_LOGIN = true;
const TEST_CREDENTIALS = {
  email:    "test@masharanam.org",
  password: "Sharanam@2024",
  name:     "Test Member",
  isAdmin:  false,
};
const FIREBASE_CONFIGURED = !document.querySelector('script[src*="firebase-config"]')?.src
  || (typeof firebaseConfig !== 'undefined' && !String(window._fbApiKey || '').includes('PASTE'));

// ─────────────────────────────────────────────────────────────────────────────

let _staticUser = null; // holds logged-in state when using static login

function staticLogin(email, password) {
  if (!ENABLE_TEST_LOGIN) return false;
  if (email === TEST_CREDENTIALS.email && password === TEST_CREDENTIALS.password) {
    _staticUser = { email, displayName: TEST_CREDENTIALS.name, isStaticLogin: true };
    sessionStorage.setItem('staticUser', JSON.stringify(_staticUser));
    return true;
  }
  return false;
}

function getStaticUser() {
  if (_staticUser) return _staticUser;
  const stored = sessionStorage.getItem('staticUser');
  return stored ? JSON.parse(stored) : null;
}

function staticLogout() {
  _staticUser = null;
  sessionStorage.removeItem('staticUser');
}

import { auth, ADMIN_EMAILS } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ── LOGIN FORM ────────────────────────────────────────────────────────────────
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email    = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const errEl    = document.getElementById('login-error');
    const btn      = loginForm.querySelector('button[type="submit"]');

    errEl.style.display = 'none';
    btn.textContent = 'Signing in…'; btn.disabled = true;

    // ① Try static test login first
    if (ENABLE_TEST_LOGIN && staticLogin(email, password)) {
      window.location.href = 'members.html';
      return;
    }

    // ② Try Firebase login
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = 'members.html';
    } catch (err) {
      errEl.textContent = getErrorMessage(err.code);
      errEl.style.display = 'block';
      btn.textContent = 'Sign In'; btn.disabled = false;
    }
  });
}

// ── PROTECT MEMBERS PAGE ─────────────────────────────────────────────────────
if (window.location.pathname.includes('members.html') ||
    window.location.pathname.includes('admin.html')) {

  // Check static session first (works offline/local)
  const staticU = getStaticUser();
  if (staticU) {
    const nameEl = document.getElementById('member-name');
    if (nameEl) nameEl.textContent = staticU.displayName || staticU.email;
    buildMemberContent(staticU);
  } else {
    // Check Firebase session
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = 'login.html';
      } else {
        const nameEl = document.getElementById('member-name');
        if (nameEl) nameEl.textContent = user.displayName || user.email;
        buildMemberContent(user);
      }
    });
  }
}

// ── LOGOUT BUTTON ─────────────────────────────────────────────────────────────
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', async () => {
    staticLogout();           // clear static session
    try { await signOut(auth); } catch(e) {}  // clear Firebase session
    window.location.href = 'login.html';
  });
}

// ── AUTH STATE — Update nav login/logout UI ───────────────────────────────────
onAuthStateChanged(auth, (user) => {
  const loginLink  = document.getElementById('nav-login-link');
  const logoutLink = document.getElementById('nav-logout-link');
  if (loginLink)  loginLink.style.display  = user ? 'none'  : 'inline-flex';
  if (logoutLink) logoutLink.style.display = user ? 'inline-flex' : 'none';
});

// ── CHECK ADMIN ───────────────────────────────────────────────────────────────
export function isAdmin(user) {
  return user && ADMIN_EMAILS.includes(user.email);
}

// ── FRIENDLY ERROR MESSAGES ───────────────────────────────────────────────────
function getErrorMessage(code) {
  const messages = {
    'auth/user-not-found':      'No account found with this email address.',
    'auth/wrong-password':      'Incorrect password. Please try again.',
    'auth/invalid-email':       'Please enter a valid email address.',
    'auth/too-many-requests':   'Too many attempts. Please wait a few minutes.',
    'auth/network-request-failed': 'Network error. Please check your internet connection.',
  };
  return messages[code] || 'Login failed. Please check your credentials and try again.';
}

// ── BUILD MEMBER CONTENT ──────────────────────────────────────────────────────
function buildMemberContent(user) {
  const s = window.SITE;
  if (!s || !s.members) return;
  const container = document.getElementById('teachings-grid');
  if (!container) return;

  container.innerHTML = s.members.teachings.map(t => `
    <div class="card reveal">
      <div class="card-icon">${t.type === 'audio' ? '🎧' : t.type === 'video' ? '🎬' : '📄'}</div>
      <span class="badge">${t.type.toUpperCase()}</span>
      <h3>${t.title}</h3>
      <p style="font-size:.8rem;color:var(--muted);margin:.25rem 0 .75rem;">${t.date}</p>
      <p>${t.desc}</p>
      <a href="${t.link}" target="_blank" class="card-link">Access Resource →</a>
    </div>
  `).join('');
}
