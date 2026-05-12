import { createClient } from '@/utils/supabase/server';

export default async function GurukulPage() {
  const supabase = createClient();
  
  // Try to fetch images from Supabase Storage folder 'gurukul'
  let images = [];
  try {
    const { data, error } = await supabase.storage.from('gallery').list('gurukul');
    if (data && !error) {
      images = data.map(file => {
        const { data: urlData } = supabase.storage.from('gallery').getPublicUrl(`gurukul/${file.name}`);
        return urlData.publicUrl;
      }).filter(url => !url.endsWith('.gitkeep')); // Exclude .gitkeep
    }
  } catch (e) {
    console.error("Failed to fetch images from Supabase", e);
  }

  // Fallback dummy images if none found
  const fallbackImages = [
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1510529131414-046648058f96?ixlib=rb-4.0.3",
  ];

  const galleryImages = images.length > 0 ? images : fallbackImages;

  return (
    <div className="section" style={{paddingTop: 'calc(var(--nav-h) + 2rem)'}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Education</span>
          <h1>Ma Sharanam Gurukul</h1>
          <p>Preserving ancient traditions and values in a modern world.</p>
          <div className="divider"></div>
        </div>

        <div className="img-text" style={{marginBottom: '4rem'}}>
          <div className="img-wrap">
            <img src={galleryImages[0]} alt="Gurukul Life" />
          </div>
          <div className="text-block">
            <h2>Tradition of Excellence</h2>
            <p>
              In our Gurukul, students live a disciplined life of learning, meditation, and service. We believe in the holistic development of the child, combining ancient wisdom with modern understanding.
            </p>
            <p>
              All education, boarding, and lodging are provided **completely free of cost** to the students, supported by the generous contributions of devotees.
            </p>
          </div>
        </div>

        {/* Activity Specific Gallery */}
        <div className="section" style={{background: 'var(--bg2)', borderRadius: 'var(--radius-lg)', padding: '3rem'}}>
          <div className="section-header text-center">
            <span className="badge">Gallery</span>
            <h2>Glimpses of Gurukul</h2>
            <p>Pictures from daily life and special events.</p>
            <div className="divider"></div>
          </div>

          <div className="grid-3">
            {galleryImages.map((src, index) => (
              <div key={index} className="card" style={{padding: '0', overflow: 'hidden'}}>
                <img src={src} alt={`Gurukul ${index + 1}`} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
