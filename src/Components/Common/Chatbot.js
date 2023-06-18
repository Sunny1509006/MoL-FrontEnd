import React, { useState, useEffect } from 'react'
import './Chatbot.css'
import { motion } from "framer-motion"
import {FaComments} from 'react-icons/fa'

const Chatbot = props => {

    const [hovered, setHovered] = useState(false)
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
          setShouldAnimate(true);
        }, 5000); // 5 minutes in milliseconds
    
        return () => clearInterval(interval);
      }, []);

    return (
        <>
            {/* <div className='chatbot_hi transition_div' 
            style={{ opacity: hovered ? '1' : '0', right: hovered? '0px': '-500px' }}>
                <p>ভূমিপিডিয়াতে আপনাকে স্বাগতম</p>
            </div> */}
            <div className='chatbot_div_main'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => props.onClick && props.onClick()}
            >


                {hovered ?
                    <motion.div>
                        <img src='/images/chatbot_icon2.png' className='transition_div' 
                            style={{ height: '70px', width: '76px', marginLeft: '2px', marginTop: '5px', borderRadius: '25px' }}
                        />
                        {/* <FaComments 
                            style={{ height: '64px', width: '65px', marginLeft: '7px', marginTop: '7px', color: '#87cefa' }} /> */}
                    </motion.div>
                    :
                    <motion.div 
                        animate={shouldAnimate ? { rotate: [0, 360, 0, 0, 0, 0],
                            //  x: [0, -200, -200, 0, 0, 0, 0, 0, 0, 0, 0, 0] }}
                            x: [0, -100, -100, 0, 0, 0] }: {}}  
                        transition={{duration: 5}}
                        onAnimationComplete={() => setShouldAnimate(false)}
                    >
                        <img src='/images/chatbot_icon2.png' className='transition_div'
                            style={{ height: '60px', width: '65px', marginLeft: '8px', marginTop: '10px', borderRadius: '20px' }} />
                            {/* <FaComments 
                            style={{ height: '49px', width: '50px', marginLeft: '15px', marginTop: '15px', color: '#87cefa' }}
                            /> */}
                    </motion.div>
                }
            </div>
        </>
    )
}

export default Chatbot
