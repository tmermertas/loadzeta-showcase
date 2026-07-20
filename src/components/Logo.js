import React from 'react';
import { Truck } from 'lucide-react';

const Logo = ({ size = 48, animated = false }) => {
  const fontSize = `${size * 0.65}px`; 
  const iconSize = size * 0.8;
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        userSelect: "none",
      }}
      className={animated ? "animated-logo" : ""}
    >
      <div style={{
          background: 'linear-gradient(135deg, var(--accent-color), #0056b3)',
          borderRadius: '12px',
          width: `${size}px`,
          height: `${size}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 86, 179, 0.3)'
        }}>
        <Truck size={iconSize} color="#ffffff" strokeWidth={2.5} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span
            style={{
              fontWeight: "900",
              fontSize: fontSize,
              letterSpacing: "-0.03em",
              lineHeight: "1",
              color: "var(--text-primary)"
            }}
          >Load</span>
          <span
            style={{
              fontWeight: "800",
              fontSize: `calc(${fontSize} * 0.45)`,
              letterSpacing: "0.3em",
              lineHeight: "1",
              color: "var(--accent-color)",
              textTransform: "uppercase",
              paddingLeft: "2px",
              marginTop: "4px"
            }}
          >ZETA</span>
      </div>
    </div>
  );
};

export default Logo;
