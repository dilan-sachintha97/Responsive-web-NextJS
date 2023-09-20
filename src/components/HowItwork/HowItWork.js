import { hitFeatures } from '@/src/utils/data'
import './HowItWork.css'
import Image from 'next/image'

const HowItWork = () => {
  return (
    <div className='hit-wrapper'>
      <div className="container">
        <div className="hit-container">

            {/* head */}
            <div className="hit-head">
                <span className='tag'>How It works</span>
                <span className='title'>Unlocking potential along the growth journey</span>
            </div>

            {/* features */}
            <div className="hit-features">
               {hitFeatures?.map((data, index)=>(
                    <div key={index} className="hit-feature">
                        {/* left side */}
                        <div className="detail">
                            <span className="des">0{index+1}</span>
                            <span className="sec-title">{data.title}</span>
                            <span className="text">{data.des}</span>
                        </div>

                        {/* right-side */}
                        <div className="icon">
                            <Image 
                                src={data.icon} 
                                width={128} 
                                height={128} 
                                style={{translate:"50% 0rem"}}
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
