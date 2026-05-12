import content from '@/data/content.json';

export default function Contact() {
  return (
    <div className="section" style={{paddingTop: 'calc(var(--nav-h) + 2rem)'}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>Have questions? We are here to help.</p>
          <div className="divider"></div>
        </div>

        <div className="grid-2">
          {/* Contact Info */}
          <div>
            <h3>Ashram Address</h3>
            <p style={{color: 'var(--gold)', marginBottom: '1.5rem'}}>{content.ashram.location}</p>
            
            <div style={{marginBottom: '1rem'}}>
              <strong>Phone:</strong> {content.ashram.phone}
            </div>
            <div style={{marginBottom: '1rem'}}>
              <strong>Email:</strong> {content.ashram.email}
            </div>
            <div style={{marginBottom: '1rem'}}>
              <strong>YouTube:</strong> {content.ashram.youtube}
            </div>
            <div style={{marginBottom: '1rem'}}>
              <strong>Facebook:</strong> {content.ashram.facebook}
            </div>
          </div>

          {/* Contact Form */}
          <form className="card">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
