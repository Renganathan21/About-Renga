import React, { useEffect, useState } from "react";
interface CursorGlowProps {
  config: {
    enableGlow: boolean;
    glowSize: number;
    glowColor: string;
  };
}

export const CursorGlow: React.FC<CursorGlowProps> = ({ config }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!config.enableGlow) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [config.enableGlow, isVisible]);

  if (!config.enableGlow || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-40 transition-transform duration-75 -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${config.glowSize}px`,
        height: `${config.glowSize}px`,
        background: `radial-gradient(circle, ${config.glowColor} 0%, rgba(0,0,0,0) 70%)`,
        borderRadius: "50%",
      }}
    />
  );
};
