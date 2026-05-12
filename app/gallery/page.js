export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1545208393-21602d1e82e7?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1510529131414-046648058f96?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1503676260728-1c00da174a0b?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1570051008101-2f1586522303?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3",
  ];

  return (
    <div className="section" style={{paddingTop: 'calc(var(--nav-h) + 2rem)'}}>
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Visual Journey</span>
          <h1>Image Gallery</h1>
          <p>Glimpses of life, service, and devotion at Ma Sharanam Ashram.</p>
          <div className="divider"></div>
        </div>

        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Gallery image ${index + 1}`} />
              <div className="gallery-overlay">
                <span>🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
