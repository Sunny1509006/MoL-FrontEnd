import { Avatar, Grid, Paper } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './Login.css'
import { AddCircleOutlineOutlined } from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/authHooks';
// import Cookies from 'universal-cookie'
// import jwt from "jwt-decode"

const Login = (props) => {
    const authContext = useAuth();
    const navigate = useNavigate() 

    // const cookies = new Cookies();

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
        axios.post("http://143.110.241.20:5000/api/login/", {
            phone_number: "+88"+mobile,
            password: password,
        })
            .then(result => {
                // alert("login success1")
                // console.log(result.data)
                localStorage.setItem('jwt', result.data.jwt);
                // cookies.set("jwt", result.data.jwt);
                authContext.setToken(result.data.jwt);
                authContext.handleSetUser(result.data.jwt);
                if (localStorage.getItem('jwt')) {
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error)
                alert("error")
            })
    }

    // useEffect(() => {
    //     axios.post('/api/profile/',
    //         // { "jwt": localStorage.getItem('jwt') }
    //         {"jwt": authContext.token}

    //     )
    //         .then(response => {
    //             console.log(response.data);
    //             authContext.setUser(response.data);
    //             localStorage.setItem('user', response.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });

    // }, []);

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
                    <Button variant='contained' className='text_field_login'
                        onClick={handleApi}
                    >লগইন</Button>
                </form>

            </Paper>
        </Grid>
    )
}

export default Login
