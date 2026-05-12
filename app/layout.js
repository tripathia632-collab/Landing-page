import './globals.css';
import { createClient } from '@/utils/supabase/server';

export const metadata = {
  title: 'Ma Sharanam Ashram',
  description: 'A Divine Abode of Peace, Love & Spiritual Growth',
};

export default async function RootLayout({ children }) {
  const supabase = createClient();
  
  // Fetch the public URL for the logo uploaded by the user
  const { data: urlData } = supabase.storage.from('gallery').getPublicUrl('logo.jpeg');
  const logoUrl = urlData?.publicUrl || '/logo.png'; // Fallback to local if not found

  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="container">
            <div className="nav-logo" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <img src={logoUrl} alt="Ma Sharanam Logo" style={{height: '50px', width: 'auto', borderRadius: '50%'}} />
              <div>
                <div className="nav-logo-text">Ma Sharanam</div>
                <div className="nav-logo-sub">Est. 2015</div>
              </div>
            </div>
            <nav>
              <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li className="dropdown">
                  <a href="/activities">Activities ▾</a>
                  <div className="dropdown-menu">
                    <a href="/activities/gurukul">Gurukul</a>
                    <a href="/activities/school">School</a>
                    <a href="/activities/gaushala">Gaushala</a>
                    <a href="/activities/farming">Organic Farming</a>
                    <a href="/activities/archery">Archery</a>
                    <a href="/activities/satsang">Satsang</a>
                  </div>
                </li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/stay">Stay</a></li>
                <li><a href="/donate">Donate</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login" className="btn btn-primary" style={{color: '#0a150c', padding: '.4rem 1rem'}}>Member Login</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; 2026 Ma Sharanam Ashram. All rights reserved.</p>
            <div style={{marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--muted)'}}>
              On the banks of the Narmada | Established 2015
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
