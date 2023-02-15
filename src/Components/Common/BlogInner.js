import React, { useEffect, useState } from 'react'
import './BlogInner.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Avatar, Grid, Paper } from '@mui/material'
import { Button } from 'react-bootstrap';
import { SlUserFollow } from 'react-icons/sl'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { FaComments } from 'react-icons/fa';
import ShareIcon from '@mui/icons-material/Share';

const BlogInner = () => {

    const params = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(
            `http://143.110.241.20:4000/api/blogs/${params.id}`
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
        <div className='Blog_Inner_main'>
            <div className='blog_content_inner_div'>
                <Grid className='blog_content_inner_div_header'><h6>ব্লগ</h6></Grid>
                <Grid className='blog_content_inner_padding'>
                    <div><h3>{post.title_name}</h3></div>
                    <Grid style={{ display: 'flex' }}>
                        <p>{post.author}, {post.created_date?.slice(0, 10)}</p>
                        <div className='Blog_follow_button'>
                            <Button style={{ margin: '7px', fontSize: '10px' }}>
                                <SlUserFollow style={{ marginTop: '-3px' }} /> Follow
                            </Button>
                        </div>
                    </Grid>
                    <div className='content_scroll'>
                        <img src={post.cover} className='blog_inner_cover_image' />
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                    <Grid style={{ display: 'flex', marginTop: '0px', padding: '10px' }}>
                        <VisibilityIcon sx={{ fontSize: 20, marginTop: '-2px', color: "#0C6395" }} />
                        <div className='like_comment_padding'>{post.viewer_counter}</div>
                        <ThumbUpIcon sx={{ fontSize: 15, color: "#0C6395" }} />
                        <div className='like_comment_padding'>{post.like_user_counter}</div>
                        <ThumbDownIcon sx={{ fontSize: 15, color: "#0C6395" }} />
                        <div className='like_comment_padding'>{post.dislike_user_counter}</div>
                        <FaComments style={{ fontSize: 15, color: "#0C6395" }} />
                        <div className='like_comment_padding'>{post.comment_counter}</div>
                        <ShareIcon sx={{ fontSize: 15, color: "#0C6395" }} />
                        <div className='like_comment_padding'>{post.share_user_counter}</div>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default BlogInner
