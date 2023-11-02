import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen
    mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#F9A8D4]'/>
          <div className='w-1 sm:h-96 h-40 bg-gradient-to-b from-pink-300'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-sky-400`}> 
          Hello, I'm <span className='text-[#F9A8D4]'> Allen </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop backend applications <br className='sm:block hidden'/>
            and websites
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  )
}

export default Hero