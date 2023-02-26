import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import './BodyHead.css'
import SearchText from './SearchText';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

export default function BodyHead() {
  return (
    <>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: '#CEE9FD' }}>
          <Toolbar className='flex_div'>
            <div className='logotext_div'>
              <Link to='/'>
                <img src="images/iLKMS_Logo.png" className='ilkms_logo' />
              </Link>
              <div className='vumibid'>
                <Link to='/'><p style={{ fontSize: '20px', marginBottom: '2px' }}>ভূমিবিদ</p></Link>
                <p style={{ fontSize: '12px', marginBottom: '0px' }}>কৃত্রিম বুদ্ধিমত্তায় ভূমি সংক্রান্ত তথ্য</p>
              </div>
            </div>

            <div>
              <SearchText />
            </div>
            <div className='header_button_div'>
              <div>
                <Dropdown >
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className='button_div'>
                    বাংলা
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item className='button_div'>English</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div>
                <Button variant="outline-info" className='button_div'>লগইন</Button>
              </div>
              <div>
                <Button variant="outline-info" className='button_div'
                  style={{ backgroundColor: '#0C6395', color: 'white' }}>
                  সাইন আপ</Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box> */}
      <div className='header_main'>
        <div className='Header_logo'>
          <div >
            <Link to='/'>
              <img src="/images/iLKMS_Logo.png" className='ilkms_logo' />
            </Link>
          </div>
          <div className='vumibid'>
            <Link to='/'><p style={{ fontSize: '20px', marginBottom: '2px' }}>ভূমিপিডিয়া</p></Link>
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
          <div>
            <Button variant="outline-info" className='btn btn-light'>লগইন</Button>
          </div>
          <div>
            <Link to='/SignUp' > <Button variant="outline-info">সাইন আপ</Button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
