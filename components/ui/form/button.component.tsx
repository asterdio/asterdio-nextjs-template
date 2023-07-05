'use client';

import React from 'react';
import { Button } from 'antd';

export interface CButtonPropTypes {
  name: string;
}

const CButton = (props: CButtonPropTypes) => {
  return (
    <Button
      type="primary"
      onClick={() => {
        throw new Error('Sentry Frontend Error');
      }}
    >
      {props.name}
    </Button>
  );
};

export default React.memo(CButton);
