"use client"
import { whoWeInvest } from '@/src/utils/data'
import './WhoWeInvesr.css'
import {motion} from 'framer-motion'
import { containerVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const WhoWeInvest = () => {
  return (
    <div className='wwi-wrapper'>
      <div className="container">
        <div className="wwi-container">

            {/* left side */}
            <div className="wwi-left">

                {/* head */}
                <div className="head">
                    <motion.span
                        variants={tagVariants}
                        initial="offscreen"
                        whileInView={"onscreen"} 
                        className="tag">Who we invest in</motion.span>
                    <motion.span
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView={"onscreen"} 
                        className="title">Digital Business <br /> ith early transaction</motion.span>
                </div>

                {/* features */}
                <div className="wwi-features">
                    {whoWeInvest?.map((data,index)=>(
                        <motion.div 
                        variants={containerVariants(index*0.05+1)}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        key={index} className="wwi-feature">
                            <span className="des">{data.title}</span>
                            <span className="text">{data.des}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* right side */}
            <div className="wwi-right">
                <motion.img 
                variants={containerVariants(0.5)}
                initial="offscreen"
                whileInView={"onscreen"}
                src="persons.png" alt="person" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeInvest
