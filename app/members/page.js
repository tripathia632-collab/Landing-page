import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function MembersArea() {
  const supabase = createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect('/login');
  }

  // BUCKET NAME: Change this if you named your bucket differently!
  const bucketName = 'members-only';

  let pdfFiles = [];
  let videoFiles = [];

  try {
    // 1. Fetch PDFs
    const { data: pdfData, error: pdfError } = await supabase.storage.from(bucketName).list('pdf');
    if (pdfData && !pdfError) {
      const paths = pdfData.map(f => `pdf/${f.name}`).filter(p => !p.endsWith('.gitkeep'));
      if (paths.length > 0) {
        const { data: signedUrls, error: urlError } = await supabase.storage.from(bucketName).createSignedUrls(paths, 600); // 10 mins
        if (signedUrls && !urlError) {
          pdfFiles = signedUrls.map((item, index) => ({
            name: pdfData[index].name,
            url: item.signedUrl
          }));
        }
      }
    }

    // 2. Fetch Videos
    const { data: videoData, error: videoError } = await supabase.storage.from(bucketName).list('video');
    if (videoData && !videoError) {
      const paths = videoData.map(f => `video/${f.name}`).filter(p => !p.endsWith('.gitkeep'));
      if (paths.length > 0) {
        const { data: signedUrls, error: urlError } = await supabase.storage.from(bucketName).createSignedUrls(paths, 600); // 10 mins
        if (signedUrls && !urlError) {
          videoFiles = signedUrls.map((item, index) => ({
            name: videoData[index].name,
            url: item.signedUrl
          }));
        }
      }
    }
  } catch (e) {
    console.error("Failed to fetch private files", e);
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
            <p>Access exclusive spiritual texts and PDFs.</p>
            <div style={{marginTop: '1.5rem'}}>
              {pdfFiles.length > 0 ? (
                <ul style={{listStyle: 'none'}}>
                  {pdfFiles.map((file, index) => (
                    <li key={index} style={{padding: '.5rem 0', borderBottom: '1px solid var(--border)'}}>
                      <a href={file.url} target="_blank" rel="noopener noreferrer" style={{color: 'var(--gold)'}}>
                        ✦ {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{color: 'var(--muted)', fontSize: '0.9rem'}}>No PDFs uploaded yet or bucket name is incorrect.</p>
              )}
            </div>
          </div>

          {/* Videos */}
          <div className="card">
            <div className="card-icon">🎬</div>
            <h3>Video Gallery</h3>
            <p>Watch recorded satsangs and events.</p>
            <div style={{marginTop: '1.5rem'}}>
              {videoFiles.length > 0 ? (
                <ul style={{listStyle: 'none'}}>
                  {videoFiles.map((file, index) => (
                    <li key={index} style={{padding: '.5rem 0', borderBottom: '1px solid var(--border)'}}>
                      <a href={file.url} target="_blank" rel="noopener noreferrer" style={{color: 'var(--gold)'}}>
                        ▶ {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{color: 'var(--muted)', fontSize: '0.9rem'}}>No videos uploaded yet or bucket name is incorrect.</p>
              )}
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
