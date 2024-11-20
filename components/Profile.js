'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 2,
            ease: 'easeIn',
          },
        }}
        className="w-full h-full flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2.4,
              ease: 'easeInOut',
            },
          }}
          className="w-[200px] h-[200px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/faisa.png"
            alt="Profile Picture"
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="w-[250px] xl:w-[500px] h-[250px] xl:h-[500px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M253,3 C383,3 503,123 503,253 C503,383 383,503 253,503 C123,503 3,383 3,253 C3,123 123,3 253,3 Z"
            stroke="#FFD700" // Gold yellow color
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: '0 1000',
              opacity: 0.5,
            }}
            animate={{
              strokeDasharray: ['20 50', '60 80', '30 120'],
              strokeWidth: [4, 2, 6],
              rotate: [0, 180, 360],
              opacity: [0.8, 1, 0.6],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />
          <motion.path
            d="M253,50 C363,50 463,150 463,253 C463,356 363,456 253,456 C143,456 43,356 43,253 C43,150 143,50 253,50 Z"
            stroke="#FFC300" // Lighter yellow color
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: '0 1000',
              opacity: 0.8,
            }}
            animate={{
              strokeDasharray: ['10 40', '70 90', '50 140'],
              strokeWidth: [3, 5, 3],
              rotate: [0, -180, -360],
              opacity: [0.9, 1, 0.5],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Profile;
