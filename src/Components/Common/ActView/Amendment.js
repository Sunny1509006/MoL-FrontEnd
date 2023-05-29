import React from 'react'
import { Link } from 'react-router-dom'

const Amendment = ({ amendment_from_data, amendment_to_data }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "flex-start",
            background: "#F2FBFF",
            // border: "1px solid #E9650B",
            border: "1px groove #f8a166",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "9px",
            padding: "10px 10px",
            boxSizing: "border-box",
            maxWidth: '700px',
            marginBottom: '10px',
        }}>
            {amendment_from_data ?
                <p style={{
                    marginLeft: '5px',
                    marginBottom: '0px',
                    fontSize: '14px',
                    fontFamily: 'Kalpurush',
                }}>

                    <img src="/images/amendment_from.svg" style={{ height: '16px', paddingRight: '10px' }} />
                    <Link to="" style={{
                    color: '#0849E9',    
                }}>
                    ২০১৬ সালের {amendment_from_data.amendment_from_act__number ? amendment_from_data.amendment_from_act__number + " নং আইনের" : ""} {amendment_from_data.amendment_from_section__number ? amendment_from_data.amendment_from_section__number + " নং ধারার" : ""} {amendment_from_data.amendment_from_sub_section__number ? amendment_from_data.amendment_from_sub_section__number + " নং উপধারার" : ""} {amendment_from_data.amendment_from_schedule__number ? amendment_from_data.amendment_from_schedule__number + " নং দফার" : ""} {amendment_from_data.amendment_from_sub_schedule__number ? amendment_from_data.amendment_from_sub_schedule__number + " নং উপদফা" : ""}  কে সংশোধিত করেছে
                    </Link>
                </p>
                :
                ''
            }
            {amendment_to_data ?
                <p style={{
                    marginLeft: '5px',
                    marginBottom: '0px',
                    fontSize: '14px',
                    fontFamily: 'Kalpurush',
                }}>

                    <img src="/images/amendment_to.svg" style={{ height: '16px', paddingRight: '10px' }} />
                    <Link to="" style={{
                    color: '#0849E9',    
                }}>
                    ২০১৬ সালের {amendment_to_data.amendment_to_act__number ? amendment_to_data.amendment_to_act__number + " নং আইনের" : ""} {amendment_to_data.amendment_to_section__number ? amendment_to_data.amendment_to_section__number + " নং ধারার" : ""} {amendment_to_data.amendment_to_sub_section__number ? amendment_to_data.amendment_to_sub_section__number + " নং উপধারার" : ""} {amendment_to_data.amendment_to_schedule__number ? amendment_to_data.amendment_to_schedule__number + " নং দফার" : ""} {amendment_to_data.amendment_to_sub_schedule__number ? amendment_to_data.amendment_to_sub_schedule__number + " নং উপদফা" : ""}  দ্বারা সংশোধিত হয়েছে
                    </Link>
                </p>
                :
                ''
            }

        </div>
    )
}

export default Amendment
