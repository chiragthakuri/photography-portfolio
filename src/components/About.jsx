import React from 'react';

export default function About() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">About Me</h2>
      <div className="card shadow border-0 p-4">
        <div className="row g-0 align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
              alt="Photographer"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "200px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text fs-5">
                Hi! I'm a passionate photographer specializing in landscapes, portraits, and urban photography.
                I love capturing genuine moments and the beauty of everyday life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
