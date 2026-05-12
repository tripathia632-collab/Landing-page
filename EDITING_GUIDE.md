# 📖 Ma Sharanam Ashram Website — Editing Guide
### Written for non-coders. No coding knowledge needed!

---

## 🗂️ File Structure (What each file is)

```
Landing-page/
│
├── 📄 index.html           ← Home page
├── 📄 about.html           ← About the ashram
├── 📄 gurukul.html         ← Gurukul program
├── 📄 school.html          ← School
├── 📄 gaushala.html        ← Gaushala
├── 📄 organic-farming.html ← Organic farming
├── 📄 satsang.html         ← Satsang & Yoga programs
├── 📄 blog.html            ← Blog listing (dynamic from Firebase)
├── 📄 blog-post.html       ← Individual blog post (auto-loads from Firebase)
├── 📄 gallery.html         ← Photo gallery (dynamic from Firebase)
├── 📄 donate.html          ← Donations & bank details
├── 📄 contact.html         ← Contact form & location
├── 📄 login.html           ← Member login page
├── 📄 members.html         ← Members-only teachings (login required)
├── 📄 admin.html           ← Admin panel to add blog posts & gallery photos
│
├── 📁 data/
│   └── content.js          ← ⭐ ALL TEXT CONTENT IS HERE — Edit this file!
│
├── 📁 css/
│   └── style.css           ← All visual design (colors, fonts, layout)
│
└── 📁 js/
    ├── main.js             ← Shared code (navbar, footer, scroll effects)
    ├── firebase-config.js  ← Firebase database connection settings
    ├── auth.js             ← Login/logout logic
    ├── blog.js             ← Blog loading & publishing
    └── gallery.js          ← Gallery loading & photo adding
```

---

## ✏️ HOW TO EDIT WEBSITE TEXT

### The Golden Rule:
> **Almost ALL text on the website lives in ONE file: `data/content.js`**
> Open that file, find the text you want to change, edit it, save. Done.

### Step-by-step:
1. Open the folder in any text editor (Notepad on Windows, TextEdit on Mac, or VS Code)
2. Open `data/content.js`
3. Press **Ctrl+F** (or Cmd+F on Mac) to search for the text you want to change
4. Edit the text between the quote marks `" "`
5. Save the file (Ctrl+S / Cmd+S)
6. Refresh the website in your browser

### ⚠️ Important Rules While Editing:
- Only change text **between the quote marks** `" "`
- Do **NOT** delete commas `,` colons `:` or curly brackets `{ }`
- Do **NOT** delete the word before the colon (that's the label the website uses to find the content)
- If you're unsure, make a copy of the file before editing

---

## 🖼️ HOW TO CHANGE IMAGES

### Where images are set:
All image URLs are in `data/content.js`. Look for lines with `Image:` or `heroImage:`.

### To replace an image:
1. Upload your photo to **Google Drive** or **ImgBB** (free: imgbb.com)
2. Get the **direct link** to the image (right-click → Copy image address)
3. Open `data/content.js`, find the image URL you want to replace
4. Paste your new URL between the quote marks

**Example — changing the home hero image:**
```js
// Find this line in data/content.js:
heroImage: "https://images.unsplash.com/photo-xxxxxx",

// Change to:
heroImage: "https://your-new-image-url.jpg",
```

---

## 📝 HOW TO ADD A BLOG POST (No coding needed!)

The blog is connected to Firebase — you add posts through the **Admin Panel**.

1. Go to `admin.html` on your website
2. Log in with your admin email (gurusharan7@gmail.com)
3. Fill in the form:
   - **Title**: The name of your post
   - **Excerpt**: A 1-2 sentence summary shown on the blog listing
   - **Category**: Choose from the dropdown
   - **Content**: Write your post here. Use simple HTML like `<p>paragraph</p>` for paragraphs
4. Click **Publish Post**
5. Your post appears on the blog page immediately! ✅

### Simple HTML tags for post content:
```
<p>This is a paragraph.</p>
<h2>This is a heading</h2>
<blockquote>This is a special highlighted quote</blockquote>
```

---

## 🖼️ HOW TO ADD PHOTOS TO GALLERY

1. Go to `admin.html` on your website and log in
2. Click the **"Add Photo"** tab
3. Paste the **direct image URL** (upload to ImgBB or Google Drive first)
4. Add a caption (optional but recommended)
5. Select a category (Gaushala, Gurukul, etc.)
6. Click **Add to Gallery**
7. Photo appears in gallery immediately! ✅

---

## 🔐 HOW TO MANAGE MEMBER LOGINS

Members are managed through **Firebase Console** (your database).

### To add a new member:
1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Select your project
3. Click **Authentication** in the left menu
4. Click **Add user**
5. Enter the person's email and a password
6. They can now log in at `login.html` ✅

### To remove a member:
1. Go to Firebase Console → Authentication
2. Find the user → Click the three dots → Delete

---

## 💰 HOW TO UPDATE BANK DETAILS

1. Open `data/content.js`
2. Search for `indianDetails` 
3. Update the account number, IFSC, bank name, and UPI ID
4. Save the file

---

## 🔢 HOW TO UPDATE COW COUNT IN GAUSHALA

1. Open `data/content.js`
2. Search for `cowCount`
3. Change the number: `cowCount: "20+"` → `cowCount: "35+"`
4. Save

---

## 🌐 HOW TO SET UP FIREBASE (One-time setup)

This is needed for the Blog, Gallery, and Login to work.

**Step 1:** Create a free Firebase account
- Go to [console.firebase.google.com](https://console.firebase.google.com)
- Sign in with your Google account

**Step 2:** Create a project
- Click **"Add project"**
- Name it `masharanam-ashram`
- Click through the setup steps

**Step 3:** Add a web app
- In your project, click the `</>` (web) icon
- Name it `masharanam-website`
- Click **Register app**
- Copy the `firebaseConfig` code shown to you

**Step 4:** Paste it into the website
- Open `js/firebase-config.js` in a text editor
- Find the section that says `PASTE_YOUR_API_KEY_HERE` etc.
- Replace with the values from the Firebase Console

**Step 5:** Enable Authentication
- Firebase Console → Build → Authentication
- Click **Get started**
- Under **Sign-in method**, enable **Email/Password**

**Step 6:** Enable Firestore Database
- Firebase Console → Build → Firestore Database
- Click **Create database**
- Choose **Start in production mode**
- Select a server location (e.g. asia-south1 for India)

**That's it!** Your Blog, Gallery, and Login will now work fully.

---

## 📞 CONTACT FORM ACTIVATION (Formspree — free)

To make the contact form actually send emails:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — you'll get an endpoint URL like `https://formspree.io/f/abcdef`
3. Open `js/main.js`
4. Find the comment `// Replace with actual form service (e.g. Formspree) endpoint`
5. Change the mock code to:
   ```js
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     body: new FormData(contactForm),
   });
   ```

---

## 🚀 HOW TO PUBLISH THE WEBSITE (Go Live)

Use **Netlify** — it's free and takes 2 minutes:

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Drag and drop your entire `Landing-page` folder onto the Netlify website
3. You instantly get a live URL like `https://masharanam-xxxx.netlify.app`
4. You can connect your own domain (masharanam.org) in Netlify settings

---

## 🎨 HOW TO CHANGE COLORS

Open `css/style.css` and look for the `:root` section at the top:

```css
:root {
  --gold:     #c9a84c;   ← Gold accent color
  --saffron:  #e87d4a;   ← Saffron/orange accent
  --cream:    #f5ede0;   ← Main text color
  --bg:       #0a150c;   ← Page background (very dark green)
}
```

Change the color codes (the `#xxxxxx` values) to change the website's color scheme.
Use [colorpicker.com](https://colorpicker.com) to pick colors and get their codes.

---

*This guide was prepared specifically for Ma Sharanam Ashram. For technical help, contact your website developer.*
