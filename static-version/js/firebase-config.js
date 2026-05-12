// ── FIREBASE CONFIG ──────────────────────────────────────────────────────────
// INSTRUCTIONS FOR SETUP:
// 1. Go to https://console.firebase.google.com
// 2. Click "Add project" → name it "masharanam-ashram" → click Continue
// 3. Click the </> (Web) icon to add a web app
// 4. Copy the firebaseConfig object and paste it below, replacing the placeholders
// 5. Enable Authentication: Firebase Console → Build → Authentication → Sign-in method → Email/Password
// 6. Enable Firestore: Firebase Console → Build → Firestore Database → Create database (start in production mode)
// ─────────────────────────────────────────────────────────────────────────────

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }       from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage }    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// ▼▼▼ REPLACE WITH YOUR FIREBASE CONFIG ▼▼▼
const firebaseConfig = {
  apiKey:            "PASTE_YOUR_API_KEY_HERE",
  authDomain:        "PASTE_YOUR_AUTH_DOMAIN_HERE",
  projectId:         "PASTE_YOUR_PROJECT_ID_HERE",
  storageBucket:     "PASTE_YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID_HERE",
  appId:             "PASTE_YOUR_APP_ID_HERE",
};
// ▲▲▲ REPLACE WITH YOUR FIREBASE CONFIG ▲▲▲

const app     = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
export const storage = getStorage(app);

// Admin emails — add the email addresses that should have admin access
export const ADMIN_EMAILS = [
  "gurusharan7@gmail.com",
  // "another-admin@example.com",   ← add more admins here if needed
];
