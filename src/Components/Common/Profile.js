import React, { useState, useEffect } from 'react'
import './Profile.css'
import { FaEdit } from 'react-icons/fa'
import axios from '../axios/axios'
import useAuth from '../../hooks/authHooks';
import { Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input/input'

const Profile = () => {
  const { user, fetchUser } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [nationalID, setNationalID] = useState('');
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
  const [edit, setEdit] = useState(false);
  // console.log(localStorage.getItem("jwt"))
  // axios.defaults.headers.common['Cookie'] = `jwt=${localStorage.getItem("jwt")}`;


  const handleEdit = () => {
    setEdit(true)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleMobileChange = (e) => {
    setMobile(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value)
  }

  const handleNationalIDChange = (e) => {
    setEmail(e.target.value)
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  useEffect(() => {
    if (user) {
      setName(user.full_name);
      setEmail(user.email);
      setImage(user.profile_image);
      setMobile(user.phone_number);
      setBirthDate(user.date_of_birth);
      setNationalID(user.national_id);
      setAddress(user.address);
    }
  }, [user]);

  // useEffect(() => {
  //     axios.post('/api/profile/',
  //         { "jwt": authContext.token }

  //     )
  //         .then(response => {
  //             console.log(response.data);
  //             setUser(response.data);
  //             authContext.setUser(response.data);
  //             setName(response.data.full_name);
  //             setEmail(response.data.email);
  //             setImage(response.data.profile_image);
  //             setMobile(response.data.phone_number);
  //             setBirthDate(response.data.date_of_birth);
  //             setNationalID(response.data.national_id);
  //             setAddress(response.data.address);
  //         })
  //         .catch(error => {
  //             console.error(error);
  //         });

  // }, []);
  const handleEditData = () => {
    axios.post("/api/profile_editing/",
      {
        jwt: localStorage.getItem("jwt"),
        profile_image: image,
        full_name: name,
        email: email,
        date_of_birth: birthDate,
        national_id: nationalID,
        address: address,
      }
    )
      .then(response => {
        setEdit(false);
        fetchUser();
      })
  }


  return (
    <div className='profile_div'>
      <div className='profile_header'>
        <div>????????????????????????</div>
        <Button onClick={handleEdit} style={{ background: 'none' }}>
          <FaEdit fontSize={24} style={{
            color: 'var(--primary-color)'
          }}

          />
        </Button>
      </div>
      <div className='profile_body'>
        <form >
          <div className='profile_img_name'>
            <img src={image ? image : "/images/profile.png"} />
            <div className='name_email_phone'>
              <div className='profile_name_color' style={{
                height: '33%'
              }}>
                <div className='profile_font'>???????????? </div>
                {edit ?
                  <input type="text" value={name} onChange={handleNameChange} className='profile_font_two'
                    style={{ border: '1px solid #0C6395', background: '#F5F5F5' }}
                  />
                  :

                  <div className='profile_font_two'>{name}</div>
                }
              </div>
              <div style={{
                height: '33%',
                background: 'white',
                display: 'flex',
              }}>
                <div className='profile_font'>????????????????????? </div>
                {edit ?
                  <PhoneInput country="BD"
                    type="text" value={mobile} onChange={handleMobileChange} className='profile_font_two'
                    style={{ border: '1px solid #0C6395' }}
                  />
                  :
                  <div className='profile_font_two'>{mobile}</div>
                }
              </div>
              <div className='profile_name_color' style={{
                height: '33%'
              }}>
                <div className='profile_font'>?????????????????? </div>
                {edit ?
                  <input
                    type="email" value={email ? email : ''} onChange={handleEmailChange} className='profile_font_two'
                    style={{ border: '1px solid #0C6395', background: '#F5F5F5' }}
                  />
                  :
                  <div className='profile_font_two'>{email}</div>
                }
              </div>
            </div>
          </div>
          <div className='profile_other'>

            <div style={{
              height: '33%',
              background: 'white',
              display: 'flex',
            }}>
              <div className='profile_font'>???????????? ?????????????????? </div>
              {edit ?
                <input
                  type="date" value={birthDate ? birthDate : ''} onChange={handleBirthDateChange} className='profile_font_two'
                  style={{ border: '1px solid #0C6395' }}
                />
                :
                <div className='profile_font_two'>{birthDate}</div>
              }
            </div>
            <div className='profile_name_color' style={{
              height: '33%',
            }}>
              <div className='profile_font'>??????????????? ??????????????? ?????????????????? </div>
              {edit ?
                <input
                  type="text" value={nationalID ? nationalID : ''} onChange={handleNationalIDChange} className='profile_font_two'
                  style={{ border: '1px solid #0C6395', background: '#F5F5F5' }}
                />
                :
                <div className='profile_font_two'>{nationalID}</div>
              }
            </div>
            <div style={{
              height: '33%',
              background: 'white',
              display: 'flex',
            }}>
              <div className='profile_font'>????????????????????? </div>
              {edit ?
                <input
                  type="text" value={address ? address : ''} onChange={handleAddressChange} className='profile_font_two'
                  style={{ border: '1px solid #0C6395' }}
                />
                :
                <div className='profile_font_two'>{address}</div>
              }
            </div>
          </div>
          <Button onClick={handleEditData} style={{ right: '10px' }}>????????????????????? ????????????</Button>
        </form>
      </div>
    </div>
  )
}

export default Profile
