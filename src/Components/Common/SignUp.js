import { Avatar, Grid, Paper } from '@mui/material'
import React from 'react'
import './SignUp.css'
import { AddCircleOutlineOutlined } from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';


const SignUp = () => {
    return (
        <Grid className='sign_up_dummy_div'>

            <Paper elevation={20} className='sign_up_content'>
                <Grid align='center' style={{display: 'flex', marginTop: '-10px'}}>
                    <Avatar className='avatar_style' >
                        <AddCircleOutlineOutlined />
                    </Avatar>
                    <h5 style={{padding: '10px'}}>সাইন আপ</h5>
                </Grid>
                <form>
                    <TextField required fullWidth label="সম্পূর্ণ নাম" variant="outlined" className='text_field'
                    inputProps={{ style: { height: '15px' } }}/>
                    <TextField required fullWidth  label="মোবাইল নম্বর" variant="outlined" className='text_field'
                    inputProps={{ style: { height: '15px' } }}/>
                    <TextField fullWidth label="ইমেইল" variant="outlined" className='text_field'
                    inputProps={{ style: { height: '15px' } }}/>
                    <TextField required fullWidth type='password' label="পাসওয়ার্ড" variant="outlined" className='text_field'
                    inputProps={{ style: { height: '15px' } }}/>
                    <TextField required fullWidth type='password' label="পাসওয়ার্ড নিশ্চিত করুন" variant="outlined" className='text_field'
                    inputProps={{ style: { height: '15px' } }}/>
                    <Button type='submit' variant='contained' className='text_field'>সাইন আপ</Button>
                </form>

            </Paper>
        </Grid>
    )
}

export default SignUp
