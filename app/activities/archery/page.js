import { createClient } from '@/utils/supabase/server';

export default async function ArcheryPage() {
  const supabase = createClient();
  
  let images = [];
  try {
    const { data, error } = await supabase.storage.from('gallery').list('archery');
    if (data && !error) {
      images = data.map(file => {
        const { data: urlData } = supabase.storage.from('gallery').getPublicUrl(`archery/${file.name}`);
        return urlData.publicUrl;
      }).filter(url => !url.endsWith('.gitkeep'));
    }
  } catch (e) {
    console.error("Failed to fetch images from Supabase", e);
  }

  const fallbackImages = [
    "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3",
  ];

  const galleryImages = images.length > 0 ? images : fallbackImages;

  return (
    <div className="section" style={{paddingTop: 'calc(var(--nav-h) + 2rem)'}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Excellence</span>
          <h1>Archery (Dhanurveda)</h1>
          <p>Mastering focus and discipline.</p>
          <div className="divider"></div>
        </div>

        <div className="img-text" style={{marginBottom: '4rem'}}>
          <div className="img-wrap">
            <img src={galleryImages[0]} alt="Archery Practice" />
          </div>
          <div className="text-block">
            <h2>National Gold Medalists</h2>
            <p>
              Archery is practiced at the ashram not just as a sport, but as a form of meditation and focus (Dhanurveda). It teaches single-pointed attention and discipline.
            </p>
            <p>
              We are proud that students from our ashram have participated in national level competitions and **won gold medals**, bringing honor to the institution.
            </p>
          </div>
        </div>

        {/* Activity Specific Gallery */}
        <div className="section" style={{background: 'var(--bg2)', borderRadius: 'var(--radius-lg)', padding: '3rem'}}>
          <div className="section-header text-center">
            <span className="badge">Gallery</span>
            <h2>Archery at Ashram</h2>
            <p>Focus and precision.</p>
            <div className="divider"></div>
          </div>

          <div className="grid-3">
            {galleryImages.map((src, index) => (
              <div key={index} className="card" style={{padding: '0', overflow: 'hidden'}}>
                <img src={src} alt={`Archery ${index + 1}`} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
