import { createClient } from '@/utils/supabase/server';

export default async function SchoolPage() {
  const supabase = createClient();
  
  let images = [];
  try {
    const { data, error } = await supabase.storage.from('gallery').list('school');
    if (data && !error) {
      images = data.map(file => {
        const { data: urlData } = supabase.storage.from('gallery').getPublicUrl(`school/${file.name}`);
        return urlData.publicUrl;
      }).filter(url => !url.endsWith('.gitkeep'));
    }
  } catch (e) {
    console.error("Failed to fetch images from Supabase", e);
  }

  const fallbackImages = [
    "https://images.unsplash.com/photo-1503676260728-1c00da174a0b?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1510529131414-046648058f96?ixlib=rb-4.0.3",
  ];

  const galleryImages = images.length > 0 ? images : fallbackImages;

  return (
    <div className="section" style={{paddingTop: 'calc(var(--nav-h) + 2rem)'}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Community</span>
          <h1>Ma Sharanam School</h1>
          <p>Providing quality education free for all.</p>
          <div className="divider"></div>
        </div>

        <div className="img-text" style={{marginBottom: '4rem'}}>
          <div className="img-wrap">
            <img src={galleryImages[0]} alt="School Children" />
          </div>
          <div className="text-block">
            <h2>Empowering the Future</h2>
            <p>
              The Ma Sharanam School provides modern education integrated with moral values to children from the local community. We ensure that no child is left behind due to financial constraints.
            </p>
            <p>
              Our school is **free for all**, serving as a beacon of hope and opportunity in the region.
            </p>
          </div>
        </div>

        {/* Activity Specific Gallery */}
        <div className="section" style={{background: 'var(--bg2)', borderRadius: 'var(--radius-lg)', padding: '3rem'}}>
          <div className="section-header text-center">
            <span className="badge">Gallery</span>
            <h2>School Activities</h2>
            <p>Moments of learning and joy.</p>
            <div className="divider"></div>
          </div>

          <div className="grid-3">
            {galleryImages.map((src, index) => (
              <div key={index} className="card" style={{padding: '0', overflow: 'hidden'}}>
                <img src={src} alt={`School ${index + 1}`} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
