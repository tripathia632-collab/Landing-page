import { createClient } from '@/utils/supabase/server';

export default async function GaushalaPage() {
  const supabase = createClient();
  
  let images = [];
  try {
    const { data, error } = await supabase.storage.from('gallery').list('gaushala');
    if (data && !error) {
      images = data.map(file => {
        const { data: urlData } = supabase.storage.from('gallery').getPublicUrl(`gaushala/${file.name}`);
        return urlData.publicUrl;
      }).filter(url => !url.endsWith('.gitkeep'));
    }
  } catch (e) {
    console.error("Failed to fetch images from Supabase", e);
  }

  const fallbackImages = [
    "https://images.unsplash.com/photo-1570051008101-2f1586522303?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3",
  ];

  const galleryImages = images.length > 0 ? images : fallbackImages;

  return (
    <div className="section" style={{paddingTop: 'calc(var(--nav-h) + 2rem)'}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Service</span>
          <h1>Gaushala</h1>
          <p>Serving and protecting indigenous cows.</p>
          <div className="divider"></div>
        </div>

        <div className="img-text" style={{marginBottom: '4rem'}}>
          <div className="img-wrap">
            <img src={galleryImages[0]} alt="Cows in Gaushala" />
          </div>
          <div className="text-block">
            <h2>Compassionate Care</h2>
            <p>
              Our Gaushala is a home for indigenous cows. We believe in the sacredness of the cow and practice non-violent, compassionate care. The milk produced is used for the children in the Gurukul and School.
            </p>
            <p>
              We also promote cow-based agriculture (Panchagavya) to enrich the soil of our organic farm.
            </p>
          </div>
        </div>

        {/* Activity Specific Gallery */}
        <div className="section" style={{background: 'var(--bg2)', borderRadius: 'var(--radius-lg)', padding: '3rem'}}>
          <div className="section-header text-center">
            <span className="badge">Gallery</span>
            <h2>Glimpses of Gaushala</h2>
            <p>Serving the Go-Mata.</p>
            <div className="divider"></div>
          </div>

          <div className="grid-3">
            {galleryImages.map((src, index) => (
              <div key={index} className="card" style={{padding: '0', overflow: 'hidden'}}>
                <img src={src} alt={`Gaushala ${index + 1}`} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
