import content from '@/data/content.json';

export default function About() {
  return (
    <div className="section" style={{paddingTop: 'calc(var(--nav-h) + 2rem)'}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Our Story</span>
          <h1>About Ma Sharanam</h1>
          <p>A Divine Abode of Peace, Love & Spiritual Growth</p>
          <div className="divider"></div>
        </div>

        <div className="img-text" style={{marginBottom: '4rem'}}>
          <div className="img-wrap">
            <img src="https://images.unsplash.com/photo-1545208393-21602d1e82e7?ixlib=rb-4.0.3" alt="Ma Anandamayi" />
          </div>
          <div className="text-block">
            <span className="section-label">Lineage</span>
            <h2>Following Ma Anandamayi</h2>
            <p>
              Ma Sharanam Ashram was founded in **2015** with the vision of creating a space dedicated to the pursuit of truth and self-realization.
            </p>
            <p>
              We follow the teachings of the revered saint **Ma Anandamayi**. Our community has dedicated years to research on her life and teachings, and we have published several books sharing this divine wisdom with the world.
            </p>
          </div>
        </div>

        <div className="img-text reverse" style={{marginBottom: '4rem'}}>
          <div className="img-wrap">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3" alt="Narmada" />
          </div>
          <div className="text-block">
            <span className="section-label">Location</span>
            <h2>On the Banks of the Narmada</h2>
            <p>
              The ashram is blessed to be located on the sacred banks of the river **Narmada**. The pure vibrations of the river and the surrounding nature provide a perfect setting for deep meditation and spiritual practice.
            </p>
            <p>
              Devotees and seekers from all over the world come here to experience the peace and quiet that only a place of true sadhana can offer.
            </p>
          </div>
        </div>

        {/* Books Section */}
        <div className="section" style={{background: 'var(--bg2)', borderRadius: 'var(--radius-lg)', padding: '3rem'}}>
          <div className="section-header text-center">
            <span className="badge">Publications</span>
            <h2>Our Research & Books</h2>
            <p>Deepening the understanding of Ma Anandamayi's teachings.</p>
            <div className="divider"></div>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-icon">📖</div>
              <h3>Matri Vani - Vol 1</h3>
              <p>A collection of profound sayings and guidance from Ma Anandamayi translated and explained.</p>
            </div>
            <div className="card">
              <div className="card-icon">📖</div>
              <h3>The Divine Play</h3>
              <p>An in-depth look at the early life and spiritual manifestations of Ma.</p>
            </div>
            <div className="card">
              <div className="card-icon">📖</div>
              <h3>Path to Self-Realization</h3>
              <p>Practical guide based on the teachings for modern seekers.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
