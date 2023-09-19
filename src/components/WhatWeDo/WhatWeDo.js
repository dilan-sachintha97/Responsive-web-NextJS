"use client"
import { features } from '@/src/utils/data'
import './WhatWeDo.css'
import Image from 'next/image'
import{motion} from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const WhatWeDo = () => {
  return (
    <div className='wwd-wrapper'>
        <div className="container">
            <div className="wwd-container">

                {/* head of section */}
                <div className="wwd-header">
                    <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                    className='tag'>What we do</motion.span>

                    <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                    className='title'>{" "}Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illum quod unde, vitae odit ab!
                    </motion.span>

                    <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                    className='des'>Here is how we can evaluate</motion.span>
                </div>

                {/* two blocks */}
                <div className="wwd-blocks">

                    {/* first block */}
                    <div className="wwd-block">
                        <motion.span 
                           initial="offscreen"
                           whileInView={"onscreen"}
                           variants={titleVariants}
                        className='sec-title'>Blue advance</motion.span>
                        <motion.span 
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={desVariants}
                        className='text'>Fund recurring growth expenses e.g customer acquisition inventory</motion.span>

                        <div className="block-features">
                            {features?.slice(0,3).map((data,i)=>(
                                <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
                                    key={i} className='block-feature'>
                                    <Image src={data.icon} alt='feature' width={60} height={60}/>
                                    <span>{data.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* second block */}
                    <div className="wwd-block">
                        <motion.span 
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={titleVariants}
                        className='sec-title'>Blue Seed</motion.span>
                        <motion.span 
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={desVariants}
                        className='text'>Fund one-offs to scale e.g product, hiring</motion.span>

                        <div className="block-features">
                            {features?.slice(3,6).map((data,i)=>(
                                <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
                                    key={i} className='block-feature'>
                                    <Image src={data.icon} alt='feature' width={60} height={60}/>
                                    <span>{data.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* support blocks */}
                <motion.div 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants(0.3)}
                    className="wwd-support">

                    {/* left side */}
                    <div>
                        <span className='sec-title'>Blue Growth Support</span>
                        <span className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at aliquid molestiae nulla aliquam laboriosam?
                        </span>
                    </div>

                    {/* right side */}
                    <div>
                        <span className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, veritatis!</span>

                        <span className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deserunt adipisci eaque harum distinctio. Odit, dicta in molestiae repellendus nulla vitae? Autem dignissimos corrupti, culpa quos expedita tempore consequuntur corporis?</span>
                    </div>
                </motion.div>
            </div>
        </div>
      
    </div>
  )
}

export default WhatWeDo
