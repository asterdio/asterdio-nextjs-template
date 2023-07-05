import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Mero Moto</h1>
      <ul>
        <li>
          <Link href="/components">Components</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
