import React from 'react';
import Tilt from 'react-parallax-tilt';
import  './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="f1 w-10 br2 shadow-2"style = {{display: 'flex', justifyContent: 'flex-start'}}>
                <div className="pa4 inner-element"><img style={{paddingTop: '5px'}}alt='logo' src={brain}/>                   
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;