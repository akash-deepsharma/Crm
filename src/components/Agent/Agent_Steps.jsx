import Image from 'next/image'
import React from 'react'

export default async function Agent_Steps(banner_stepData) {
    const stepData = await banner_stepData?.data

    const point = stepData?.[0]?.extra_data?.points ;
    const Img = stepData?.[0]?.image
    
    
    const content = stepData?.[0]?.content;
    const words = content.split(" ");  
    const a = words.slice(0, 2).join(" ");
    const b = words.slice(2, 4).join(" ");
    const c = words.slice(4).join(" ");

  return (
    <div className='component-agent-steps section-padding'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-7'>
                    <div className='agent_content'>

                    <h2 className="heading-wrapper with-separator wow fadeInUp">
                        {a}{" "} <span className="highlighted-text">{b}</span>{" "} {c}
                    </h2>
                        <ul className='agent-steps-list'>
                            {point?.map((point, index) => (
                                <li key={index}>
                                    <span>{index + 1}</span> {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className='step_img'>
                        <Image src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${Img}`} alt={content} width={600} height={600} />

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
