import './EmailBox.css'
import {LuMail} from 'react-icons/lu'

const EmailBox = () => {
  return (
    <div className='email-box'>
      
      {/* icon */}
      <LuMail  size={30} color='grey'/>

      {/* input */}
      <input type="email" placeholder='Enter Email' />

      {/* get button */}
      <div className="get-funded">Get Funded</div>
    </div>
  )
}

export default EmailBox
