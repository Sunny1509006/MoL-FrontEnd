import React, { useEffect, useState } from 'react';
import './BodyHead.css'
import SearchText from './SearchText';
import Button from 'react-bootstrap/Button';
import axios from '../axios/axios';

import { Link } from 'react-router-dom';
import useAuth from '../../hooks/authHooks';
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function BodyHead() {
  const { isAuthenticated, removeToken, user, token } = useAuth();
  const [localAccess, setLocalAccess] = useState(false)
  console.log(user);
  const [userProfile, setUserProfile] = useState('')

  const handleApi = () => {
    axios.post("/api/logout/", {jwt: token})
    setShowMenu(!showMenu);
    removeToken();
    
  }


  useEffect(() => {
    if (localStorage.getItem('access')) {
      setLocalAccess(true)
    }
  }, [])

  // useEffect(() => {
  //   axios.get('/api/profile/')
  //     .then(response => {
  //       console.log(response.data);
  //       setUserProfile(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className='header_main'>
        <div className='Header_logo'>
          <div >
            <Link to='/'>
              <img src="/images/vumi_logo.png" className='ilkms_logo' />
            </Link>
          </div>
          {/* <div className='vumibid'>
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
            <p style={{ fontSize: '12px', marginBottom: '0px' }}>কথোপকথনেই তাৎক্ষনিক ভূমি তথ্য</p>
          </div> */}
        </div>
        <div>
          <SearchText />
        </div>
        <div className='header_button'>
          {/* <div>
            <Button variant="outline-info" className='btn btn-light'>বাংলা</Button>
          </div> */}
          {isAuthenticated ?
            <>
              {/* <div>
                <Button variant="outline-info" style={{
                  marginTop: 'calc(50% - 25px)',
                  marginRight: '10px',
                }}
                  onClick={handleApi}
                  type="submit"
                >লগ আউট</Button>
              </div> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <img src={user?.profile_image? ` https://bhumipedia.land.gov.bd${user.profile_image}` :"/images/profile.png"} style={{
                  height: '40px',
                  width: '40px',
                }} />
                <p style={{
                  fontSize: '12px',
                  margin: '0px 0px 0px',
                }}>
                  {user?.full_name}
                  </p>
              </div>
              <div>
                <Button onClick={handleMenuClick} style={{ 
                  padding: '0px',
                  backgroundColor: 'var(--secondary-bg)',
                }}>
                  <BsThreeDotsVertical 
                    fontSize={24}
                    className='dotColor'
                  />
                </Button>
                {showMenu && (
                  <div style={{ position: 'fixed', right: '0px', background: 'white' }}>
                    {/* <button onClick={() => console.log('Go to profile page')}>
                    profile
                  </button> */}
                    <Link to="/profile" onClick={()=> { setShowMenu(!showMenu)}}><div>প্রোফাইল</div></Link>
                    <div>
                      <Button variant="outline-info" style={{
                        marginTop: 'calc(50% - 25px)',
                        marginRight: '10px',
                      }}
                        onClick={handleApi}
                        type="submit"
                      >লগ আউট</Button>
                    </div>
                  </div>
                )}
              </div>
            </>
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
