'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function StayRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      dates: formData.get('dates'),
      purpose: formData.get('purpose'),
    };

    const supabase = createClient();
    
    // Insert into 'stay_requests' table
    const { error: insertError } = await supabase
      .from('stay_requests')
      .insert([data]);

    setLoading(false);

    if (insertError) {
      console.error(insertError);
      setError('Failed to submit request. Please make sure the database table exists or try again later.');
    } else {
      setSubmitted(true);
    }
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
            <p>Your request has been submitted securely. The ashram administration will contact you shortly regarding availability.</p>
          </div>
        ) : (
          <form className="card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required placeholder="Your Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="dates">Preferred Dates</label>
              <input type="text" id="dates" name="dates" required placeholder="e.g., Oct 10 - Oct 15" />
            </div>
            <div className="form-group">
              <label htmlFor="purpose">Purpose of Stay</label>
              <textarea id="purpose" name="purpose" required placeholder="Spiritual practice, retreat, volunteering, etc."></textarea>
            </div>
            
            {error && <p style={{color: 'red', fontSize: '0.9rem', marginBottom: '1rem'}}>{error}</p>}
            
            <button type="submit" className="btn btn-primary" style={{width: '100%'}} disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
