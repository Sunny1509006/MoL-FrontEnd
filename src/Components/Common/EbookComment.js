import React, { useEffect, useState } from 'react'
import './EbookComment.css'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios'

import { Avatar, Grid, Paper } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { FaComments } from 'react-icons/fa';
import ShareIcon from '@mui/icons-material/Share';

import PageLink from './PageLink'
import { Button } from 'react-bootstrap'

const EbookComment = () => {
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
        <div className='ebook_comment_main'>
            <div>
                <PageLink />
            </div>
            <div className='ebook_comment_content'>
                <div className='ebook_comment_content_header'>
                    <Link to='/ebook'>
                        <div >
                            <BiLeftArrowAlt style={{ marginTop: '-3px' }} />
                            &nbsp;&nbsp;ই-বুক&nbsp;&nbsp;
                        </div>
                    </Link>
                    <div style={{ color: '#0C6395' }}>
                        <IoIosArrowForward />
                        &nbsp;&nbsp;বিস্তারিত
                    </div>
                </div>
                <div className='ebook_comment_content_body'>
                    <div className='ebook_comment_cover'>
                        <Paper elevation={4}>
                            <img src={post.cover} className='ebook_comment_cover_size' />
                        </Paper>
                    </div>
                    <div className='ebook_comment_book_details'>
                        <h6 style={{ fontWeight: 'bold' }}>{post.name}</h6>
                        <p>লেখকঃ {post.author}</p>
                        <p>প্রকাশের তারিখঃ {post.publication_date}</p>
                        <div dangerouslySetInnerHTML={{ __html: post.content?.slice(0, 700) }} />
                        <Grid style={{ display: 'flex', marginTop: '0px' }}>
                            <Link to={"/ebook/view/"+post.id}>
                                <Button style={{ marginTop: '-5px', marginRight: '50px' }}>সম্পূর্ণ পড়ুন</Button>
                            </Link>
                            <VisibilityIcon sx={{ fontSize: 20, marginTop: '-2px', color: "#0C6395" }} />
                            <div className='like_comment_padding'>{post.viewer_counter}</div>
                            <ThumbUpIcon sx={{ fontSize: 15, color: "#0C6395" }} />
                            <div className='like_comment_padding'>{post.like_user_counter}</div>
                            <ThumbDownIcon sx={{ fontSize: 15, color: "#0C6395" }} />
                            <div className='like_comment_padding'>{post.dislike_user_counter}</div>
                            {/* <FaComments style={{ fontSize: 15, color: "#0C6395" }} />
                            <div className='like_comment_padding'>{post.comment_counter}</div> */}
                            <ShareIcon sx={{ fontSize: 15, color: "#0C6395" }} />
                            <div className='like_comment_padding'>{post.share_user_counter}</div>

                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EbookComment
