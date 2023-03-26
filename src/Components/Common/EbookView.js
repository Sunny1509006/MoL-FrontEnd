import React, { useEffect, useState } from 'react'
import './EbookView.css'
import axios from '../axios/axios'
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/authHooks';

function EbookView() {
    const {marginDiv} = useAuth()
    const params = useParams();
    console.log(params);
    const [post, setPost] = useState({});
    console.log(post);
    console.log(post.name);

    useEffect(() => {
        axios.get(
            `/api/ebooks/${params.id}/`
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
        <div className='ebook_view_main' style={{ marginLeft: marginDiv? '155px': '50px', transition: '.5s' }}>
                  <Helmet>
        <title>বিস্তারিত ই-বুক</title>
      </Helmet>
            <div style={{ marginTop: '10px', fontFamily: 'Kalpurush', padding: '0px 20px' }}>
                <h3><b>{post.heading}</b></h3>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} style={{ padding: '0px 20px' }} />
        </div>
    )
}

export default EbookView
