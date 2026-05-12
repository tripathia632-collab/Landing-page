'use client';

import { useState } from 'react';

export default function StayRequest() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section" style={{paddingTop: 'calc(var(--nav-h) + 2rem)'}}>
      <div className="container" style={{maxWidth: '600px'}}>
        <div className="section-header text-center">
          <span className="badge">Visit Us</span>
          <h1>Request to Stay</h1>
          <p>Fill out the form below to request a stay at Ma Sharanam Ashram.</p>
          <div className="divider"></div>
        </div>

        {submitted ? (
          <div className="card text-center" style={{padding: '3rem'}}>
            <div className="card-icon">🙏</div>
            <h3>Thank You!</h3>
            <p>Your request has been submitted. The ashram administration will contact you shortly regarding availability.</p>
          </div>
        ) : (
          <form className="card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" required placeholder="Your Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="dates">Preferred Dates</label>
              <input type="text" id="dates" required placeholder="e.g., Oct 10 - Oct 15" />
            </div>
            <div className="form-group">
              <label htmlFor="purpose">Purpose of Stay</label>
              <textarea id="purpose" required placeholder="Spiritual practice, retreat, volunteering, etc."></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Submit Request</button>
          </form>
        )}
      </div>
    </div>
  );
}
