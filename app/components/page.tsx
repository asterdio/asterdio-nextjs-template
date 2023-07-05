import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import CButton from '@/components/ui/form/button.component';
import color from '@/styles/modules/color.module.scss';

export const metadata: Metadata = {
  title: 'Mero Moto - Components',
};

const ComponentsPage = () => {
  return (
    <div>
      <h1
        style={{
          color: color.ColorPrimary1,
          fontSize: '30px',
        }}
      >
        List of resuable components
      </h1>
      <ul>
        <li>
          <Link href="/components/form">Form</Link>
          <CButton name="Custom Button" />
        </li>
      </ul>
    </div>
  );
};

export default ComponentsPage;
