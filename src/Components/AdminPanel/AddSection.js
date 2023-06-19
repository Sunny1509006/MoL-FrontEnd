import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/authHooks';
import axios from '../axios/axios';
import AmmendRepealed from './AmmendRepealed';

const AddSection = ({ actId }) => {
    const [sectionNo, setSectionNo] = useState("")
    const [sectionHeading, setSectionHeading] = useState("")
    const [sectionContent, setSectionContent] = useState("")
    const { token } = useAuth();

    const handleSectionNo = (event) => {
        setSectionNo(event.target.value)
    }

    const handleSectionHeading = (event) => {
        setSectionHeading(event.target.value)
    }
    const handleSectionContent = (event) => {
        setSectionContent(event.target.value)
    }

    const handleCreateAct = () => {

        axios.post("/api/section/create/",
            {
                jwt: token,
                act_id: actId,
                section_number: sectionNo,
                heading: sectionHeading,
                content: '',

            },

        )
            .then(result => {

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
            <AmmendRepealed />
        </div>
    )
}

export default AddSection
