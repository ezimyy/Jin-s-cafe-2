import React from 'react';
import './index.css';

function App() {
  return (
    <div className="poster-container">
      <div className="poster">
        <div className="poster-content">
          <div className="poster-brand">The Noir Artisanal</div>
          
          <h1 className="poster-title">
            Black Sesame<br />
            Cream Latte
          </h1>
          
          <div className="poster-image-wrapper">
            {/* The image should be replaced with a real high-quality latte image */}
            <img 
              src="https://images.unsplash.com/photo-1620055006093-3ea76bd59d28?q=80&w=1471&auto=format&fit=crop" 
              alt="Black Sesame Cream Latte" 
              className="poster-image"
            />
            <div className="image-overlay"></div>
          </div>
          
          <div className="poster-footer">
            <h2 className="poster-subtitle">시그니처 흑임자 크림 라떼 출시</h2>
            <div className="poster-ornament">✦</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
