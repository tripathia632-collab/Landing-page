// ── GALLERY.JS — Dynamic Gallery from Firebase Firestore ──────────────────────
import { db } from './firebase-config.js';
import {
  collection, getDocs, addDoc, deleteDoc, doc,
  query, orderBy, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { auth, isAdmin } from './auth.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const COLLECTION = 'gallery';

// ── GALLERY GRID ──────────────────────────────────────────────────────────────
const galleryGrid    = document.getElementById('gallery-grid');
const galleryLoading = document.getElementById('gallery-loading');

if (galleryGrid) loadGallery();

async function loadGallery(cat = null) {
  if (galleryLoading) galleryLoading.style.display = 'block';
  try {
    const q    = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    if (galleryLoading) galleryLoading.style.display = 'none';

    let items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    if (cat) items = items.filter(i => i.category === cat);

    if (!items.length) {
      galleryGrid.innerHTML = '<p style="text-align:center;color:var(--muted);">No photos yet. Check back soon!</p>';
      return;
    }
    galleryGrid.innerHTML = items.map(item => `
      <div class="gallery-item reveal" data-id="${item.id}" data-cat="${item.category || ''}">
        <img src="${item.url}" alt="${item.caption || 'Ashram photo'}" loading="lazy">
        <div class="gallery-overlay">🔍</div>
        ${item.caption ? `<div class="gallery-caption" style="position:absolute;bottom:0;left:0;right:0;padding:.5rem .75rem;background:rgba(10,21,12,.8);font-size:.8rem;transform:translateY(100%);transition:var(--transition);">${item.caption}</div>` : ''}
      </div>`).join('');

    // Lightbox click
    galleryGrid.querySelectorAll('.gallery-item').forEach(el => {
      el.addEventListener('click', () => openLightbox(el.querySelector('img').src, el.querySelector('.gallery-caption')?.textContent || ''));
    });

    // Show caption on hover
    galleryGrid.querySelectorAll('.gallery-item').forEach(el => {
      const cap = el.querySelector('.gallery-caption');
      if (!cap) return;
      el.addEventListener('mouseenter', () => cap.style.transform = 'translateY(0)');
      el.addEventListener('mouseleave', () => cap.style.transform = 'translateY(100%)');
    });

  } catch (err) {
    if (galleryLoading) galleryLoading.style.display = 'none';
    galleryGrid.innerHTML = `<p style="color:var(--muted);">⚠️ Could not load gallery. ${err.message}</p>`;
  }
}

// ── LIGHTBOX ──────────────────────────────────────────────────────────────────
function openLightbox(src, caption) {
  const lb = document.createElement('div');
  lb.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;cursor:pointer;';
  lb.innerHTML = `
    <img src="${src}" style="max-width:90%;max-height:80vh;border-radius:12px;object-fit:contain;">
    ${caption ? `<p style="margin-top:1rem;color:var(--cream);font-size:.9rem;text-align:center;">${caption}</p>` : ''}
    <div style="position:absolute;top:1.5rem;right:1.5rem;font-size:1.5rem;color:var(--cream);cursor:pointer;">✕</div>`;
  document.body.appendChild(lb);
  lb.addEventListener('click', () => lb.remove());
}

// ── CATEGORY FILTER ────────────────────────────────────────────────────────────
document.querySelectorAll('[data-gallery-cat]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-gallery-cat]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.galleryCat === 'all' ? null : btn.dataset.galleryCat;
    loadGallery(cat);
  });
});

// ── ADMIN: ADD PHOTO FORM ──────────────────────────────────────────────────────
const addPhotoForm = document.getElementById('add-photo-form');
if (addPhotoForm) {
  onAuthStateChanged(auth, user => {
    if (!isAdmin(user)) { addPhotoForm.style.display = 'none'; return; }
    addPhotoForm.style.display = 'block';
    addPhotoForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = addPhotoForm.querySelector('button[type="submit"]');
      btn.disabled = true; btn.textContent = 'Adding…';
      try {
        await addDoc(collection(db, COLLECTION), {
          url:       document.getElementById('photo-url').value.trim(),
          caption:   document.getElementById('photo-caption').value.trim(),
          category:  document.getElementById('photo-category').value,
          createdAt: serverTimestamp(),
        });
        window.showToast('✅ Photo added to gallery!');
        addPhotoForm.reset();
        loadGallery();
      } catch (err) {
        window.showToast('❌ Error: ' + err.message, 'error');
      }
      btn.disabled = false; btn.textContent = 'Add Photo';
    });
  });
}
