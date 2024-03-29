import React, { useState } from 'react'
import Repealed from './Repealed';
import Amendment from './Amendment';
import Live from './Live';

const EachSectionSingle = ({ heading, content, number, subSection, live,
    repealed, amendment_from, amendment_to, repealed_data, amendment_from_data, amendment_to_data }) => {
    const [openSection, setOpenSection] = useState(false);


    const handleOpenSection = () => {
        setOpenSection(!openSection)
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        }}>
            <div onClick={handleOpenSection} style={
                {
                    color: repealed === "YES" ? '#F0232B' : "",

                }
            }>
                {number}  {heading}
            </div>
            <div>
                {openSection && (
                    <div style={{
                        color: repealed === "YES" ? '#F0232B' : "black",
                        paddingTop: '10px',
                        paddingLeft: '30px',
                    }}>
                        <p style={{
                            color: repealed === "YES" ? '#F0232B' : "black",
                        }}>
                            {content ? content : ''}
                            {/* {live === "YES" ?
                                // <Live />
                                <img src="/images/live.png" style={{
                                    height: '30px',
                                    marginLeft: '10px',
                                    marginTop: '5px',
                                }} />
                                :
                                ''
                            } */}
                        </p>

                        {repealed === "YES" ?
                            <Repealed repealed_data={repealed_data}

                            />
                            :
                            <></>
                        }

                        {((amendment_from === "YES") || (amendment_to === "YES")) ?
                            <Amendment amendment_from_data={amendment_from_data ? amendment_from_data : ''}
                                amendment_to_data={amendment_to_data ? amendment_to_data : ''}
                            />
                            :
                            <></>
                        }
                        {(Object.values(subSection)).map((value, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                paddingLeft: '40px',

                            }}>
                                <p style={{
                                    color: repealed === "YES" ? '#F0232B' :
                                        (value.repealed === "YES" ? "#F0232B" : "black"),
                                }}>{value.number}&nbsp;{value.content}
                                    {/* {value.live === "YES" ?
                                        // <Live />
                                        <img src="/images/live.png" style={{
                                            height: '30px',
                                            marginLeft: '10px',
                                            marginTop: '5px',
                                        }} />
                                        :
                                        ''
                                    } */}

                                </p>
                                {(value.repealed === "YES" && repealed != "YES") ?
                                    <Repealed repealed_data={value.repealed_data}

                                    />
                                    :
                                    <></>
                                }
                                {((value.amendment_from === "YES") || (value.amendment_to === "YES")) ?
                                    <Amendment amendment_from_data={value.amendment_from_data ? value.amendment_from_data : ''}
                                        amendment_to_data={value.amendment_to_data ? value.amendment_to_data : ''}
                                    />
                                    :
                                    <></>
                                }

                                <div>{value.sCHEDULES ?
                                    (Object.values(value.sCHEDULES)).map((eachSchedules, index) => (
                                        <div key={index} style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            paddingLeft: '40px',

                                        }}>
                                            <p style={{
                                                color: repealed === "YES" ? '#F0232B' :
                                                    (value.repealed === "YES" ? "#F0232B" :
                                                        (eachSchedules.repealed === "YES" ? "#F0232B" : "black")),
                                            }}>{eachSchedules.number}&nbsp;{eachSchedules.content}
                                                {/* {eachSchedules.live === "YES" ?
                                                    // <Live />
                                                    <img src="/images/live.png" style={{
                                                        height: '30px',
                                                        marginLeft: '10px',
                                                        marginTop: '5px',
                                                    }} />
                                                    :
                                                    ''
                                                } */}

                                            </p>
                                            {(repealed != "YES" && value.repealed != "YES" && eachSchedules.repealed === "YES") ?
                                                <Repealed repealed_data={eachSchedules.repealed_data}

                                                />
                                                :
                                                <></>
                                            }
                                            {((eachSchedules.amendment_from === "YES") || (eachSchedules.amendment_to === "YES")) ?
                                                <Amendment amendment_from_data={eachSchedules.amendment_from_data ? eachSchedules.amendment_from_data : ''}
                                                    amendment_to_data={eachSchedules.amendment_to_data ? eachSchedules.amendment_to_data : ''}
                                                />
                                                :
                                                <></>
                                            }
                                            <div>
                                                {eachSchedules.SubSCHEDULES ?
                                                    (Object.values(eachSchedules.SubSCHEDULES)).map((eachSubSchedules, index) => (
                                                        <div key={index} style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            paddingLeft: '40px',
                                                        }}>
                                                            <p style={{
                                                                color: repealed === "YES" ? '#F0232B' :
                                                                    (value.repealed === "YES" ? "#F0232B" :
                                                                        (eachSchedules.repealed === "YES" ? "#F0232B" :
                                                                            (eachSubSchedules.repealed === "YES" ? "#F0232B" : "black"))),
                                                            }}>{eachSubSchedules.number}&nbsp;{eachSubSchedules.content}
                                                                {/* {eachSubSchedules.live === "YES" ?
                                                                    // <Live />
                                                                    <img src="/images/live.png" style={{
                                                                        height: '30px',
                                                                        marginLeft: '10px',
                                                                        marginTop: '5px',
                                                                    }} />
                                                                    :
                                                                    ''
                                                                } */}

                                                            </p>
                                                            {(repealed != "YES" && value.repealed != "YES" && eachSchedules.repealed != "YES" && eachSubSchedules.repealed === "YES") ?
                                                                <Repealed repealed_data={eachSubSchedules.repealed_data}

                                                                />
                                                                :
                                                                <></>
                                                            }
                                                            {((eachSubSchedules.amendment_from === "YES") || (eachSubSchedules.amendment_to === "YES")) ?
                                                                <Amendment amendment_from_data={eachSubSchedules.amendment_from_data ? eachSubSchedules.amendment_from_data : ''}
                                                                    amendment_to_data={eachSubSchedules.amendment_to_data ? eachSubSchedules.amendment_to_data : ''}
                                                                />
                                                                :
                                                                <></>
                                                            }
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
        </div >
    )
}

export default EachSectionSingle
