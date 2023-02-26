import React, { useState } from 'react'
import './Chatbot.css'

const Chatbot = props => {

    const [hovered, setHovered] = useState(false)

    return (
        <>
            <div className='chatbot_hi transition_div' style={{ opacity: hovered? '1': '0' }}>
                <p>Hi</p>
            </div>
            <div className='chatbot_div_main'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={()=> props.onClick && props.onClick()}
                >
                

                {hovered ?
                    <img src='/images/chatbot.png' className='transition_div'
                        style={{ height: '34px', width: '35px', marginLeft: '7px', marginTop: '3px' }} />
                    :
                    <img src='/images/chatbot.png' className='transition_div'
                        style={{ height: '24px', width: '25px', marginLeft: '12px', marginTop: '8px' }} />
                }
            </div>
        </>
    )
}

export default Chatbot
