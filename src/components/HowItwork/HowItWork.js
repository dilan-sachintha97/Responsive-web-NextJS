"use client"
import { hitFeatures } from '@/src/utils/data'
import './HowItWork.css'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { tagVariants, titleVariants } from '@/src/utils/animation'

const HowItWork = () => {

    const featureVariants ={
        offscreen:{
            scale:0.5
        },
        onscreen:{
            scale:1,
            transition:{
                type:"spring",
                duration:1.5,

            }
        }
    }


  return (
    <div className='hit-wrapper'>
      <div className="container">
        <div className="hit-container">

            {/* head */}
            <div className="hit-head">
                <motion.span
                    variants={tagVariants}
                    initial="offscreen"
                    whileInView={"onscreen"} 
                    className='tag'>How It works</motion.span>
                <motion.span
                    variants={titleVariants}
                    initial="offscreen"
                    whileInView={"onscreen"} 
                    className='title'>Unlocking potential along the growth journey</motion.span>
            </div>

            {/* features */}
            <div className="hit-features">
               {hitFeatures?.map((data, index)=>(
                    <div key={index} className="hit-feature">
                        {/* left side */}
                        <motion.div 
                        initial={{opacity:0, x:-100}}
                        whileInView={{
                            opacity:1,
                            x:0,
                            transition:{
                                type:"easeIn",
                                duration:1,
                                delay:0.7
                            }
                        }}
                        className="detail">
                            <span className="des">0{index+1}</span>
                            <span className="sec-title">{data.title}</span>
                            <span className="text">{data.des}</span>
                        </motion.div>

                        {/* right-side */}
                        <div className="icon">
                            <Image 
                                src={data.icon} 
                                width={128} 
                                height={128} 
                                className='img-icon'
                                alt='icon'/>
                
                        </div>
                    </div>
               ))}
            </div>

        </div>
      </div>
    </div>
  )
}

export default HowItWork
