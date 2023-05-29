import React from 'react'
import { Link } from 'react-router-dom'

const Repealed = ({ repealed_data }) => {
    // console.log(repealed_data.repealed_to_act__number)
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
                }}>
                ২০১৬ সালের {repealed_data.repealed_to_act__number ? repealed_data.repealed_to_act__number + " নং আইনের" : ""} {repealed_data.repealed_to_section__number ? repealed_data.repealed_to_section__number + " নং ধারার" : ""} {repealed_data.repealed_to_sub_section__number ? repealed_data.repealed_to_sub_section__number + " নং উপধারার" : ""} {repealed_data.repealed_to_schedule__number ? repealed_data.repealed_to_schedule__number + " নং দফার" : ""} {repealed_data.repealed_to_sub_schedule__number ? repealed_data.repealed_to_sub_schedule__number + " নং উপদফা" : ""}  দ্বারা বাতিল হয়েছে
                </Link>
            </p>

        </div>
    )
}

export default Repealed
