import React from 'react';

function Education() {
    return ( 
        <div className='container my-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{width:"80%"}}/>                
                </div>
                <div className='col-6 py-4'>
                    <h1 className='fs-2 pb-3'>Free and open market education</h1>
                    <div className='mb-4'>
                        <p className=""> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a className='py-2' href="" style={{textDecoration:"none"}} >Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    
                    <div className='mb-4'>
                        <p className=""> TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="" style={{textDecoration:"none"}} >Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    
                </div>
            

            
            </div>
        </div>
     );
}

export default Education;