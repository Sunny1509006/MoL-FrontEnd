import { Avatar, Grid, Paper } from '@mui/material'
import React from 'react'
import './Login.css'
import { AddCircleOutlineOutlined } from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';

const Login = () => {
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
                    <TextField required fullWidth label="মোবাইল নম্বর" variant="outlined" className='text_field'
                        inputProps={{ style: { height: '15px' } }} />
                    <TextField required fullWidth type='password' label="পাসওয়ার্ড" variant="outlined" className='text_field'
                        inputProps={{ style: { height: '15px' } }} />
                    <Button type='submit' variant='contained' className='text_field_login'>লগইন</Button>
                </form>

            </Paper>
        </Grid>
    )
}

export default Login
