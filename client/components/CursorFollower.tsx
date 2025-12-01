import React, { useEffect, useState } from 'react';

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed w-4 h-4 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </div>
      
      {/* Follower cursor */}
      <div
        className="fixed w-8 h-8 pointer-events-none z-[9998] mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className="w-full h-full border-2 border-white rounded-full opacity-50" />
      </div>
    </>
  );
};

export default CursorFollower;
