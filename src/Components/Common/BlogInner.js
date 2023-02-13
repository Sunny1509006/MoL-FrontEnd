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
            `http://143.110.241.20:5000/api/blogs/${params.blog_id}`
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
                    <div><h3>{post.blog_title_name}</h3></div>
                    <Grid style={{ display: 'flex' }}>
                        <p>{post.blog_author}, {post.blog_publication?.slice(0, 10)}</p>
                        <div className='Blog_follow_button'>
                            <Button style={{ margin: '7px', fontSize: '10px' }}>
                                <SlUserFollow style={{ marginTop: '-3px' }} /> Follow
                            </Button>
                        </div>
                    </Grid>
                    <div dangerouslySetInnerHTML={{ __html: post.blog_content }} />
                    <Grid style={{ display: 'flex', marginTop: '0px' }}>
                        <VisibilityIcon sx={{ fontSize: 20, marginTop: '-2px', color: "#0C6395" }} />
                        <div className='like_comment_padding'>{post.blog_viewer_counter}</div>
                        <ThumbUpIcon sx={{ fontSize: 15, color: "#0C6395" }} />
                        <div className='like_comment_padding'>{post.blog_like_user_counter}</div>
                        <ThumbDownIcon sx={{ fontSize: 15, color: "#0C6395" }} />
                        <div className='like_comment_padding'>{post.blog_dislike_user_counter}</div>
                        <FaComments style={{ fontSize: 15, color: "#0C6395" }} />
                        <div className='like_comment_padding'>{post.blog_comment_counter}</div>
                        <ShareIcon sx={{ fontSize: 15, color: "#0C6395" }} />
                        <div className='like_comment_padding'>{post.blog_share_user_counter}</div>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default BlogInner
