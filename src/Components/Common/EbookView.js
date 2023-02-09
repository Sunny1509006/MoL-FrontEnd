import React, { useEffect, useState } from 'react'
import './EbookView.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function EbookView() {
    const params = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(
            `https://jsonplaceholder.typicode.com/comments/${params.id }`
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
            {post.body}
        </div>
    )
}

export default EbookView
