import React from 'react'
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/authHooks';
import axios from '../axios/axios';
import { Button } from 'react-bootstrap';
import DropdownList from "react-widgets/DropdownList"
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useNavigate, Redirect } from 'react-router-dom';

const AddSection = ({ actId }) => {
    const [sectionNo, setSectionNo] = useState("")
    const [sectionHeading, setSectionHeading] = useState("")
    const [sectionContent, setSectionContent] = useState("")
    const [newSectionData, setNewSectionData] = useState([])
    const [sectionSubmit, setSectionSubmit] = useState(false)
    const [actionButton, setActionButton] = useState(false)
    const [isFinishButton, setIsFinishButton] = useState(false)
    const { token } = useAuth();
    const navigate = useNavigate()

    const [value, setValue] = useState(1);
    const [actID, setActID] = useState("");
    const [sectionID, setSectionID] = useState("");
    const [subSectionID, setSubSectionID] = useState("");
    const [clauseID, setClauseID] = useState("");
    const [subClauseID, setSubClauseID] = useState("");
    const [isAmmendmentDone, setIsAmmendmentDone] = useState(false)

    const [ammendment, setAmmendment] = useState(false)
    const [getActList, setGetActList] = useState([])
    const [getSectionList, setGetSectionList] = useState([])
    const [getSubSectionList, setGetSubSectionList] = useState([])
    const [getClauseList, setGetClauseList] = useState([])
    const [getSubClauseList, setGetSubClauseList] = useState([])

    const [getContent, setGetContent] = useState([])
    const [isOpenContent, setIsOpenContent] = useState(false)
    const [editContent, setEditContent] = useState("")

    const handleEditContent = (event) => {
        setEditContent(event.target.value);
    }

    useEffect(() => {
        if (value === 2) {
            setAmmendment(true)
        }
        else if (value === 1) {
            setActID("")
            setSectionID("")
            setSubSectionID("")
            setClauseID("")
            setSubClauseID("")
            setAmmendment(false)
        }
        else {
            setAmmendment(false)
        }
    }, [value])

    useEffect(() => {
        const loadActList = async () => {
            const response = await axios.get(
                "/api/getacts/"
            );
            setGetActList(response.data.Acts);
            setActID("")
            setSectionID("")
            setSubSectionID("")
            setClauseID("")
            setSubClauseID("")

        };

        loadActList();
    }, [ammendment])

    useEffect(() => {
        const loadSectionList = async () => {
            const response = await axios.post(
                "/api/getsections/",
                {
                    act_id: actID
                }
            );
            setGetSectionList(response.data.sections);
            setSectionID("")
            setSubSectionID("")
            setClauseID("")
            setSubClauseID("")

        };

        loadSectionList();
    }, [actID])

    useEffect(() => {
        const loadSubSectionList = async () => {
            const response = await axios.post(
                "/api/getsubsections/",
                {
                    section_id: sectionID,

                }
            );
            setGetSubSectionList(response.data.sub_sections);
            setSubSectionID("")
            setClauseID("")
            setSubClauseID("")

        };

        loadSubSectionList();
    }, [sectionID])

    useEffect(() => {
        const loadClauseList = async () => {
            const response = await axios.post(
                "/api/getschedules/",
                {
                    sub_section_id: subSectionID,

                }
            );
            setGetClauseList(response.data.schedules);
            setClauseID("")
            setSubClauseID("")

        };

        loadClauseList();
    }, [subSectionID])

    useEffect(() => {
        const loadSubClauseList = async () => {
            const response = await axios.post(
                "/api/getsubschedules/",
                {
                    schedule_id: clauseID,

                }
            );
            setGetSubClauseList(response.data.sub_schedules);
            setSubClauseID("")

        };

        loadSubClauseList();
    }, [clauseID])

    const handleGetContent = async () => {
        const response = await axios.post(
            "/api/getcontent/",
            {
                act_id: actID ? actID : null,
                section_id: sectionID ? sectionID : null,
                sub_section_id: subSectionID ? subSectionID : null,
                schedule_id: clauseID ? clauseID : null,
                sub_schedule_id: subClauseID ? subClauseID : null,
            }
        );
        setGetContent(response.data.content);
        setIsOpenContent(true)
        setEditContent(response.data.content[0].content)
    }

    const handlePostAmmendment = async () => {
        // console.log(token)
        // console.log(act_Year)
        // console.log(act_ID)
        // console.log(section_ID)
        // console.log(actID)
        // console.log(sectionID)
        // console.log(editContent)
        const response = await axios.post(
            "/api/amendment/",
            {
                jwt: token,
                act_year: newSectionData.act_year,
                act_id: newSectionData.act_id,
                section_id: newSectionData.section_id,
                sub_section_id: null,
                schedule_id: null,
                sub_schedule_id: null,

                amendment_to_act_id: actID ? actID : null,
                amendment_to_section_id: sectionID ? sectionID : null,
                amendment_to_sub_section_id: subSectionID ? subSectionID : null,
                amendment_to_schedule_id: clauseID ? clauseID : null,
                amendment_to_sub_schedule_id: subClauseID ? subClauseID : null,

                content: editContent
            }
        );
        setIsAmmendmentDone(true)
        setActionButton(false)
    }

    const handleActionButton = () => {
        setActionButton(true)
        setActID("")
        setSectionID("")
        setSubSectionID("")
        setClauseID("")
        setSubClauseID("")
        setEditContent("")
        setValue(1)
    }
    const handleSectionNo = (event) => {
        setSectionNo(event.target.value)
    }

    const handleSectionHeading = (event) => {
        setSectionHeading(event.target.value)
    }
    const handleSectionContent = (event) => {
        setSectionContent(event.target.value)
    }

    const handleNavigate = () => {
        setIsFinishButton(false)
        // navigate(`/createsection/${actId}`)
        window.location.href =`/createsection/${actId}`;
    }

    const handleCreateSection = () => {

        axios.post("/api/section/create/",
            {
                jwt: token,
                act_id: actId,
                section_number: sectionNo ? sectionNo : null,
                heading: sectionHeading ? sectionHeading : null,
                content: sectionContent ? sectionContent : null,

            },

        )
            .then(response => {
                console.log(response.data)
                setNewSectionData(response.data)
                setSectionSubmit(true)
                setIsFinishButton(true)
            })
            .catch(error => {
                if (error.response && error.response.status === 403) {

                    alert(error.response.data.detail);
                } else if (error.request) {

                    alert(error.request);
                } else {

                    alert('Error', error.detail);
                }
            })
    }
    return (
        <div style={{
            display: 'flex',
            // gap: '10px',
            width: '100%',
            flexDirection: 'column',

        }}>
            {!sectionSubmit && (
                <>
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        width: '100%',

                    }}>
                        <TextField fullWidth label="ধারা নম্বর" variant="outlined" className='text_field'
                            value={sectionNo} onChange={handleSectionNo} inputProps={{ style: { height: '15px' } }} />
                        <TextField required={true} fullWidth label="শিরোনাম" variant="outlined" className='text_field'
                            value={sectionHeading} onChange={handleSectionHeading} inputProps={{ style: { height: '15px' } }} />
                    </div>
                    <TextField fullWidth label="বিষয়বস্তু" variant="outlined" className='text_field'
                        value={sectionContent} onChange={handleSectionContent} inputProps={{ style: { height: '15px' } }} />
                    <Button variant='contained' className='text_field_sign'
                        onClick={handleCreateSection}
                    >সাবমিট</Button>
                </>
            )}

            {sectionSubmit && (
                <>
                    <div>
                        {sectionNo} {sectionHeading} -- {sectionContent}
                        <Button variant='contained' className='text_field_sign'
                            onClick={handleActionButton}
                        >+Action</Button>
                        {actionButton && (
                            <div style={{ width: '50%', marginTop: '10px'}}>
                                <DropdownList
                                    dataKey="id"
                                    textField="color"
                                    value={value}
                                    defaultValue={1}
                                    onChange={(nextValue) => setValue(nextValue.id)}
                                    data={[
                                        { id: 1, color: "new" },
                                        { id: 2, color: "ammendment" },
                                        { id: 3, color: "repealed" },
                                        { id: 4, color: "appendment" },
                                    ]}
                                />
                                {ammendment && (
                                    <div style={{
                                        display: 'flex',
                                        gap: '10px',
                                        marginTop: '10px',
                                        flexDirection: 'column',
                                    }}>
                                        <DropdownList
                                            dropUp
                                            dataKey="id"
                                            textField="title_of_act"
                                            value={actID}
                                            // defaultValue={20}
                                            placeholder="Select act"
                                            onChange={(nextValue) => setActID(nextValue.id)}
                                            data={getActList}
                                        />
                                        <div style={{ display: 'flex', gap: '10px', width: '200%' }}>
                                            <DropdownList
                                                dropUp
                                                dataKey="id"
                                                textField="number"
                                                value={sectionID}
                                                // defaultValue={1}
                                                placeholder="Select section"
                                                onChange={(nextValue) => setSectionID(nextValue.id)}
                                                data={getSectionList}
                                            />
                                            <DropdownList
                                                dropUp
                                                dataKey="id"
                                                textField="number"
                                                value={subSectionID}
                                                // defaultValue={1}
                                                placeholder="Select Subsection"
                                                onChange={(nextValue) => setSubSectionID(nextValue.id)}
                                                data={getSubSectionList}
                                            />
                                            <DropdownList
                                                dropUp
                                                dataKey="id"
                                                textField="number"
                                                value={clauseID}
                                                // defaultValue={1}
                                                placeholder="Select Clause"
                                                onChange={(nextValue) => setClauseID(nextValue.id)}
                                                data={getClauseList}
                                            />
                                            <DropdownList
                                                dropUp
                                                dataKey="id"
                                                textField="number"
                                                value={subClauseID}
                                                // defaultValue={1}
                                                placeholder="Select Subclause"
                                                onChange={(nextValue) => setSubClauseID(nextValue.id)}
                                                data={getSubClauseList}
                                            />
                                        </div>
                                        <Button variant='contained' className='text_field_sign'
                                            onClick={handleGetContent}
                                        >সাবমিট</Button>

                                        {isOpenContent && (
                                            <div>
                                                <TextareaAutosize
                                                    aria-label="content"
                                                    // placeholder={getContent[0]?.content}
                                                    rowsMin={1}
                                                    className='text_field'
                                                    value={editContent}
                                                    onChange={handleEditContent}
                                                    style={{ padding: '10px', fontSize: '20px', width: '200%', height: '200px' }}
                                                />
                                                <Button variant='contained' className='text_field_sign'
                                                    onClick={handlePostAmmendment}
                                                >সাবমিট</Button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                    {isFinishButton && (
                        <Button variant='contained' className='text_field_sign'
                            onClick={handleNavigate}
                        >Finish</Button>
                    )}

                </>
            )}

        </div>
    )
}

export default AddSection
