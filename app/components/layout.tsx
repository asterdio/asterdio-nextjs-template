import React from 'react';

export interface ComponentsLayoutPropTypes {
  children: React.ReactNode;
}

const ComponentsLayout = ({ children }: ComponentsLayoutPropTypes) => {
  return (
    <div>
      <h1>For testing purposes only</h1>
      {children}
    </div>
  );
};

export default ComponentsLayout;
