import React from "react";

interface SeparatorProps {
  className?: string;
  style?: React.CSSProperties;
  paddingTop?: string;
  paddingBottom?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className = "", style = {}, paddingTop = '40px', paddingBottom = '40px' }) => {
  return (
    <div className="separator-container w-full flex justify-center" style={{ backgroundColor: '#f9f9f9', paddingTop: paddingTop, paddingBottom: paddingBottom }}>
      <div 
        className={`border-t ${className}`}
        style={{
          borderColor: '#EEEEEE',
          borderWidth: '1px',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          ...style
        }}
      />
    </div>
  );
};

export default Separator;




