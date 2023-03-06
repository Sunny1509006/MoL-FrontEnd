import React, { useEffect, useState } from 'react';
import './BodyHead.css'
import SearchText from './SearchText';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import useAuth from '../../hooks/authHooks';

export default function BodyHead() {
  const {isAuthenticated, removeToken} = useAuth();
  const [localAccess, setLocalAccess] = useState(false)
  // console.log('localAccess', localAccess);

  useEffect(() => {
    if (localStorage.getItem('access')) {
      setLocalAccess(true)
    }
  }, [])
  return (
    <>
      <div className='header_main'>
        <div className='Header_logo'>
          <div >
            <Link to='/'>
              <img src="/images/iLKMS_Logo.png" className='ilkms_logo' />
            </Link>
          </div>
          <div className='vumibid'>
            <Link to='/'><p style={{
              fontSize: '16px',
              marginBottom: '2px',
              marginTop: '10px',
              fontFamily: 'Kalpurush',
              color: '#1E98FC',
              fontWeight: 'bold'
            }}>
              <img src="/images/vumi.png" style={{
                height: '40px',
                width: '55px',
                marginTop: '-16px',
              }} />
              &nbsp;পিডিয়া</p></Link>
            <p style={{ fontSize: '12px', marginBottom: '0px' }}>কৃত্রিম বুদ্ধিমত্তায় ভূমি সংক্রান্ত তথ্য</p>
          </div>
        </div>
        <div>
          <SearchText />
        </div>
        <div className='header_button'>
          <div>
            <Button variant="outline-info" className='btn btn-light'>বাংলা</Button>
          </div>
          {isAuthenticated ?
            <div>
              <Button variant="outline-info"
                onClick={removeToken}
                type="submit"
              >লগ আউট</Button>
            </div>
            :
            <>
              <div>
                <Link to='/Login' ><Button variant="outline-info" className='btn btn-light'>লগইন</Button></Link>
              </div>
              <div>
                <Link to='/SignUp' > <Button variant="outline-info">সাইন আপ</Button></Link>
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
}
