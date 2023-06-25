import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AddSomething from './AddSomething'
import axios from "../axios/axios"
import AddSubSection from './AddSubSection'
import "./CreateSection.css"
import AddSchedule from './AddSchedule'

const CreateSchedule = ({ subSectionNumber, subSectionHeading, subSectionContent, sectionId, subSectionId }) => {
    const [openScheduleDiv, setOpenScheduleDiv] = useState(false)

    const handleOpenSchedule = () => {
        setOpenScheduleDiv(!openScheduleDiv)
    }
    const [scheduleList, setScheduleList] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    // console.log(params.id)
    const [addScheduleOpen, setAddScheduleOpen] = useState(false)

    const handleAddScheduleOpen = () => {
        setAddScheduleOpen(!addScheduleOpen)
    }

    useEffect(() => {
        const loadScheduleList = async () => {
            const response = await axios.post(
                "/api/getschedules/",
                {
                    sub_section_id: subSectionId
                }
            )
                .then(response => {
                    setScheduleList(response.data.schedules);
                })

            // setTotal(response.data.length);
        };

        loadScheduleList();
    }, [subSectionId]);

    const handleNavigate = () => {
        navigate(`/createsection/${params.id}`)
    }
    return (
        <div>
            <div onClick={handleOpenSchedule} style={{
                cursor: 'pointer', fontSize: '20px',
            }}>
                {subSectionNumber} {subSectionHeading} {subSectionContent}
            </div>
            {openScheduleDiv && (
                <div className='CreateSectionInner' style={{ marginLeft: '20px', marginTop: '0px', width: '100%' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'left',
                        flexDirection: 'column',
                        width: '100%',
                    }}>
                        {scheduleList[0] && (
                            <>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                                    {scheduleList.map((eachSchedule, index) => (
                                        //  <CreateSchedule key={index}
                                        //      subSectionNumber={eachSubSection?.number}
                                        //      subSectionHeading={eachSubSection?.heading}
                                        //      subSectionContent={eachSubSection?.content}
                                        //  />

                                        <div key={index}>
                                            {eachSchedule.number} {eachSchedule.content}
                                        </div>

                                    ))}
                                </div>
                                <div style={{
                                    width: '100%',
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div onClick={handleAddScheduleOpen} style={{ cursor: 'pointer', width: '200px', marginTop: '10px' }}>
                                        <AddSomething addText={"Add Schedule"} />
                                    </div>
                                    {addScheduleOpen &&
                                        <div style={{ width: '100%' }}>
                                            <AddSchedule
                                                actId={params.id}
                                                sectionId={sectionId}
                                                subSectionId={subSectionId} />
                                        </div>
                                    }
                                </div>
                            </>
                        )}
                    </div>
                    {!scheduleList[0] && (
                        <div style={{
                            width: '100%',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <div onClick={handleAddScheduleOpen} style={{ cursor: 'pointer', width: '200px' }}>
                                <AddSomething addText={"Add Schedule"} />
                            </div>
                            {addScheduleOpen &&
                                <div style={{ width: '100%' }}>
                                    <AddSchedule
                                        actId={params.id}
                                        sectionId={sectionId}
                                        subSectionId={subSectionId}
                                    />
                                </div>
                            }
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default CreateSchedule
