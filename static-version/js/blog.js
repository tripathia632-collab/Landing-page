// ── BLOG.JS — Dynamic Blog from Firebase Firestore ───────────────────────────
import { db } from './firebase-config.js';
import {
  collection, getDocs, getDoc, doc,
  addDoc, deleteDoc, updateDoc,
  query, orderBy, limit, where, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { auth, isAdmin } from './auth.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const COLLECTION = 'blog_posts';

// ── BLOG LISTING PAGE ─────────────────────────────────────────────────────────
const blogGrid    = document.getElementById('blog-grid');
const blogLoading = document.getElementById('blog-loading');

if (blogGrid) loadBlogPosts();

async function loadBlogPosts(category = null) {
  if (blogLoading) blogLoading.style.display = 'block';
  try {
    let q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'), limit(12));
    if (category) q = query(collection(db, COLLECTION), where('category', '==', category), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    if (blogLoading) blogLoading.style.display = 'none';
    if (snap.empty) {
      blogGrid.innerHTML = '<p style="text-align:center;color:var(--muted);grid-column:1/-1;">No posts yet. Check back soon!</p>';
      return;
    }
    blogGrid.innerHTML = snap.docs.map(d => blogCardHTML(d.id, d.data())).join('');
  } catch (err) {
    if (blogLoading) blogLoading.style.display = 'none';
    blogGrid.innerHTML = `<p style="color:var(--muted);grid-column:1/-1;">⚠️ Could not load posts. ${err.message}</p>`;
  }
}

function blogCardHTML(id, post) {
  const date = post.createdAt?.toDate?.()?.toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }) || 'Draft';
  const img  = post.image || `https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=60`;
  return `
    <a href="blog-post.html?id=${id}" class="blog-card reveal" style="text-decoration:none;">
      <img src="${img}" alt="${post.title}" class="blog-card-img">
      <div class="blog-card-body">
        <span class="blog-tag">${post.category || 'Ashram'}</span>
        <h3>${post.title}</h3>
        <p>${(post.excerpt || '').slice(0,120)}…</p>
        <div class="blog-meta">
          <span>📅 ${date}</span>
          <span>✍️ ${post.author || 'Ashram Team'}</span>
        </div>
      </div>
    </a>`;
}

// ── CATEGORY FILTER BUTTONS ───────────────────────────────────────────────────
document.querySelectorAll('[data-category]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-category]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.category === 'all' ? null : btn.dataset.category;
    loadBlogPosts(cat);
  });
});

// ── SINGLE BLOG POST PAGE ─────────────────────────────────────────────────────
const postContainer = document.getElementById('blog-post-content');
if (postContainer) {
  const id = new URLSearchParams(location.search).get('id');
  if (id) loadSinglePost(id);
}

async function loadSinglePost(id) {
  const postContainer = document.getElementById('blog-post-content');
  try {
    const snap = await getDoc(doc(db, COLLECTION, id));
    if (!snap.exists()) { postContainer.innerHTML = '<p>Post not found.</p>'; return; }
    const p    = snap.data();
    const date = p.createdAt?.toDate?.()?.toLocaleDateString('en-IN', { day:'numeric', month:'long', year:'numeric' }) || '';
    document.title = `${p.title} — Ma Sharanam Ashram`;
    postContainer.innerHTML = `
      ${p.image ? `<img src="${p.image}" alt="${p.title}" style="width:100%;border-radius:var(--radius-lg);margin-bottom:2rem;max-height:420px;object-fit:cover;">` : ''}
      <span class="badge">${p.category || 'Ashram'}</span>
      <h1 style="margin:1rem 0 .5rem;">${p.title}</h1>
      <div style="display:flex;gap:1.5rem;font-size:.82rem;color:var(--muted);margin-bottom:2rem;">
        <span>📅 ${date}</span>
        <span>✍️ ${p.author || 'Ashram Team'}</span>
      </div>
      <div class="post-body" style="line-height:1.9;font-size:1.05rem;">${p.content || ''}</div>`;
  } catch (err) {
    postContainer.innerHTML = `<p>Error loading post: ${err.message}</p>`;
  }
}

// ── ADMIN: ADD POST FORM ──────────────────────────────────────────────────────
const addPostForm = document.getElementById('add-post-form');
if (addPostForm) {
  onAuthStateChanged(auth, user => {
    if (!isAdmin(user)) {
      addPostForm.innerHTML = '<p style="color:var(--saffron);">Admin access required.</p>';
      return;
    }
    addPostForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = addPostForm.querySelector('button[type="submit"]');
      btn.disabled = true; btn.textContent = 'Publishing…';
      try {
        await addDoc(collection(db, COLLECTION), {
          title:     document.getElementById('post-title').value.trim(),
          excerpt:   document.getElementById('post-excerpt').value.trim(),
          content:   document.getElementById('post-content').value.trim(),
          category:  document.getElementById('post-category').value,
          author:    document.getElementById('post-author').value.trim() || 'Ashram Team',
          image:     document.getElementById('post-image').value.trim() || '',
          createdAt: serverTimestamp(),
        });
        window.showToast('✅ Post published successfully!');
        addPostForm.reset();
      } catch (err) {
        window.showToast('❌ Error: ' + err.message, 'error');
      }
      btn.disabled = false; btn.textContent = 'Publish Post';
    });
  });
}
