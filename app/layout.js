import './globals.css';

export const metadata = {
  title: 'Ma Sharanam Ashram',
  description: 'A Divine Abode of Peace, Love & Spiritual Growth',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="container">
            <div className="nav-logo">
              <div className="nav-logo-icon">🕉️</div>
              <div>
                <div className="nav-logo-text">Ma Sharanam Ashram</div>
                <div className="nav-logo-sub">Est. 2018</div>
              </div>
            </div>
            <nav>
              <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/login" className="btn btn-primary" style={{color: '#0a150c'}}>Member Login</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; 2026 Ma Sharanam Ashram. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
