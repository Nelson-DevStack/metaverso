// import { Inter } from 'next/font/google';
import React from 'react';

import styles from './page.module.css';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className="text-4xl font-medium">
          Next.js 13: Initial Setup - TailwindCSS, ESlint, Prettier and
          Editorconfig
        </h1>
        <h2>Metaversus</h2>
        <p>Made by Nelson Carvalho, 2023</p>
      </div>
    </main>
  );
}
