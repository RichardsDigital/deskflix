import React from 'react';
import '../styles/qouteBanner.css';
import left from '../images/icons/left.png';
import right from '../images/icons/right.png';

function QuoteBanner() {
    return (
        <div className="quoteBanner">
            <div className="innerBanner">
                <img className="left" src={left} alt="left"/>
                <div className="text">
                    <p>A great way to keep in touch with new thoughts and ideas</p>
                    <h4>Steve Morgan, Princibility Building Society</h4>
                </div>
                <img className="right" src={right} alr="right"/>
            </div>
        </div>
    )
}

export default QuoteBanner;