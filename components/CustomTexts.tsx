'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { textContainer, textVariant2 } from '../utils/motion';

type TextsProps = {
  title: string;
  textStyles: string;
};

export const TypingText = ({ title, textStyles }: TextsProps) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter) => (
      <motion.span variants={textVariant2} key={letter}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: TextsProps) => (
  <h2 className={`${textStyles}`}>{title}</h2>
);
