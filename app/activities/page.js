import content from '@/data/content.json';

export default function Activities() {
  return (
    <div className="section" style={{paddingTop: 'calc(var(--nav-h) + 2rem)'}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Our Work</span>
          <h1>Seva & Sadhana</h1>
          <p>Explore the various activities and services run by Ma Sharanam Ashram.</p>
          <div className="divider"></div>
        </div>

        {/* Gurukul */}
        <div id="gurukul" className="img-text" style={{marginBottom: '4rem'}}>
          <div className="img-wrap">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3" alt="Gurukul" />
          </div>
          <div className="text-block">
            <span className="section-label">Education</span>
            <h2>{content.activities.gurukul.title}</h2>
            <p>{content.activities.gurukul.description}</p>
            <p>
              In our Gurukul, students live a disciplined life of learning, meditation, and service. All education, boarding, and lodging are provided completely free of cost.
            </p>
          </div>
        </div>

        {/* School */}
        <div id="school" className="img-text reverse" style={{marginBottom: '4rem'}}>
          <div className="img-wrap">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da174a0b?ixlib=rb-4.0.3" alt="School" />
          </div>
          <div className="text-block">
            <span className="section-label">Community</span>
            <h2>{content.activities.school.title}</h2>
            <p>{content.activities.school.description}</p>
            <p>
              The Ma Sharanam School provides modern education integrated with values to children from the local community, ensuring no child is left behind due to financial constraints.
            </p>
          </div>
        </div>

        {/* Gaushala */}
        <div id="gaushala" className="img-text" style={{marginBottom: '4rem'}}>
          <div className="img-wrap">
            <img src="https://images.unsplash.com/photo-1570051008101-2f1586522303?ixlib=rb-4.0.3" alt="Gaushala" />
          </div>
          <div className="text-block">
            <span className="section-label">Service</span>
            <h2>{content.activities.gaushala.title}</h2>
            <p>{content.activities.gaushala.description}</p>
            <p>
              Our Gaushala is a home for indigenous cows. We believe in the sacredness of the cow and practice non-violent, compassionate care.
            </p>
          </div>
        </div>

        {/* Organic Farming */}
        <div id="farming" className="img-text reverse" style={{marginBottom: '4rem'}}>
          <div className="img-wrap">
            <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3" alt="Farming" />
          </div>
          <div className="text-block">
            <span className="section-label">Sustainability</span>
            <h2>{content.activities.organic_farming.title}</h2>
            <p>{content.activities.organic_farming.description}</p>
            <p>
              We grow our own food using strictly organic methods. The fertile soil of the Narmada bank yields rich, healthy produce for the ashram community.
            </p>
          </div>
        </div>

        {/* Archery */}
        <div id="archery" className="img-text" style={{marginBottom: '4rem'}}>
          <div className="img-wrap">
            <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3" alt="Archery" />
          </div>
          <div className="text-block">
            <span className="section-label">Excellence</span>
            <h2>{content.activities.archery.title}</h2>
            <p>{content.activities.archery.description}</p>
            <p>
              Archery is practiced as a form of focus and meditation (Dhanurveda). Our students have excelled and won gold medals at national levels.
            </p>
          </div>
        </div>

        {/* Satsang */}
        <div id="satsang" className="img-text reverse">
          <div className="img-wrap">
            <img src="https://images.unsplash.com/photo-1528319725582-ddc096101511?ixlib=rb-4.0.3" alt="Satsang" />
          </div>
          <div className="text-block">
            <span className="section-label">Spiritual</span>
            <h2>{content.activities.satsang.title}</h2>
            <p>{content.activities.satsang.description}</p>
            <p>
              Join us for daily Matri Vani and Sunday live Zoom sessions with Swami ji to clear doubts and deepen your practice.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
