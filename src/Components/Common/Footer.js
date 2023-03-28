import React from 'react';
import './Footer.css';
import useAuth from '../../hooks/authHooks';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { marginDiv } = useAuth()
    return (
        <div className='footer_div' style={{ marginLeft: marginDiv ? '140px' : '37px' }}>
            <div className='footer_content'>
                <div style={{ marginTop: '15px' }}>
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
                        <a href="https://play.google.com/store/apps/details?id=bd.gov.land.bhumipedia&pli=1" target="_blank" rel="noreferrer noopener">
                            <img src='/images/googleplay.png' className='footer_google' />
                        </a>
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
