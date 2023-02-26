import React, { useState, useEffect, useMemo } from 'react';
import './MostReadBlog.css';
import axios from '../axios/axios';

import { Avatar, Grid, Paper } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { FaComments } from 'react-icons/fa';
import ShareIcon from '@mui/icons-material/Share';

import { Button } from 'react-bootstrap';
import { SlUserFollow } from 'react-icons/sl'

import { Link } from 'react-router-dom';


const MostReadBlog = (props) => {

    const [mostReadBlog, setMostReadBlog] = useState({});

    useEffect(() => {
        axios.get(
            `/api/blogs/topviewer/`
        )
            .then(res => {
                console.log(res)
                setMostReadBlog(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, []);

    const FilterMostReadBlogFirst = useMemo(
        () => Object.values(mostReadBlog).filter((mostReadBlog, index) => index === 0), [mostReadBlog]);

    const FilterMostReadBlogSecond = useMemo(
        () => Object.values(mostReadBlog).filter((mostReadBlog, index) => index === 1), [mostReadBlog]);

    console.log(FilterMostReadBlogFirst);
    return (
        <div className='most_read_blog_body'>
            <div className='blog_box'>
                {FilterMostReadBlogFirst.map((readBlog) => (
                    <>
                        <img src={readBlog.cover !== null ? readBlog.cover : '../images/no_image.png'} className="most_read_blog_cover" />
                        <Link to={"/blog/" + readBlog.id}>
                            <div className='most_read_blog_title'>{readBlog.title_name?.slice(0, 100)}</div>
                        </Link>
                        <Grid style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='most_read_blog_author'>{readBlog.author}, {readBlog.created_date?.slice(0, 10)}</div>
                            <div className='mostread_Blog_follow_button'>
                                <Button style={{ margin: '2px', fontSize: '7px' }}>
                                    {/* <SlUserFollow style={{ marginTop: '-3px' }} /> */}
                                    Follow
                                </Button>
                            </div>
                        </Grid>
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: readBlog.content?.slice(0, 800) }} className='most_read_blog_content' />
                        </div>

                        <Grid style={{ display: 'flex', marginTop: '0px' }}>
                            <VisibilityIcon sx={{ fontSize: 16, marginTop: '-2px', color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.viewer_counter}</div>
                            <ThumbUpIcon sx={{ fontSize: 12, color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.like_user_counter}</div>
                            <ThumbDownIcon sx={{ fontSize: 12, color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.dislike_user_counter}</div>
                            {/* <FaComments style={{ fontSize: 12, color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.comment_counter}</div> */}
                            <ShareIcon sx={{ fontSize: 12, color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.share_user_counter}</div>
                        </Grid>
                    </>
                ))}
            </div>
            <div className='divider_line'></div>
            <div className='blog_box'>
                {FilterMostReadBlogSecond.map((readBlog) => (
                    <>
                        <img src={readBlog.cover !== null ? readBlog.cover : '../images/no_image.png'} className="most_read_blog_cover" />
                        <Link to={"/blog/" + readBlog.id}>
                            <div className='most_read_blog_title'>{readBlog.title_name?.slice(0, 100)}</div>
                        </Link>
                        <Grid style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='most_read_blog_author'>{readBlog.author}, {readBlog.created_date?.slice(0, 10)}</div>
                            <div className='mostread_Blog_follow_button'>
                                <Button style={{ margin: '2px', fontSize: '7px' }}>
                                    {/* <SlUserFollow style={{ marginTop: '-3px' }} /> */}
                                    Follow
                                </Button>
                            </div>
                        </Grid>
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: readBlog.content?.slice(0, 800) }} className='most_read_blog_content' />
                        </div>
                        <Grid style={{ display: 'flex', marginTop: '0px' }}>
                            <VisibilityIcon sx={{ fontSize: 16, marginTop: '-2px', color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.viewer_counter}</div>
                            <ThumbUpIcon sx={{ fontSize: 12, color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.like_user_counter}</div>
                            <ThumbDownIcon sx={{ fontSize: 12, color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.dislike_user_counter}</div>
                            {/* <FaComments style={{ fontSize: 12, color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.comment_counter}</div> */}
                            <ShareIcon sx={{ fontSize: 12, color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.share_user_counter}</div>
                        </Grid>
                    </>
                ))}
            </div>
        </div>
    )
}

export default MostReadBlog
