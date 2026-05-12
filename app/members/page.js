import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function MembersArea() {
  const supabase = createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect('/login');
  }

  return (
    <div className="section" style={{paddingTop: 'calc(var(--nav-h) + 2rem)'}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">🔒 Members Only</span>
          <h1>Welcome to the Members Area</h1>
          <p>Logged in as <strong style={{color: 'var(--gold)'}}>{user.email}</strong></p>
          <div className="divider"></div>
        </div>

        <div className="grid-2">
          {/* Reading Material */}
          <div className="card">
            <div className="card-icon">📚</div>
            <h3>Reading Material</h3>
            <p>Access exclusive spiritual texts, PDFs, and articles.</p>
            <div style={{marginTop: '1.5rem'}}>
              <ul style={{listStyle: 'none'}}>
                <li style={{padding: '.5rem 0', borderBottom: '1px solid var(--border)'}}>
                  <a href="#" style={{color: 'var(--gold)'}}>✦ Introduction to Swakriya Yoga (PDF)</a>
                </li>
                <li style={{padding: '.5rem 0', borderBottom: '1px solid var(--border)'}}>
                  <a href="#" style={{color: 'var(--gold)'}}>✦ Matri Vani - Volume 1 (PDF)</a>
                </li>
                <li style={{padding: '.5rem 0'}}>
                  <a href="#" style={{color: 'var(--gold)'}}>✦ Ashram Daily Prayers & Chants</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Videos */}
          <div className="card">
            <div className="card-icon">🎬</div>
            <h3>Video Gallery</h3>
            <p>Watch recorded satsangs, teachings, and events.</p>
            <div style={{marginTop: '1.5rem'}}>
              <ul style={{listStyle: 'none'}}>
                <li style={{padding: '.5rem 0', borderBottom: '1px solid var(--border)'}}>
                  <a href="#" style={{color: 'var(--gold)'}}>▶ Navaratri 2024 - Day 1 Highlights</a>
                </li>
                <li style={{padding: '.5rem 0', borderBottom: '1px solid var(--border)'}}>
                  <a href="#" style={{color: 'var(--gold)'}}>▶ Swami Gurusharan - Talk on Bhagavad Gita</a>
                </li>
                <li style={{padding: '.5rem 0'}}>
                  <a href="#" style={{color: 'var(--gold)'}}>▶ Gurukul Children's Chanting</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <form action="/auth/signout" method="POST">
            <button type="submit" className="btn btn-outline">Sign Out</button>
          </form>
        </div>
      </div>
    </div>
  );
}
