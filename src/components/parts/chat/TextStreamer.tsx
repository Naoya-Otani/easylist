import React, { useState, useEffect } from 'react';

interface TextStreamerProps {
  text: string;
  loop?: boolean;
}

const TextStreamer: React.FC<TextStreamerProps> = ({ text, loop = false }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    if (text.length === 0 || (!loop && animationIndex > 0)) return;

    setDisplayedText('');

    const delay = loop ? 100 : 50;

    const timers: number[] = text.split('').map((char, index) => {
      return window.setTimeout(() => {
        setDisplayedText((prev) => prev + char);

        if (index === text.length - 1) {
          if (loop) {
            setAnimationIndex((prev) => prev + 1);
          } else {
            
          }
        }
      }, index * delay);
    });
    if (loop && animationIndex === text.length) {
      const timeout = window.setTimeout(() => {
        setAnimationIndex(0);
      }, 1000);
      timers.push(timeout);
    }

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [text, loop, animationIndex]);

  return <p className="text-sm">{displayedText}</p>;
};

export default TextStreamer;
