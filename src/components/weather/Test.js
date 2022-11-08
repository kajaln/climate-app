import React from 'react';
import IMAGES from '../../assets/images/images';

function Test(props) {
    return (
        <div>
            <img src={IMAGES.clear} alt="dsfsd" />
            <img src={IMAGES.cloudDay} alt="dsfsd" />
            <img src={IMAGES.cloudNight} alt="dsfsd" />
        </div>
    );
}

export default Test;