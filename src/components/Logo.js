import React from 'react';

const Logo = ({ size = 48, animated = false }) => {
  // SVG oranı 220x60 (yaklaşık 3.66x1)
  const width = size * 3.66;
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        userSelect: "none",
        cursor: "pointer"
      }}
      className={animated ? "animated-logo" : ""}
    >
      <img 
        src="/logo.svg" 
        alt="Load Zeta Logo" 
        style={{ height: `${size}px`, width: `${width}px`, objectFit: 'contain' }}
      />
    </div>
  );
};

export default Logo;
