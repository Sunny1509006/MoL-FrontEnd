import React from 'react'
import './SignUp.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignUp = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };
    return (
        <div className='sign_up_div'>

            <div >
                <h5>সাইন আপ</h5>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '55ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    className='sign_up_body'
                >
                    <TextField required id="outlined-basic" label="সম্পূর্ন নাম" variant="outlined" />
                    <TextField required id="outlined-basic" label="মোবাইল নম্বর" variant="outlined" />
                    <TextField id="outlined-basic" label="ইমেইল" variant="outlined" />
                    <TextField required id="outlined-basic" label="এন.আই.ডি" variant="outlined" />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">পাসওয়ার্ড</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="পাসওয়ার্ড"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">পাসওয়ার্ড নিশ্চিত করুন</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="পাসওয়ার্ড নিশ্চিত করুন"
                        />
                    </FormControl>
                </Box>

            </div>

        </div>
    )
}

export default SignUp
