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
                                <div key={i} className='block-feature'>
                                    <Image src={data.icon} alt='feature' width={60} height={60}/>
                                    <span>{data.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* second block */}
                    <div className="wwd-block">
                        <span className='sec-title'>Blue Seed</span>
                        <span className='text'>Fund one-offs to scale e.g product, hiring</span>

                        <div className="block-features">
                            {features?.slice(3,).map((data,i)=>(
                                <div key={i} className='block-feature'>
                                    <Image src={data.icon} alt='feature' width={60} height={60}/>
                                    <span>{data.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* support blocks */}
                <div className="wwd-support">

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
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default WhatWeDo
