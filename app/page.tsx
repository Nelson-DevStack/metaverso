// import { Inter } from 'next/font/google';
import React from 'react';

import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';
// import styles from './page.module.css';
// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <h1>Metaversus</h1>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </main>
  );
}
