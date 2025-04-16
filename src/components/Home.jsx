import React from 'react';

const Home = () => {
  return (
    
         <div className="container text-center my-5">
      <h1 className="display-4">Welcome to My Photography Portfolio</h1>
      <p className="lead">Capturing the world through my lens.</p>
      <img 
        src="https://images.pexels.com/photos/5465010/pexels-photo-5465010.png?cs=srgb&dl=pexels-luis-zorreta-3652444-5465010.jpg&fm=jpg" 
        alt="Hero" 
        className="img-fluid mt-4 rounded shadow"
        style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
      />
      </div>
  );
};

export default Home;
