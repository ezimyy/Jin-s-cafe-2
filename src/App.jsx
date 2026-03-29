import React from 'react';
import './index.css';

function App() {
  return (
    <div className="poster-container">
      <div className="poster">
        <div className="poster-content">
          <div className="poster-brand">The Noir Artisanal</div>
          
          <h1 className="poster-title">
            Signature Black<br />
            Sesame<br />
            Cream Latte
          </h1>
          
          <div className="poster-image-wrapper">
            {/* The image should be replaced with a real high-quality latte image */}
            <img 
              src="/Jin-s-cafe-2/poster.png" 
              alt="Black Sesame Cream Latte" 
              className="poster-image"
            />
            <div className="image-overlay"></div>
          </div>
          
          <div className="poster-footer">
            <h2 className="poster-subtitle">Available Exclusive Today</h2>
            <div className="poster-ornament">✦</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
