import { Avatar, Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import './SignUp.css'
import { AddCircleOutlineOutlined } from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';
import axios from '../axios/axios';
import { useNavigate } from 'react-router-dom';

// style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "images/vumisignin.png"})`,
// backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}

const SignUp = () => {

    const navigate = useNavigate() 
    const [fullName, setFullName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleFullName = (event)=>{
        setFullName(event.target.value)
    }

    const handleMobile = (event)=>{
        setMobile(event.target.value)
    }

    const handleEmail = (event)=>{
        setEmail(event.target.value)
    }

    const handlePassword = (event)=>{
        setPassword(event.target.value)
    }

    const handleConfirmPassword = (event)=>{
        setConfirmPassword(event.target.value)
    }

    const handleApi = () => {
        console.log(fullName, mobile, email, password, confirmPassword)
        axios.post("/api/register/", {
            full_name: fullName,
            phone_number: "+88"+mobile,
            email: email,
            password: password,
            confirm_password: confirmPassword, 
        })
            .then(result => {
                console.log(result.data)
                alert("success")
                navigate("/login")
            })
            .catch(err=> {
                console.log(err)
                alert("server error")
            })
    }

    return (
        <Grid className='sign_up_dummy_div'>
            <Helmet>
                <title>সাইন আপ</title>
            </Helmet>
            <Paper elevation={20} className='sign_up_content'>
                <Grid align='center' style={{ display: 'flex', marginTop: '-10px' }}>
                    <Avatar className='avatar_style' >
                        <AddCircleOutlineOutlined />
                    </Avatar>
                    <h5 style={{ padding: '10px' }}>সাইন আপ</h5>
                </Grid>
                <form>
                    <TextField required={true} fullWidth label="সম্পূর্ণ নাম" variant="outlined" className='text_field'
                        value={fullName} onChange={handleFullName} inputProps={{ style: { height: '15px' } }} />
                    <TextField required={true} fullWidth label="মোবাইল নম্বর" variant="outlined" className='text_field'
                        value={mobile} onChange={handleMobile} inputProps={{ style: { height: '15px' } }} />
                    <TextField fullWidth label="ইমেইল" type='email' variant="outlined" className='text_field'
                        value={email} onChange={handleEmail} inputProps={{ style: { height: '15px' } }} />
                    <TextField required={true} fullWidth type='password' label="পাসওয়ার্ড" variant="outlined" className='text_field'
                        value={password} onChange={handlePassword} inputProps={{ style: { height: '15px' } }} />
                    <TextField required={true} fullWidth type='password' label="পাসওয়ার্ড নিশ্চিত করুন" variant="outlined" className='text_field'
                        value={confirmPassword} onChange={handleConfirmPassword} inputProps={{ style: { height: '15px' } }} />
                    <Button variant='contained' className='text_field_sign'
                        onClick={handleApi}
                    >সাইন আপ</Button>
                    {/* type = "submit" */}
                </form>

            </Paper>
        </Grid>
    )
}

export default SignUp
