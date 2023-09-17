import { HeroData } from '@/src/utils/data'
import EmailBox from '../Emailbox/EmailBox'
import './Hero.css'

const Hero = () => {
  return (
    <div className="h-wrapper">
        <div className="container">
            <div className="h-container">

                {/* left side */}
                <div className="h-left">
                    <div className="image-row">
                        {HeroData?.slice(0,3).map((person,index)=>(
                            <div key={index} className='person-pill'>
                                <div className="person-pill-bg">
                                    <img src={person.src} alt=" person" />
                                </div>
                            </div>
                        ))}
            
                    </div>

                    <div className="image-row">
                        {HeroData?.slice(3,6).map((person,index)=>(
                            <div key={index} className='person-pill'>
                                <div className="person-pill-bg">
                                    <img src={person.src} alt=" person" />
                                </div>
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
