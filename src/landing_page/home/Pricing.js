import React from 'react';

function Pricing() {
    return ( 
        <div className='container px-4 my-4'>
            <div className='row'>
            <div className='col-4'>
                <h1 className='fs-2 pb-3'>Unbeatable pricing</h1>
                <p className=""> We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                </p>
                <a href="" style={{textDecoration:"none"}} >See Pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className='col-2'></div>

            <div className='col-6'>
                <div className='row'>
                    <div className='col'>
                        <img src='media/images/pricing-eq.svg' />
                        <p style={{fontSize:"13px"}} className=' text-center'>Free account<br/>
                        opening</p>
                    </div>
                    <div className='col'>
                        <img src='media/images/pricing-eq.svg' />
                        <p  style={{fontSize:"13px"}} className=' text-center'>Free equity delivery
                        and direct mutual funds</p>
                    </div>
                    <div className='col'>
                        <img src='media/images/other-trades.svg' />
                        <p style={{fontSize:"13px"}} className=' text-center'>Intraday and 
                        F&O</p>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
     );
}

export default Pricing;