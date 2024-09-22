import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom mb-5'>
            <div className='text-center my-5 pt-3'>
                    <h1 className='p-1'>Technology</h1>
                    <h4 className='text-muted p-1'>Sleek, modern and intutive trading platform</h4>
                    <p className='p-1'>Check out our investment offerings <a href="" style={{textDecoration:"none"}} >See Pricing <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;