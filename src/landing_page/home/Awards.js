import React from 'react';

function Awards() {
    return (
        <div className='container m-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg' />
                </div>
                <div className='col-6'>
                    <h1 className='mt-4'>Largest stock broker in India</h1>
                    <p className='py-2'>2+ million Zerodha clients contribute to over 15% of all volumes in India by trading and investing in:  </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Comodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>

                            </ul>
                        </div>

                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <img src='media/images/pressLogos.png' style={{width:"100%"}} className='py-3'/>



                </div>
            </div>
        </div>
    );
}

export default Awards;