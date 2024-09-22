import React from 'react';

function Hero() {
    return ( 
        <>
        
        <div className='container'>
            <div className='row text-center py-5 my-5 border-bottom'>
                <h1 className='fs-1'>Charges</h1>
                <p className='fs-4 text-muted'>List of all charges and taxes</p>
            </div>

            <div className='row mt-5 p-5 text-center'>
                <div className='col-4 p-4'>
                    <img src="media/images/pricing-eq.svg" width={"80%"}/>
                    <h1 className='fs-2 pb-4'>Free equity delivery</h1>
                    <p className='text-muted' style={{fontSize:"19px"}}>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/images/other-trades.svg" width={"80%"}/>
                    <h1 className='fs-2 pb-4'>Intraday and F&O trades</h1>
                    <p className='text-muted fs-5' style={{fontSize:"19px"}}>Flat ₹ 20 or 0.03% (whichever is lower) <br/> per executed order on intraday trades <br/> across equity, currency, and commodity <br/>trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/images/pricing-eq.svg" width={"80%"}/>
                    <h1 className='fs-2 pb-4'>Free direct MF</h1>
                    <p className='text-muted fs-5' style={{fontSize:"19px"}}>All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP <br/> charges.</p>
                </div>
            </div>

        </div>
        </>
     );
}

export default Hero;