import React from 'react';

function RightSection ({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <>
            <div className='container my-4'>
                <div className='row '>                
                    <div className='col-4 mt-5 pt-5'>
                        <h2>{productName}</h2>
                        <p>{productDescription}</p>
                        <div>
                                <a href={learnMore} style={{textDecoration:"none"}}> Learn More</a>
                        </div>   
                    </div>
                    <div className='col-2'></div>
                    <div className='col-5 '>
                        <img src={imageURL} alt=''/>
                    </div>
                </div>
            </div>
        </>
     );
}

export default  RightSection;