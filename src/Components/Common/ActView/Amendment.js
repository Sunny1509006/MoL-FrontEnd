import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Amendment = ({ amendment_from_data, amendment_to_data }) => {
    const [isOpenFrom, setIsOpenFrom] = useState(false);
    const [isOpenTo, setIsOpenTo] = useState(false);

    const openPopUpFrom = () => {
        setIsOpenFrom(true)
    }

    const closePopUpFrom = () => {
        setIsOpenFrom(false)
    }

    const openPopUpTo = () => {
        setIsOpenTo(true)
    }

    const closePopUpTo = () => {
        setIsOpenTo(false)
    }
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
                    }}
                    onClick={openPopUpFrom}
                    >
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
                    }}
                    onClick={openPopUpTo}
                    >
                        ২০১৬ সালের {amendment_to_data.amendment_to_act__number ? amendment_to_data.amendment_to_act__number + " নং আইনের" : ""} {amendment_to_data.amendment_to_section__number ? amendment_to_data.amendment_to_section__number + " নং ধারার" : ""} {amendment_to_data.amendment_to_sub_section__number ? amendment_to_data.amendment_to_sub_section__number + " নং উপধারার" : ""} {amendment_to_data.amendment_to_schedule__number ? amendment_to_data.amendment_to_schedule__number + " নং দফার" : ""} {amendment_to_data.amendment_to_sub_schedule__number ? amendment_to_data.amendment_to_sub_schedule__number + " নং উপদফা" : ""}  দ্বারা সংশোধিত হয়েছে
                    </Link>
                </p>
                :
                ''
            }
                        {isOpenFrom && (
                <div
                    className='Support_window_transition'
                    style={{
                        // height: '200px',
                        width: '700px',
                        maxWidth: '70%',
                        background: 'white',
                        bottom: '50vh',
                        // right: isOpen ? '100px' : '-500px',
                        left: isOpenFrom ? 'calc(50% - 350px)' : '-500px',
                        position: 'fixed',
                        overflow: 'hidden',
                        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
                        zIndex: '10000',
                        borderColor: '#0C6395',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderRadius: '10px',
                        opacity: isOpenFrom ? '1' : '0',
                        padding: '20px',

                    }}
                >
                    <span className="close" onClick={closePopUpFrom} style={{
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
                    }}>{amendment_from_data.amendment_from_content}</span>
                </div>
            )}
            {isOpenTo && (
                <div
                    className='Support_window_transition'
                    style={{
                        // height: '200px',
                        width: '700px',
                        maxWidth: '70%',
                        background: 'white',
                        bottom: '50vh',
                        // right: isOpen ? '100px' : '-500px',
                        left: isOpenTo ? 'calc(50% - 350px)' : '-500px',
                        position: 'fixed',
                        overflow: 'hidden',
                        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
                        zIndex: '10000',
                        borderColor: '#0C6395',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderRadius: '10px',
                        opacity: isOpenTo ? '1' : '0',
                        padding: '20px',

                    }}
                >
                    <span className="close" onClick={closePopUpTo} style={{
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
                    }}>{amendment_to_data.amendment_to_content}</span>
                </div>
            )}

        </div>
    )
}

export default Amendment
