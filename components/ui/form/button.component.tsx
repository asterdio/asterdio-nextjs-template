'use client';

import React from 'react';
import { Button } from 'antd';

export interface CButtonPropTypes {
  name: string;
}

const CButton = (props: CButtonPropTypes) => {
  return <Button type="primary"> {props.name}</Button>;
};

export default React.memo(CButton);
