import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row '>
                <div className='col-6 d-flex  justify-content-center'>
                    <img src={imageURL} alt=''/>
                </div>
                <div className='col-2'></div>
                <div className='col-4 mt-5'>
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <div>
                            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
                            <a href={learnMore} style={{marginLeft:"20px", textDecoration:"none"}}> Learn More</a>
                    </div>
                    <div>
                            <a href={googlePlay}> <img src="media/images/googlePlayBadge.svg" alt=""/></a>
                            <a href={appStore} style={{marginLeft:"20px"}}> <img src="media/images/appstoreBadge.svg" alt='' /></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;