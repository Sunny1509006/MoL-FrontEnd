import React, { useState } from 'react'

const EachSectionSingle = ({ heading, content, number, subSection }) => {
    const [openSection, setOpenSection] = useState(false);

    const handleOpenSection = () => {
        setOpenSection(!openSection)
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div onClick={handleOpenSection}>
                {number}  {heading}
            </div>
            <div>
                {openSection && (
                    <div style={{
                        color: 'black',
                        paddingTop: '10px',
                    }}>
                        {content}
                        {(Object.values(subSection)).map((value, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                paddingLeft: '40px',
                            }}>
                                <p>{value.number}&nbsp;{value.content}</p>
                                {/* <p>{value.content}</p> */}
                                <div>{value.sCHEDULES ?
                                    (Object.values(value.sCHEDULES)).map((eachSchedules, index) => (
                                        <div key={index} style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            paddingLeft: '40px',
                                        }}>
                                            <p>{eachSchedules.number}&nbsp;{eachSchedules.content}</p>
                                            {/* <p>{eachSchedules.content}</p> */}
                                            <div>
                                                {eachSchedules.SubSCHEDULES ?
                                                    (Object.values(eachSchedules.SubSCHEDULES)).map((eachSubSchedules, index) => (
                                                        <div key={index} style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            paddingLeft: '40px',
                                                        }}>
                                                            <p>{eachSubSchedules.number}&nbsp;{eachSubSchedules.content}</p>
                                                            {/* <p>{eachSubSchedules.content}</p> */}
                                                        </div>
                                                    ))
                                                    :
                                                    ''}
                                            </div>
                                        </div>
                                    ))
                                    :
                                    ''}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default EachSectionSingle
