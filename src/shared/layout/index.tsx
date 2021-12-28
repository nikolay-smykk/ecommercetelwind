import React, { ReactChild, ReactChildren } from 'react';
import { Shared } from '..';

interface Props {
  children: ReactChild | ReactChildren;
}

export const LayoutPage = ({ children }: Props) => {
  return (
    <>
      <Shared.Header />
      <div className="content">{children}</div>

      <Shared.Footer />
    </>
  );
};
