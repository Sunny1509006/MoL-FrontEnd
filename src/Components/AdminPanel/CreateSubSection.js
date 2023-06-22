import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AddSomething from './AddSomething'
import axios from "../axios/axios"
import AddSubSection from './AddSubSection'
import "./CreateSection.css"

const CreateSubSection = ({ sectionNumber, sectionHeading, sectionContent, sectionId }) => {
    const [openSubSectionDiv, setOpenSubSectionDiv] = useState(false)

    const handleOpenSubSection = () => {
        setOpenSubSectionDiv(!openSubSectionDiv)
    }
    const [subSectionList, setSubSectionList] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    // console.log(params.id)
    const [addSubSectionOpen, setAddSubSectionOpen] = useState(false)

    const handleAddSubSectionOpen = () => {
        setAddSubSectionOpen(!addSubSectionOpen)
    }

    useEffect(() => {
        const loadSubSectionList = async () => {
            const response = await axios.post(
                "/api/getsubsections/",
                {
                    section_id: sectionId
                }
            )
                .then(response => {
                    setSubSectionList(response.data.sub_sections);
                })

            // setTotal(response.data.length);
        };

        loadSubSectionList();
    }, [sectionId]);

    const handleNavigate = () => {
        navigate(`/createsection/${params.id}`)
    }
    return (
        <div>
            <div onClick={handleOpenSubSection} style={{
                cursor: 'pointer', fontSize: '20px',
            }}>
                {sectionNumber} {sectionHeading} {sectionContent}
            </div>
            {openSubSectionDiv && (
                <div className='CreateSectionInner' style={{ marginLeft: '20px', marginTop: '0px', width: '100%' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'left',
                        flexDirection: 'column',
                        width: '100%',
                    }}>
                        {subSectionList[0] && (
                            <>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                                    {subSectionList.map((eachSubSection, index) => (
                                        //  <CreateSubSection key={index}
                                        //      sectionNumber={eachSection?.number}
                                        //      sectionHeading={eachSection.heading}
                                        //      sectionContent={eachSection.content}

                                        //  />

                                        <div>
                                            {eachSubSection.number} {eachSubSection.content}
                                        </div>

                                    ))}
                                </div>
                                <div style={{
                                    width: '100%',
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div onClick={handleAddSubSectionOpen} style={{ cursor: 'pointer', width: '200px', marginTop: '10px' }}>
                                        <AddSomething addText={"Add SubSection"} />
                                    </div>
                                    {addSubSectionOpen &&
                                        <div style={{ width: '100%' }}>
                                            <AddSubSection actId={params.id} sectionId={sectionId} />
                                        </div>
                                    }
                                </div>
                            </>
                        )}
                    </div>
                    {!subSectionList[0] && (
                        <div style={{
                            width: '100%',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <div onClick={handleAddSubSectionOpen} style={{ cursor: 'pointer', width: '200px' }}>
                                <AddSomething addText={"Add SubSection"} />
                            </div>
                            {addSubSectionOpen &&
                                <div style={{ width: '100%' }}>
                                    <AddSubSection actId={params.id} sectionId={sectionId} />
                                </div>
                            }
                        </div>


                    )}
                </div>
            )}
        </div>
    )
}

export default CreateSubSection
