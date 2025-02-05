import { useState } from 'react';
import { ecoTip } from './tipsData';
import { EcoTip } from './tipsDataTypes';

export function TipsZeroWastePage() {
  function getRandomTip(): EcoTip {
    return ecoTip[Math.floor(Math.random() * ecoTip.length)];
  }

  interface EcoTipCardProps {
    data: EcoTip;
  }

  const EcoTipCard: React.FC<EcoTipCardProps> = ({ data }) => {
    const [flipped, setFlipped] = useState(false);

    const { frontImage, backImage, number, title, description } = data;

    const handleClick = () => {
      setFlipped((prev) => !prev);
    };

    return (
      <div
        onClick={handleClick}
        style={{
          cursor: 'pointer',
          border: '1px solid #ccc',
          padding: '10px',
          margin: '10px',
          width: '200px',
          color: '#ffffff',
          textAlign: 'center',
          backgroundColor: '#16274f',
          borderRadius: '10px',
        }}
      >
        {flipped ? (
          <div>
            <img
              src={backImage}
              alt={`Back of EcoTip ${number}`}
              style={{ width: '100px', height: '100px', borderRadius: '10px' }}
            />
            <p>{number}</p>
            <h5 className="title" style={{ color: 'ffffff' }}>
              {title}
            </h5>
            <p>{description}</p>
          </div>
        ) : (
          <div>
            <img
              src={frontImage}
              alt={`Front of EcoTip ${number}`}
              style={{ width: '100px', height: '100px', borderRadius: '10px' }}
            />
            <p>{number}</p>
          </div>
        )}
      </div>
    );
  };

  const EcoTipGame: React.FC = () => {
    const [currentTip, setCurrentTip] = useState<EcoTip>(getRandomTip());

    const handleNewTip = () => {
      setCurrentTip(getRandomTip());
    };

    return (
      <div style={{ textAlign: 'center' }}>
        <EcoTipCard data={currentTip} />
        <br />
        <button
          onClick={handleNewTip}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            color: ' #16274f',
            border: ' #16274f 1px solid',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            cursor: 'pointer',
          }}
        >
          Get New Tip
        </button>
      </div>
    );
  };

  return (
    <div className="introduction">
      <h5 className="introduction">TIPS ON ZERO-WASTE LIFESTYLE</h5>
      <p className="introduction">
        Welcome, here you'll find eco-friendly tips and tricks!
      </p>
      <EcoTipGame />
    </div>
  );
}
