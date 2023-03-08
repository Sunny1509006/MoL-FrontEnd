import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer_div'>
            <div className='footer_content'>
                <div>
                    <p>Planning & Implementation</p>
                    <div className='footer_left'>
                        <img src='/images/Bangladesh_Logo.png' className='footer_bangladesh' />
                        <p>Ministry of Land</p>
                    </div>
                </div>
                <div className='border_div'></div>
                <div >
                    <p>System Development</p>
                    <img src='/images/Dream71.png' className='footer_dream' />
                </div>
                <div className='border_div'></div>
                <div>
                    <p>Download App</p>
                    <div className='footer_right'>
                        <img src='/images/googleplay.png' className='footer_google' />
                        <img src='/images/applestore.png' className='footer_apple' />
                    </div>
                </div>
            </div>

            <div className='footer_copyright'>
                <p>Copyright © 2023, MoL, All Right Reserved.</p>
            </div>

        </div>
    )
}

export default Footer;
