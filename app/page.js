import content from '@/data/content.json';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1545208393-21602d1e82e7?ixlib=rb-4.0.3")'}}></div>
        <div className="container">
          <div className="hero-content">
            <span className="badge">Est. {content.ashram.founded}</span>
            <h1>{content.ashram.name}</h1>
            <p className="hero-sub">A Divine Abode of Peace on the Banks of Narmada</p>
            <p className="hero-desc">
              Dedicated to holistic living, ancient wisdom, and compassionate service. Following the teachings of Ma Anandamayi.
            </p>
            <div className="hero-btns">
              <a href="/activities" className="btn btn-primary">Explore Activities</a>
              <a href="/login" className="btn btn-outline">Member Login</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Overview */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-num">Free</div>
              <div className="stat-label">Gurukul Education</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Organic Farming</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">Daily</div>
              <div className="stat-label">Satsang & Yoga</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">Gold</div>
              <div className="stat-label">National Archery</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Short */}
      <section className="section">
        <div className="container">
          <div className="img-text">
            <div className="img-wrap">
              <img src="https://images.unsplash.com/photo-1510529131414-046648058f96?ixlib=rb-4.0.3" alt="Ashram" />
            </div>
            <div className="text-block">
              <span className="section-label">Our Sanctuary</span>
              <h2>Nestled on the Banks of Narmada</h2>
              <div className="divider left"></div>
              <p>
                Ma Sharanam Ashram is a spiritual sanctuary dedicated to the pursuit of truth and self-realization. Located on the sacred banks of the river Narmada, the ashram provides a serene environment for spiritual practices.
              </p>
              <p>
                We follow the path and research of **Ma Anandamayi**, bringing her divine teachings to modern seekers.
              </p>
              <a href="/about" className="card-link">Read Our Full Story →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section" style={{background: 'var(--bg2)'}}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">What We Do</span>
            <h2>Seva & Sadhana</h2>
            <p>We believe in the harmony of spiritual practice and selfless service to society.</p>
            <div className="divider"></div>
          </div>

          <div className="grid-3">
            {/* Gurukul */}
            <div className="card">
              <div className="card-icon">🏹</div>
              <h3>{content.activities.gurukul.title}</h3>
              <p>{content.activities.gurukul.description}</p>
              <a href="/activities#gurukul" className="card-link">Learn More →</a>
            </div>

            {/* School */}
            <div className="card">
              <div className="card-icon">📚</div>
              <h3>{content.activities.school.title}</h3>
              <p>{content.activities.school.description}</p>
              <a href="/activities#school" className="card-link">Learn More →</a>
            </div>

            {/* Gaushala */}
            <div className="card">
              <div className="card-icon">🐄</div>
              <h3>{content.activities.gaushala.title}</h3>
              <p>{content.activities.gaushala.description}</p>
              <a href="/activities#gaushala" className="card-link">Learn More →</a>
            </div>

            {/* Organic Farming */}
            <div className="card">
              <div className="card-icon">🌱</div>
              <h3>{content.activities.organic_farming.title}</h3>
              <p>{content.activities.organic_farming.description}</p>
              <a href="/activities#farming" className="card-link">Learn More →</a>
            </div>

            {/* Archery */}
            <div className="card">
              <div className="card-icon">🎯</div>
              <h3>{content.activities.archery.title}</h3>
              <p>{content.activities.archery.description}</p>
              <a href="/activities#archery" className="card-link">Learn More →</a>
            </div>

            {/* Satsang */}
            <div className="card">
              <div className="card-icon">🪔</div>
              <h3>{content.activities.satsang.title}</h3>
              <p>{content.activities.satsang.description}</p>
              <a href="/activities#satsang" className="card-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Stay */}
      <section className="section">
        <div className="container text-center">
          <span className="badge">Visit Us</span>
          <h2>Experience the Peace</h2>
          <p style={{maxWidth: '600px', margin: '1rem auto 2rem'}}>
            We have comfortable rooms for guests to stay and experience the spiritual lifestyle of the ashram.
          </p>
          <div className="hero-btns" style={{justifyContent: 'center'}}>
            <a href="/stay" className="btn btn-primary">Request Stay</a>
            <a href="/contact" className="btn btn-outline">General Enquiry</a>
          </div>
        </div>
      </section>
    </div>
  );
}
