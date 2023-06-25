import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/authHooks'
import ActContentPopUp from './ActContentPopUp'

const Repealed = ({ repealed_data }) => {
    // console.log(repealed_data.repealed_to_act__number)
    const [isOpen, setIsOpen] = useState(false)
    const {isPopUpOpen, setIsPopUpOpen} = useAuth()
    console.log(repealed_data)
    const openPopUp = () => {
        // setIsPopUpOpen(true)
        setIsOpen(true)
    }

    const closePopUp = () => {
        // setIsPopUpOpen(false)
        setIsOpen(false)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            background: "#F2FBFF",
            // border: "1px groove #F0232B",
            // border: "1px solid #f68e92",
            border: "1px solid #fa6d72",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "9px",
            padding: "10px 10px",
            boxSizing: "border-box",
            maxWidth: '700px',
            marginBottom: '10px',
        }}>
            <p style={{
                marginLeft: '5px',
                marginBottom: '0px',
                fontSize: '14px',
                fontFamily: 'Kalpurush',
            }}>
                <img src="/images/repealed.svg" style={{ height: '20px', paddingRight: '10px' }} />
                <Link to="" style={{
                    color: '#0849E9',
                }}
                onClick={openPopUp}
                >
                    ২০১৬ সালের {repealed_data.repealed_to_act__number ? repealed_data.repealed_to_act__number + " নং আইনের" : ""} {repealed_data.repealed_to_section__number ? repealed_data.repealed_to_section__number + " নং ধারার" : ""} {repealed_data.repealed_to_sub_section__number ? repealed_data.repealed_to_sub_section__number + " নং উপধারার" : ""} {repealed_data.repealed_to_schedule__number ? repealed_data.repealed_to_schedule__number + " নং দফার" : ""} {repealed_data.repealed_to_sub_schedule__number ? repealed_data.repealed_to_sub_schedule__number + " নং উপদফা" : ""}  দ্বারা বাতিল হয়েছে
                </Link>
            </p>
            {isOpen && (
                <div
                    className='Support_window_transition'
                    style={{
                        // height: '200px',
                        width: '700px',
                        maxWidth: '70%',
                        background: 'white',
                        bottom: '50vh',
                        // right: isOpen ? '100px' : '-500px',
                        left: isOpen? 'calc(50% - 350px)' : '-500px',
                        position: 'fixed',
                        overflow: 'hidden',
                        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
                        zIndex: '10000',
                        borderColor: '#0C6395',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderRadius: '10px',
                        opacity: isOpen ? '1' : '0',
                        padding: '20px',

                    }}
                >
                    <span className="close" onClick={closePopUp} style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '10px',
                        cursor: 'pointer',
                        fontSize: '24px',
                    }}>
                        &times;
                    </span>
                    <span style={{
                        color: 'black',
                    }}>{repealed_data.repealed_content}</span>
                </div>
            )}

        </div>
    )
}

export default Repealed
