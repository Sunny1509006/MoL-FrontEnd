import { Avatar, Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import './Login.css'
import { AddCircleOutlineOutlined } from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate() 

    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")

    const handleMobile = (e) => {
        setMobile(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleApi = () => {
        console.log(mobile, password)
        axios.post("", {
            mobile: mobile,
            password: password,
        })
            .then(result => {
                console.log(result.data)
                alert("login success")
                localStorage.setItem('token', result.data.token)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                alert("error")
            })
    }

    return (
        <Grid className='login_up_dummy_div'>
            <Helmet>
                <title>লগইন</title>
            </Helmet>
            <Paper elevation={20} className='login_up_content'>
                <Grid align='center' style={{ display: 'flex', marginTop: '-10px' }}>
                    <Avatar className='avatar_style' >
                        <AddCircleOutlineOutlined />
                    </Avatar>
                    <h5 style={{ padding: '10px' }}>লগইন</h5>
                </Grid>
                <form>
                    <TextField required={true} fullWidth label="মোবাইল নম্বর" variant="outlined" className='text_field'
                        value={mobile}
                        onChange={handleMobile}
                        inputProps={{ style: { height: '15px' } }} />
                    <TextField required={true} fullWidth type='password' label="পাসওয়ার্ড" variant="outlined" className='text_field'
                        value={password}
                        onChange={handlePassword}
                        inputProps={{ style: { height: '15px' } }} />
                    <Button type='submit' variant='contained' className='text_field_login'
                        onClick={handleApi}
                    >লগইন</Button>
                </form>

            </Paper>
        </Grid>
    )
}

export default Login
