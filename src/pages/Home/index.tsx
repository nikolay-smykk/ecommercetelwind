import React from 'react';
import { Components } from '../../components';

import { Shared } from '../../shared';

export const Home = () => {
  return (
    <Shared.Layout>
      <div className="home">
        <Components.Card />
      </div>
    </Shared.Layout>
  );
};
