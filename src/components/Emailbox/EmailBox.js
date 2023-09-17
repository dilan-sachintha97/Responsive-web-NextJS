import './EmailBox.css'
import {LuMail} from 'react-icons/lu'
import {motion} from 'framer-motion'
import { containerVariants } from '@/src/utils/animation'

const EmailBox = () => {
  return (
    <motion.div 
      initial={{width:"0.5rem", borderRadius:"100%"}}
      whileInView={{
        width:"70%",
        borderRadius:"999px",
        transition:{
          type:"easeOut",
          duration:1
        }
      }}
      className='email-box'
    >
      
      {/* icon */}
      <motion.div
        variants={containerVariants(0.6)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once:true}}   // only run one time
      >
        <LuMail  size={30} color='grey'/>
      </motion.div>
      

      {/* input */}
      <motion.input 
        variants={containerVariants(0.7)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once:true}}
        type="email" placeholder='Enter Email' />

      {/* get button */}
      <motion.div 
        variants={containerVariants(0.9)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once:true}}
        className="get-funded">Get Funded</motion.div>
    </motion.div>
  )
}

export default EmailBox
