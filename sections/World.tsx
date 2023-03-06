'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { TitleText, TypingText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import Image from 'next/image';
import mapImg from '../assets/map.png';
import people1Img from '../assets/people-01.png';
import people2Img from '../assets/people-02.png';
import people3Img from '../assets/people-03.png';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Pessoas no mundo" textStyles="text-center" />
      <TitleText
        title={
          <>Encontre amigos e convide-os para jogar juntos no mesmo mundo</>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px] "
      >
        {/* <Image src="/map.png" alt="map" className="w-full h-full object-cover" /> */}
        <Image src={mapImg} alt="map" className="w-full h-full object-cover" loading='eager' />

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <Image src={people1Img} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <Image src={people2Img} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <Image src={people3Img} alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
