import React, { useState, useEffect } from 'react'
import './Profile.css'
import { FaEdit } from 'react-icons/fa'
import axios from '../axios/axios'
import useAuth from '../../hooks/authHooks';
import { Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input/input'

const Profile = () => {
  const { user, fetchUser, marginDiv, token } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [nationalID, setNationalID] = useState('');
  const [address, setAddress] = useState('');
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState(null);
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

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

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
    const formData = new FormData();
    formData.append('full_name', name);
    formData.append('jwt', token);
    formData.append('email', email);
    formData.append('date_of_birth', birthDate);
    formData.append('national_id', nationalID);
    formData.append('address', address);
    if (image) {
      formData.append('profile_image', image, image.name);
    }
    else {
      formData.append('profile_image', image);
    }
    axios.post("/api/profile_editing/", formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      // {
      //   jwt: localStorage.getItem("jwt"),
      //   profile_image: image,
      //   full_name: name,
      //   email: email,
      //   date_of_birth: birthDate,
      //   national_id: nationalID,
      //   address: address,
      // }
    )
      .then(response => {
        setEdit(false);
        fetchUser();
      })
  }


  return (
    <div className='profile_div' style={{ marginLeft: marginDiv ? '155px' : '50px' }}>
      <div className='profile_header'>
        <div>প্রোফাইল</div>
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
            {edit ?
              <>
                <input
                  accept="image/*"
                  // className={classes.input}
                  id="image-upload"
                  type="file"
                  onChange={handleImageChange}
                />
              </>
              :
              <img src={image ? `http://143.110.241.20:5000${image}` : "/images/profile.png"} />

            }
            <div className='name_email_phone'>
              <div className='profile_name_color' style={{
                height: '33%'
              }}>
                <div className='profile_font'>নামঃ </div>
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
                <div className='profile_font'>মোবাইলঃ </div>
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
                <div className='profile_font'>ইমেইলঃ </div>
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
              <div className='profile_font'>জন্ম তারিখঃ </div>
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
              <div className='profile_font'>জাতীয় পরিচয় নম্বরঃ </div>
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
              <div className='profile_font'>ঠিকানাঃ </div>
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
          <Button onClick={handleEditData} style={{
            marginBottom: '15px', marginLeft: '50%',
          }}>সংরক্ষণ করুন</Button>
        </form>
      </div>
    </div>
  )
}

export default Profile
