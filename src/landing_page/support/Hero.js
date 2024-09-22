import React from 'react';

function Hero() {
    return ( 
        <>
         <div className='container-fluid text-white' id='supportHero'>
            <div className='container  px-5'>
                <div className=' px-5 pt-5 d-flex justify-content-between'>
                    <h3 className=''>Support Portal</h3>
                    <a href='' className='fs-5 px-4 text-white'>Track Tickets</a>
                </div>
                <div className='row px-5 pb-5 justify-content-between'>
                    <div className='col-6  my-5'>
                        <h3 className='fs-4 pb-4'>Search for an answer or browse help topics to create a ticket</h3>
                        <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' className='form-control px-3 py-3 mb-3'/>

                        <a href=''  className='fs-5' style={{marginRight:"15px", color:"white"}}>Track account opening </a>
                        <a href='' className='fs-5' style={{marginRight:"15px", color:"white"}}>Track segment activation </a>
                        <a href='' className='fs-5' style={{marginRight:"15px", color:"white"}}>Intraday margins </a>
                        <a href=''  className='fs-5'style={{marginRight:"15px", color:"white"}}>Kite user manual</a>
                    </div>
                    <div className='col-5 my-5 text-white'>
                        <h3>Featured</h3>
                        <ol>
                        <a href='' style={{color:"white" }}><li className='pb-3' style={{fontSize:"19px"}}>Surveillance measure on scrips - September 2024</li></a>
                        <a href='' style={{color:"white"}}><li className='pb-3' style={{fontSize:"19px"}}>Rights Entitlements listing in September 2024</li></a>
                        </ol>
                    </div>

                    
                </div>
            </div>
        </div>
        </>
     );
}

export default Hero ;