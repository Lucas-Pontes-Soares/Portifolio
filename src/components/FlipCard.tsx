import React, { useState } from 'react';
import classNames from 'classnames';
import '../css/FlipCard.css';

interface FlipCardProps {
  frontImage: string;
  title: string;
  backText: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({ title, frontImage, backText }) => {
    const [isFlipped, setFlipped] = useState(false);

    const handleCardFlip = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div
            className={classNames('flip-card', { 'flipped': isFlipped })}
            onClick={handleCardFlip}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={frontImage} alt="Imagem do Card" className="w-full h-full object-cover"/>
                </div>
                <div className="flip-card-back bg-gray-700">
                    <h1 className='text-center text-3xl'>{title}</h1>
                    <p>{backText}</p>
                </div>
            </div>
        </div>
    );
    };
