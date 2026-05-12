import { createClient } from '@/utils/supabase/server';

export default async function SatsangPage() {
  const supabase = createClient();
  
  let images = [];
  try {
    const { data, error } = await supabase.storage.from('gallery').list('satsang');
    if (data && !error) {
      images = data.map(file => {
        const { data: urlData } = supabase.storage.from('gallery').getPublicUrl(`satsang/${file.name}`);
        return urlData.publicUrl;
      }).filter(url => !url.endsWith('.gitkeep'));
    }
  } catch (e) {
    console.error("Failed to fetch images from Supabase", e);
  }

  const fallbackImages = [
    "https://images.unsplash.com/photo-1528319725582-ddc096101511?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1545208393-21602d1e82e7?ixlib=rb-4.0.3",
  ];

  const galleryImages = images.length > 0 ? images : fallbackImages;

  return (
    <div className="section" style={{paddingTop: 'calc(var(--nav-h) + 2rem)'}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Spiritual</span>
          <h1>Satsang & Matri Vani</h1>
          <p>Daily communion and divine wisdom.</p>
          <div className="divider"></div>
        </div>

        <div className="img-text" style={{marginBottom: '4rem'}}>
          <div className="img-wrap">
            <img src={galleryImages[0]} alt="Satsang" />
          </div>
          <div className="text-block">
            <h2>Daily Matri Vani</h2>
            <p>
              Every day, we gather for Matri Vani reading and Satsang. Swami ji shares insights from the life and teachings of Ma Anandamayi.
            </p>
            <p>
              On **Sundays**, we host a live Zoom session where devotees from across the world can join, ask questions, and listen to the discourse.
            </p>
          </div>
        </div>

        {/* Activity Specific Gallery */}
        <div className="section" style={{background: 'var(--bg2)', borderRadius: 'var(--radius-lg)', padding: '3rem'}}>
          <div className="section-header text-center">
            <span className="badge">Gallery</span>
            <h2>Satsang Moments</h2>
            <p>Devotion and community.</p>
            <div className="divider"></div>
          </div>

          <div className="grid-3">
            {galleryImages.map((src, index) => (
              <div key={index} className="card" style={{padding: '0', overflow: 'hidden'}}>
                <img src={src} alt={`Satsang ${index + 1}`} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
