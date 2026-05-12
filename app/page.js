import content from '@/data/content.json';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{minHeight: '80vh'}}>
        <div className="hero-bg" style={{
          backgroundImage: 'linear-gradient(rgba(10, 21, 12, 0.7), rgba(10, 21, 12, 0.9)), url("https://images.unsplash.com/photo-1545208393-21602d1e82e7?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="container">
          <div className="hero-content" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <span className="badge" style={{borderColor: 'var(--gold)', color: 'var(--gold)'}}>Established 2015</span>
            <h1 style={{fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--cream)', marginBottom: '1rem'}}>
              {content.ashram.name}
            </h1>
            <p className="hero-sub" style={{fontSize: '1.5rem', color: 'var(--gold-lt)', fontStyle: 'italic', marginBottom: '2rem'}}>
              A Divine Abode of Peace on the Sacred Banks of Narmada
            </p>
            <div className="hero-btns" style={{justifyContent: 'center'}}>
              <a href="/activities" className="btn btn-primary" style={{padding: '1rem 2.5rem', fontSize: '1rem'}}>Explore Activities</a>
              <a href="/about" className="btn btn-outline" style={{padding: '1rem 2.5rem', fontSize: '1rem'}}>Our Story</a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Welcome Section */}
      <section className="section" style={{background: 'var(--bg2)', textAlign: 'center'}}>
        <div className="container" style={{maxWidth: '800px'}}>
          <span className="section-label">The Path of Grace</span>
          <h2 style={{marginTop: '0.5rem'}}>Welcome to Ma Sharanam</h2>
          <div className="divider"></div>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(245,237,224,0.9)'}}>
            Founded in 2015, Ma Sharanam Ashram is a spiritual sanctuary dedicated to the pursuit of truth and self-realization. Following the teachings of the revered saint **Ma Anandamayi**, we provide a space for deep sadhana, community service, and holistic living.
          </p>
        </div>
      </section>

      {/* Grid of Activities (Refined) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Seva & Sadhana</span>
            <h2>Life at the Ashram</h2>
            <p>A harmonious blend of spiritual practice and selfless service.</p>
            <div className="divider"></div>
          </div>

          <div className="grid-3" style={{gap: '2.5rem'}}>
            {/* Gurukul */}
            <div className="card" style={{background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.1)'}}>
              <div className="card-icon" style={{fontSize: '2.5rem', color: 'var(--gold)'}}>🏹</div>
              <h3 style={{marginTop: '1rem'}}>{content.activities.gurukul.title}</h3>
              <p style={{color: 'rgba(245,237,224,0.7)'}}>{content.activities.gurukul.description}</p>
              <a href="/activities#gurukul" className="card-link">Explore →</a>
            </div>

            {/* School */}
            <div className="card" style={{background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.1)'}}>
              <div className="card-icon" style={{fontSize: '2.5rem', color: 'var(--gold)'}}>📚</div>
              <h3 style={{marginTop: '1rem'}}>{content.activities.school.title}</h3>
              <p style={{color: 'rgba(245,237,224,0.7)'}}>{content.activities.school.description}</p>
              <a href="/activities#school" className="card-link">Explore →</a>
            </div>

            {/* Gaushala */}
            <div className="card" style={{background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.1)'}}>
              <div className="card-icon" style={{fontSize: '2.5rem', color: 'var(--gold)'}}>🐄</div>
              <h3 style={{marginTop: '1rem'}}>{content.activities.gaushala.title}</h3>
              <p style={{color: 'rgba(245,237,224,0.7)'}}>{content.activities.gaushala.description}</p>
              <a href="/activities#gaushala" className="card-link">Explore →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research / Book */}
      <section className="section" style={{background: 'var(--bg2)'}}>
        <div className="container">
          <div className="img-text">
            <div className="img-wrap" style={{boxShadow: '0 20px 40px rgba(0,0,0,0.5)'}}>
              <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3" alt="Ma Anandamayi Research" />
            </div>
            <div className="text-block">
              <span className="section-label">Divine Wisdom</span>
              <h2>Research on Ma Anandamayi</h2>
              <div className="divider left"></div>
              <p>
                Our community has dedicated years to research on the life and teachings of Ma Anandamayi. We have published several books sharing this divine wisdom with the world.
              </p>
              <p style={{color: 'var(--gold)'}}>
                "The search for Truth is the only true search."
              </p>
              <a href="/about#books" className="btn btn-primary" style={{marginTop: '1rem'}}>View Publications</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{textAlign: 'center', background: 'linear-gradient(to bottom, var(--bg), #050a06)'}}>
        <div className="container" style={{maxWidth: '600px'}}>
          <h2>Experience the Sacred</h2>
          <p style={{color: 'rgba(245,237,224,0.7)', marginBottom: '2rem'}}>
            Plan your visit to experience the peace, attend yoga classes, or join the weekly live Zoom sessions.
          </p>
          <div className="hero-btns" style={{justifyContent: 'center'}}>
            <a href="/stay" className="btn btn-primary">Request Stay</a>
            <a href="/contact" className="btn btn-outline">Enquire</a>
          </div>
        </div>
      </section>
    </div>
  );
}
