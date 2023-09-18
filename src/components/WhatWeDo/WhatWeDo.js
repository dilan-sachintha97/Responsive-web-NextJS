import { features } from '@/src/utils/data'
import './WhatWeDo.css'
import Image from 'next/image'

const WhatWeDo = () => {
  return (
    <div className='wwd-wrapper'>
        <div className="container">
            <div className="wwd-container">

                {/* head of section */}
                <div className="wwd-header">
                    <span className='tag'>What we do</span>
                    <span className='title'>{" "}Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illum quod unde, vitae odit ab!
                    </span>
                    <span className='des'>Here is how we can evaluate</span>
                </div>

                {/* two blocks */}
                <div className="wwd-blocks">

                    {/* first block */}
                    <div className="wwd-block">
                        <span className='sec-title'>Blue advance</span>
                        <span className='text'>Fund recurring growth expenses e.g customer acquisition inventory</span>

                        <div className="block-features">
                            {features?.slice(0,3).map((data,i)=>(
                                <div key={i}>
                                    <Image src={data.icon} alt='feature' width={60} height={60}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* second block */}
                    <div className="wwd-block">second</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default WhatWeDo
