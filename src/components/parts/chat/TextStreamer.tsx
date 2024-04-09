// TextStreamer.tsx
import React, { useState, useEffect } from 'react';

interface TextStreamerProps {
  text: string;
}

const TextStreamer: React.FC<TextStreamerProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');

    if (text.length === 0) return;

    const timers: number[] = [];

    
    text.split('').forEach((char, index) => {
      const timer = window.setTimeout(() => {
        setDisplayedText((prev) => prev + char);
      }, index * 50); 

      timers.push(timer);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [text]); 

  return <p className="text-sm">{displayedText}</p>;
};

export default TextStreamer;
