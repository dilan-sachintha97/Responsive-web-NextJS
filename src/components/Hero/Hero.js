"use client"

import { HeroData } from '@/src/utils/data'
import EmailBox from '../Emailbox/EmailBox'
import './Hero.css'
import {animate, motion} from 'framer-motion'

const Hero = () => {

    const variants = (delay) => {
        return {
            initial: {
                y: "18rem"
            },
            animate: {
                y: "0rem",
                transition: {
                    type: "spring",
                    damping: 25,
                    duration: 2.5,
                    delay
                }
            }
        }
    };

    const imgVariants=()=>(
        {
            initial:{
                y:"18rem"
            },
            animate:{
                y:"0rem",
                transition:{
                    type:"spring",
                    duration:2,
                    stiffness:30
                }
            }
        }
    )
    

  return (
    <div className="h-wrapper">
        <div className="container">
            <div className="h-container">

                {/* left side */}
                <div className="h-left">
                    <div className="image-row">
                        {HeroData?.slice(0,3).map((person,index)=>(
                            <div key={index} className='person-pill'>
                                <motion.div 
                                    initial={"initial"}
                                    animate={"animate"}
                                    variants={variants(person.delay)}
                                    className="person-pill-bg"
                                    style={{backgroundColor: person.bg}}
                                    >
                                
                                    <motion.img 
                                        initial={"initial"}
                                        animate={"animate"}
                                        variants={imgVariants()}
                                        src={person.src} alt=" person" />
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    <div className="image-row">
                        {HeroData?.slice(3,6).map((person,index)=>(
                            <div key={index} className='person-pill'>
                                <motion.div 
                                    initial={"initial"}
                                    animate={"animate"}
                                    variants={variants(person.delay)}
                                    className="person-pill-bg"
                                    style={{backgroundColor: person.bg}}
                                    >
                                
                                    <motion.img 
                                        initial={"initial"}
                                        animate={"animate"}
                                        variants={imgVariants()}
                                        src={person.src} alt=" person" />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* right side */}
                <div className="h-right">
                    <div className="h-title">
                        <span>Redefine How</span>
                        <span>You Grow your</span>
                        <span>Digital Business</span>
                    </div>

                    <div className="h-des">
                        Revenue based funding and execution support designed for early stage founders
                    </div>

                    <EmailBox/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero
