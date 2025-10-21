import React from 'react'

export default function Agent_Steps() {
  return (
    <div className='component-agent-steps section-padding'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-7'>
                    <div className='agent_content'>

                    <h2 className='heading-wrapper with-separator wow fadeInUp'>Your path <span>to success</span> starts here</h2>
                    <ul className='agent-steps-list'>
                        <li><span>1</span> Grow your business with increased revenue streams</li>
                        <li><span>2</span> Expand your customer base and reach new clients</li>
                        <li><span>3</span> Offer cutting-edge video documentation to drive digital transformation.</li>
                    </ul>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className='step_img'>
                        <img src="/images/agent_steps.svg" alt="" />

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
