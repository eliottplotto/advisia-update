import { FC } from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: FC<ShinyTextProps> = ({ text, disabled = false, speed = 3, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <>
      <style>
        {`
        @keyframes shine {
          0% { background-position: 100%; }
          100% { background-position: -100%; }
        }
        `}
      </style>
      <div
        className={`inline-block ${className}`}
        style={{
          // Le dégradé : Noir (40%) -> Gris Brillant (50%) -> Noir (60%)
          backgroundImage: 'linear-gradient(120deg, #000000 40%, #a1a1a1 50%, #000000 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          display: 'inline-block',
          color: 'transparent', // INDISPENSABLE : Le texte doit être transparent pour voir le fond
          animation: disabled ? 'none' : `shine ${animationDuration} linear infinite`,
        }}
      >
        {text}
      </div>
    </>
  );
};

export default ShinyText;