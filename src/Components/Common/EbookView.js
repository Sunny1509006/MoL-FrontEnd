import React, { useEffect, useState } from 'react'
import './EbookView.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function EbookView() {
    const params = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(
            `http://143.110.241.20:5000/api/ebooks/${params.ebook_id }`
        )
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [params.id])

    return (
        <div className='ebook_view_main'>
            {/* {laws_name} */}
            <div dangerouslySetInnerHTML={{ __html: post.ebook_description }}/>
        </div>
    )
}

export default EbookView
