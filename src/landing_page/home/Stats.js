import React from 'react';

function Stats() {
    return (
        <div className='container p-4 '>
            <div className='row'>
                <div className='col-6 p-4'>
                    <h1 className='fs-2 pb-3'>Trust is Confidence</h1>
                    <h2 className='fs-4'>Customer-first always </h2>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='fs-4'>Do better with money</h2>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className=' col-6 p-4'>
                    <img src='media/images/ecosystem.png' style={{width:"90%"}} />
                    <div>
                      <a href="#" className='mx-5' style={{textDecoration:"none"}}>Explore our product <i class="fa-solid fa-arrow-right"></i></a>
                      <a href="#" className='mx-5' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Stats;