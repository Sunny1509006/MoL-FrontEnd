import React, { useState } from 'react'
import './EmailForm.css'
import axios from '../axios/axios'
import useAuth from '../../hooks/authHooks'
import Button from 'react-bootstrap/Button';

import { LoadingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
const EmailForm = () => {
    const authContext = useAuth();
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)
        // console.log('sending email', email)
    }

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
        axios.post("/api/login/", {
            phone_number: "+88"+mobile,
            password: password,
        })
            .then(result => {
                // alert("login success1")
                console.log(result.data)
                localStorage.setItem('jwt', result.data.jwt);
                authContext.setToken(result.data.jwt);
                // if (localStorage.getItem('access')) {
                //     navigate('/')
                // }
            })
            .catch(error => {
                console.log(error)
                alert("error")
            })
    }


    return (
        <div className='email_form_div'>
            <div style={{ height: '0px' }}>
                <div className='chatbot_stripe' />
            </div>

            <div className='chatbot_transition loadingDiv'
                style={{
                    zIndex: loading ? '10' : '-1',
                    opacity: loading ? '0.33' : '0'
                }}
            />

            <LoadingOutlined
                className='chatbot_transition loadingIcon'
                style={{
                    zIndex: loading ? '10' : '-1',
                    opacity: loading ? '0.33' : '0',
                    fontSize: '80px',
                }}
            />

            <div style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                textAlign: 'center',
            }}>
                <img src="/images/iLKMS_Logo.png"
                    style={{
                        position: 'relative',
                        left: 'calc(50%-40px)',
                        top: '4%',
                        height: '50px',
                        width: '50px',
                    }}
                />
                <div className='topText'>
                    ????????????????????? ????????????????????????????????? ????????????????????? ???????????????????????????????????? <br /> ?????????????????? ?????????????????????
                </div>

                <form
                    // onSubmit={e => handleSubmit(e)}
                    // onSubmit={e => handleApi(e)}
                    style={{
                        position: 'relative',
                        width: '90%',
                        top: '17%',
                        left: '5%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <input style={{
                        textAlign: 'center',
                        outline: 'none',
                        padding: '3px',
                        borderRadius: '12px',
                        border: '1px solid #0C6395',
                    }}
                        // onChange={e => setEmail(e.target.value)}
                        value={mobile}
                        onChange={handleMobile}
                        placeholder='?????????????????? ??????????????? ?????????'
                        type="email"
                    >

                    </input>
                    <input style={{
                        textAlign: 'center',
                        outline: 'none',
                        padding: '3px',
                        borderRadius: '12px',
                        border: '1px solid #0C6395',
                        marginTop: '10px'
                    }}
                        // onChange={e => setPassword(e.target.value)}
                        value={password}
                        onChange={handlePassword}
                        placeholder='??????????????????????????? ?????????'
                        type="password"
                    >

                    </input>
                    <Button variant='contained' className='login_button'
                        onClick={handleApi}
                    >????????????</Button>
                </form>

                <div style={{
                    position: 'absolute',
                    width: '100%',
                    top: '75%',
                    color: 'black',
                    fontSize: '15px',
                    fontWeight: '600'
                }}>
                    ????????????????????? ???????????? ???????????? ???????????? ????????????
                </div>

                <div style={{
                    position: 'absolute',
                    width: '100%',
                    top: '84%',
                    color: 'black',
                    fontSize: '10px',
                    fontWeight: '600',
                    // left: '25%',
                    left: 'calc(40% - 40px)'

                }}>
                    ?????????????????????????????? ?????????? <Link to="/SignUp" style={{ color: '#0C6395' }}>???????????? ??????</Link> ????????????
                </div>
            </div>
        </div>
    )
}

export default EmailForm
