// src/components/DecryptText.jsx
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const DecryptText = ({ text, className = '' }) => {
  const [displayed, setDisplayed] = useState('');
  const [triggered, setTriggered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && !triggered) {
      setTriggered(true);
      let i = 0;
      const decrypt = setInterval(() => {
        if (i <= text.length) {
          const randomChar = () =>
            String.fromCharCode(33 + Math.floor(Math.random() * 94));
          const shuffled = [...text]
            .map((char, idx) => (idx <= i ? char : randomChar()))
            .join('');
          setDisplayed(shuffled);
          i++;
        } else {
          clearInterval(decrypt);
          setDisplayed(text);
        }
      }, 70);
    }
  }, [inView, triggered, text]);

  return (
    <h2 ref={ref} className={className}>
      {displayed}
    </h2>
  );
};

export default DecryptText;
