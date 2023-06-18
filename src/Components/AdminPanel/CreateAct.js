import React from 'react'
import useAuth from '../../hooks/authHooks'
import axios from '../axios/axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Button } from 'react-bootstrap';
import "./CreateAct.css"
const CreateAct = () => {
    const { token } = useAuth();
    const navigate = useNavigate()

    const [publicationDate, setPublicationDate] = useState("")
    const [publicationYear, setPublicationYear] = useState("")
    const [actNumber, setActNumber] = useState("")
    const [actTitle, setActTitle] = useState("")
    const [proposal, setProposal] = useState("")
    const [objective, setObjective] = useState("")
    const [file, setFile] = useState("")
    const [coverPhoto, setCoverPhoto] = useState("")
    const [keywords, setKeywords] = useState("")

    const handlePublicationYear = (event) => {
        setPublicationYear(event.target.value);
    };

    const handlePublicationDate = (event) => {
        setPublicationDate(event.target.value);
    };

    const handleActNumber = (event) => {
        setActNumber(event.target.value);
    };

    const handleActTitle = (event) => {
        setActTitle(event.target.value);
    };

    const handleProposal = (event) => {
        setProposal(event.target.value);
    };

    const handleObjective = (event) => {
        setObjective(event.target.value);
    };

    const handleFile = (event) => {
        setFile(event.target.files[0]);
    };

    const handleCoverPhoto = (event) => {
        setCoverPhoto(event.target.files[0]);
    };

    const handleKeywords = (event) => {
        setKeywords(event.target.value);
    };


    const handleCreateAct = () => {
        const formData = new FormData();
        formData.append('jwt', token);
        formData.append('publication_date', publicationDate);
        formData.append('publication_year', publicationYear);
        formData.append('act_number', actNumber);
        formData.append('title_of_act', actTitle);
        formData.append('proposal', proposal);
        formData.append('objective', objective);
        formData.append('keywords', keywords);
        if (coverPhoto) {
            formData.append('cover_photo', coverPhoto, coverPhoto.name);
        }
        else {
            formData.append('cover_photo', coverPhoto);
        }
        if (file) {
            formData.append('file', file, file.name);
        }
        else {
            formData.append('file', file);
        }
        axios.post("/api/act/create/", formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
        )
            .then(result => {

                alert("success")
                navigate("/actinput")
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
        <div className='CreateActMain'>
            <form className='CreateActInner'>
                <TextField required={true} fullWidth label="শিরোনাম" variant="outlined" className='text_field'
                    value={actTitle} onChange={handleActTitle} inputProps={{ style: { height: '15px' } }} />
                <div style={{
                    display: 'flex',
                    gap: '10px',
                }}>
                    <TextField required={true} fullWidth label="বছর" variant="outlined" className='text_field'
                        value={publicationYear} onChange={handlePublicationYear} inputProps={{ style: { height: '15px' } }} />
                    <TextField fullWidth label="নম্বর" variant="outlined" className='text_field'
                        value={actNumber} onChange={handleActNumber} inputProps={{ style: { height: '15px' } }} />
                    <TextField required={true} fullWidth label="প্রকাশনার তারিখ" variant="outlined" className='text_field'
                        value={publicationDate} onChange={handlePublicationDate} inputProps={{ style: { height: '15px' } }} />
                </div>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                }}>
                    <TextareaAutosize
                        aria-label="proposal"
                        placeholder="প্রস্তাব"
                        rowsMin={3}
                        className='text_field'
                        value={proposal}
                        onChange={handleProposal}
                        style={{ padding: '10px', fontSize: '12px', width: '100%', height: '200px' }}
                    />
                    <TextareaAutosize
                        aria-label="objective"
                        placeholder="উদ্দেশ্য"
                        rowsMin={3}
                        className='text_field'
                        value={objective}
                        onChange={handleObjective}
                        style={{ padding: '10px', fontSize: '12px', width: '100%', height: '200px' }}
                    />
                </div>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    marginTop: '10px',
                    // justifyContent: 'space-between'
                }}>
                    <div>
                        <p>কভার ফটো যোগ করুন</p>
                        <input
                            accept="image/*"
                            // className={classes.input}
                            id="image-upload"
                            type="file"
                            onChange={handleCoverPhoto}
                        />
                    </div>
                    <div>
                        <p>আইন পিডিএফ যোগ করুন</p>
                        <input
                            accept="application/pdf,application/vnd.ms-excel"
                            // className={classes.input}
                            id="image-upload"
                            type="file"
                            onChange={handleFile}
                        />
                    </div>
                    <TextareaAutosize
                        aria-label="keywords"
                        placeholder="কীওয়ার্ড"
                        rowsMin={1}
                        className='text_field'
                        value={keywords}
                        onChange={handleKeywords}
                        style={{ padding: '10px', fontSize: '12px', width: '100%', height: '200px' }}
                    />
                </div>
                <Button variant='contained' className='text_field_sign'
                    onClick={handleCreateAct}
                >সাবমিট</Button>
            </form>
        </div>
    )
}

export default CreateAct
