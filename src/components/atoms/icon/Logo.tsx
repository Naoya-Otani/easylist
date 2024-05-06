import React from "react";

interface LogoProps {
  className?: string; 
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => { 
  return (
    <img
      src="/icon-easylist.svg"
      alt="logo icon"
      className={className}
    />
  );
};

export default Logo;









