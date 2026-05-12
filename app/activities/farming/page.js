import { createClient } from '@/utils/supabase/server';

export default async function FarmingPage() {
  const supabase = createClient();
  
  let images = [];
  try {
    const { data, error } = await supabase.storage.from('gallery').list('farming');
    if (data && !error) {
      images = data.map(file => {
        const { data: urlData } = supabase.storage.from('gallery').getPublicUrl(`farming/${file.name}`);
        return urlData.publicUrl;
      }).filter(url => !url.endsWith('.gitkeep'));
    }
  } catch (e) {
    console.error("Failed to fetch images from Supabase", e);
  }

  const fallbackImages = [
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1570051008101-2f1586522303?ixlib=rb-4.0.3",
  ];

  const galleryImages = images.length > 0 ? images : fallbackImages;

  return (
    <div className="section" style={{paddingTop: 'calc(var(--nav-h) + 2rem)'}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Sustainability</span>
          <h1>Organic Agriculture</h1>
          <p>Farming in harmony with nature.</p>
          <div className="divider"></div>
        </div>

        <div className="img-text" style={{marginBottom: '4rem'}}>
          <div className="img-wrap">
            <img src={galleryImages[0]} alt="Organic Farm" />
          </div>
          <div className="text-block">
            <h2>Fertile Soil of Narmada</h2>
            <p>
              We practice strictly organic farming on the fertile lands on the bank of the river Narmada. We use natural compost and cow-based fertilizers from our Gaushala.
            </p>
            <p>
              The fresh produce sustains the ashram community and the children in the Gurukul, ensuring pure and healthy food for all.
            </p>
          </div>
        </div>

        {/* Activity Specific Gallery */}
        <div className="section" style={{background: 'var(--bg2)', borderRadius: 'var(--radius-lg)', padding: '3rem'}}>
          <div className="section-header text-center">
            <span className="badge">Gallery</span>
            <h2>Our Fields</h2>
            <p>Nature's bounty.</p>
            <div className="divider"></div>
          </div>

          <div className="grid-3">
            {galleryImages.map((src, index) => (
              <div key={index} className="card" style={{padding: '0', overflow: 'hidden'}}>
                <img src={src} alt={`Farming ${index + 1}`} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
