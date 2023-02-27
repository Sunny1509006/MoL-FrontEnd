import React, { useState } from 'react'
import './EmailForm.css'

import { LoadingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
const EmailForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)
        console.log('sending email', email)
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
                    কৃত্তিম বুদ্ধিমত্তা বিশিষ্ট ভূমিপিডিয়াতে <br /> আপনাকে স্বাগতম
                </div>

                <form
                    onSubmit={e => handleSubmit(e)}
                    style={{
                        position: 'relative',
                        width: '100%',
                        top: '13%',
                    }}
                >
                    <input style={{
                        textAlign: 'center',
                        outline: 'none',
                        padding: '3px',
                        borderRadius: '12px',
                        border: '1px solid #0C6395',
                    }}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='ইমেইল দিন'
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
                        onChange={e => setPassword(e.target.value)}
                        placeholder='পাসওয়ার্ড দিন'
                        type="password"
                    >

                    </input>
                </form>

                <div style={{
                    position: 'absolute',
                    width: '100%',
                    top: '75%',
                    color: 'black',
                    fontSize: '15px',
                    fontWeight: '600'
                }}>
                    ব্যবহার করার জন্য লগইন করুন
                </div>

                <div style={{
                    position: 'absolute',
                    width: '100%',
                    top: '84%',
                    color: 'black',
                    fontSize: '10px',
                    fontWeight: '600',
                    left: '25%',

                }}>
                    অ্যাকাউন্ট নেই? <Link to="/SignUp" style={{ color: '#0C6395' }}>সাইন আপ</Link> করুন
                </div>
            </div>
        </div>
    )
}

export default EmailForm
