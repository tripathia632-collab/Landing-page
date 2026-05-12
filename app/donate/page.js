export default function Donate() {
  return (
    <div className="section" style={{paddingTop: 'calc(var(--nav-h) + 2rem)'}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Support Us</span>
          <h1>Contribute to Seva</h1>
          <p>Your support helps us run the free Gurukul, School, and Gaushala.</p>
          <div className="divider"></div>
        </div>

        <div className="grid-2">
          {/* Indian Citizens */}
          <div className="card">
            <h3>For Indian Citizens</h3>
            <p style={{marginBottom: '1.5rem'}}>Contributions from Indian bank accounts are eligible for tax benefits (if applicable).</p>
            <div className="bank-box">
              <div className="bank-line"><strong>Bank Name:</strong> State Bank of India</div>
              <div className="bank-line"><strong>Account Name:</strong> Ma Sharanam Ashram</div>
              <div className="bank-line"><strong>Account No:</strong> XXXXXXXXXX</div>
              <div className="bank-line"><strong>IFSC Code:</strong> SBIN00XXXXX</div>
            </div>
          </div>

          {/* Foreign Donors */}
          <div className="card">
            <h3>For Foreign Donors</h3>
            <p style={{marginBottom: '1.5rem'}}>Contributions from outside India require specific compliance. Please contact us or use the FCRA account.</p>
            <div className="bank-box">
              <div className="bank-line"><strong>Bank Name:</strong> State Bank of India (Main Branch, New Delhi)</div>
              <div className="bank-line"><strong>Account Name:</strong> Ma Sharanam Ashram (FCRA)</div>
              <div className="bank-line"><strong>Account No:</strong> XXXXXXXXXX</div>
              <div className="bank-line"><strong>Swift Code:</strong> XXXXXXXXX</div>
            </div>
          </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <p>For any queries regarding donations, please email us at <strong style={{color: 'var(--gold)'}}>gurusharan7@gmail.com</strong></p>
        </div>
      </div>
    </div>
  );
}
