import React from 'react';
import '../styles/qouteBanner.css';
import left from '../images/icons/left.png';
import right from '../images/icons/right.png';

function QuoteBanner() {
    return (
        <div className="quoteBanner">
            <div className="innerBanner">
                <img src={left}/>
                <div className="text">
                    <p>A great way to keep in touch with new thoughts and ideas</p>
                    <h4>Steve Morgan, Princibility Building Society</h4>
                </div>
                <img src={right}/>
            </div>
        </div>
    )
}

export default QuoteBanner;