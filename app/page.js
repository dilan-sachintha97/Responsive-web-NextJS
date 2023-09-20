"use client"
import NavBar from '@/src/components/NavBar/NavBar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/components/WhatWeDo/WhatWeDo';
import OurDiff from '@/src/components/OurDiff/OurDiff';
import { motion, useAnimation } from 'framer-motion';
import HowItWork from '@/src/components/HowItwork/HowItWork';

export default function Home() {

  const controls = useAnimation()

  return (
    <motion.div className='app' animate={controls} >
        <NavBar/>
        <Hero/>
        <BrandingVideo/>
        <WhatWeDo/>
        
        <motion.div
          onViewportEnter={()=>{
            controls.start({
              backgroundColor: "var(--secondary-color)",
            })
          }}

          onViewportLeave={()=>{
            controls.start({
              backgroundColor:"white"
            })
          }}
          
          viewport={{amount:0.4}}
        >
         <OurDiff/>
        </motion.div>
        <HowItWork/>
      
    </motion.div>
  );
}
