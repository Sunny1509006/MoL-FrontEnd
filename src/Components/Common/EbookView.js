import React, { useEffect, useState } from 'react'
import './EbookView.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

function EbookView() {
    const params = useParams();
    console.log(params);
    const [post, setPost] = useState({});
    console.log(post);
    console.log(post.name);

    useEffect(() => {
        axios.get(
            `http://143.110.241.20:4000/api/ebooks/${params.id}/`
        )
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [params.id]);

    return (
        <div className='ebook_view_main'>
            <div style={{ marginTop: '10px', fontFamily: 'Kalpurush', padding: '0px 20px' }}>
                <h3><b>{post.name}</b></h3>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} style={{ padding: '0px 20px' }} />
        </div>
    )
}

export default EbookView
