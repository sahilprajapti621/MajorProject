import React from 'react';

function Universe () {
    return ( 
        <>
        <div className='container my-4'>
            <div className='row text-center'>                
                <h1 className='m-3'>The Zerodha Universe</h1>
                <p className='m-3 fs-5'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='row'>
                    <div className='col-4 p-3'>
                        <img src='media\images\smallcaseLogo.png' alt=''/>
                        <p className='text-small text-muted m-3'>
                            Thematic investing platform 
                            <br/>
                            that helps you invest in diversified
                            <br/>
                            baskets of stocks on ETFs.
                            </p>
                    </div>
                    <div className='col-4 p-3'>
                        <img src='media\images\streakLogo.png' alt='' width={"39%"}/>
                        <p className='text-small text-muted m-3'>
                            Systematic trading platform <br/>
                            that allows you to create and backtest <br/>
                            strategies without coding.
                        </p>
                    </div>
                    <div className='col-4 p-3'>
                        <img src='media\images\sensibullLogo.svg' alt='' width={"70%"}/>
                        <p className='text-small text-muted m-3'>
                            Systematic trading platform <br/>
                            that allows you to create and backtest <br/>
                            strategies without coding.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 p-3'>
                        <img src='media\images\zerodhaFundhouse.png' alt='' width={"45%"}/>
                        <p className='text-small text-muted m-3'>
                            Thematic investing platform 
                            <br/>
                            that helps you invest in diversified
                            <br/>
                            baskets of stocks on ETFs.
                            </p>
                    </div>
                    <div className='col-4 p-3'>
                        <img src='media\images\goldenpiLogo.png' alt='' width={"43%"}/>
                        <p className='text-small text-muted m-3'>
                            Systematic trading platform <br/>
                            that allows you to create and backtest <br/>
                            strategies without coding.
                        </p>
                    </div>
                    <div className='col-4 p-3'>
                        <img src='media\images\dittoLogo.png' alt='' width={"30%"}/>
                        <p className='text-small text-muted m-3'>
                            Systematic trading platform <br/>
                            that allows you to create and backtest <br/>
                            strategies without coding.
                        </p>
                    </div>
                </div>
                <button className='btn btn-primary text-white fs-5 my-4' style={{width:"18%", margin:"auto"}}> Sign up for free</button>
            </div>
        </div>
    </>
     );
}

export default Universe ;