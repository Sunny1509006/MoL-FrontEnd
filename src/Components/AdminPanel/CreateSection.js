import React, { useState, useEffect } from 'react'
import "./CreateSection.css"
import { useParams, useNavigate } from 'react-router-dom'
import AddSomething from './AddSomething'
import axios from "../axios/axios"
import AddSection from './AddSection'
import CreateSubSection from './CreateSubSection'

const CreateSection = () => {
    const [sectionList, setSectionList] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    console.log(sectionList[0])
    const [addSectionOpen, setAddSectionOpen] = useState(false)

    const handleAddSectionOpen = () => {
        setAddSectionOpen(!addSectionOpen)
    }

    useEffect(() => {
        const loadSectionList = async () => {
            const response = await axios.post(
                "/api/getsections/",
                {
                    act_id: params.id
                }
            )
                .then(response => {
                    setSectionList(response.data.sections);
                })

            // setTotal(response.data.length);
        };

        loadSectionList();
    }, [params.id]);

    const handleNavigate = () => {
        navigate(`/createsection/${params.id}`)
    }
    return (
        <div className='CreateSectionMain'>
            <div className='CreateSectionInner'>
                <div style={{display: 'flex',
                 alignItems: 'left',
                  flexDirection: 'column',
                  width: '100%',
                  }}>
                    {sectionList[0] && (
                        <>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                                {sectionList.map((eachSection, index) => (
                                    <CreateSubSection key={index}
                                        sectionNumber={eachSection?.number}
                                        sectionHeading={eachSection.heading}
                                        sectionContent={eachSection.content}
                                        sectionId={eachSection.id}

                                    />

                                ))}
                            </div>
                            <div style={{
                                width: '100%',
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <div onClick={handleAddSectionOpen} style={{ cursor: 'pointer', width: '200px', marginTop: '10px' }}>
                                    <AddSomething addText={"Add Section"} />
                                </div>
                                {addSectionOpen &&
                                    <div style={{ width: '100%' }}>
                                        <AddSection actId={params.id} />
                                    </div>
                                }
                            </div>
                        </>
                    )}
                </div>
                {!sectionList[0] && (
                    <div style={{
                        width: '100%',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <div onClick={handleAddSectionOpen} style={{ cursor: 'pointer', width: '200px' }}>
                            <AddSomething addText={"Add Section"} />
                        </div>
                        {addSectionOpen &&
                            <div style={{ width: '100%' }}>
                                <AddSection actId={params.id} />
                            </div>
                        }
                    </div>


                )}
            </div>

        </div>
    )
}

export default CreateSection
