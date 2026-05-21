import React from 'react';
function Awards() {
    return ( 
        <div className='container  mt-5'>
            <div className='row text-center'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' ></img>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million zerodha clients contribute to over 15% of 
                        all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6 '>
                             <ul>
                                <li>
                                    <p>Futures & Options</p>
                                    </li>
                                <li>
                                    <p>Commodity & Derivatives</p>
                                    </li>
                                <li>
                                    <p>Currency Derivatives</p>
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
                                    <p>Bonds & Govt. Securities</p>
                                    </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' className='mt-2'style={{width:"90%"}}></img>
                </div>
            </div>
            </div>
     );
}

export default Awards;