import React from 'react';

export default function Portfolio() {
  const photos = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1741761446510-7804410eade3?q=80&w=1750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Portfolio</h2>
      <div className="row">
        {photos.map((src, idx) => (
          <div className="col-md-6 col-lg-3 mb-4" key={idx}>
            <img src={src} alt={`Portfolio ${idx}`} className="img-fluid rounded shadow" />
          </div>
        ))}
      </div>
    </div>
  );
}
