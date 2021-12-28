import React from 'react';
import First from '../../mock/img/1.jpg.webp';

export const Card = (): any => {
  return (
    <div className="home_card_inner">
      <img alt="some" className="home_card_image" src={First} loading="lazy" />
    </div>
  );
};
