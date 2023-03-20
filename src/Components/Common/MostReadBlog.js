import React, { useState, useEffect, useMemo } from 'react';
import './MostReadBlog.css';
import axios from '../axios/axios';

import { Grid } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';

import { Button } from 'react-bootstrap';
import { SlUserFollow } from 'react-icons/sl'

import { Link } from 'react-router-dom';
import useAuth from '../../hooks/authHooks';


const MostReadBlog = (props) => {
    const { token, mostReadBlog, fetchMostReadBlog } = useAuth();

    const handleLikeBlog = (id) => {
        if (token) {
            axios.post("/api/blogs/userlike/",
                {
                    jwt: token,
                    blog_id: id,
                },
            )
                .then(response => {
                    // fetchUser();
                    fetchMostReadBlog();
                })
                .catch(err =>
                    console.log(err)
                )
        }
    }



    useEffect(() => {
        // axios.get(
        //     `/api/blogs/topviewer/`
        // )
        //     .then(res => {
        //         // console.log(res)
        //         setMostReadBlog(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

        fetchMostReadBlog();

    }, []);


    const FilterMostReadBlogFirst = useMemo(
        () => Object.values(mostReadBlog).filter((mostReadBlog, index) => index === 0), [mostReadBlog]);

    const FilterMostReadBlogSecond = useMemo(
        () => Object.values(mostReadBlog).filter((mostReadBlog, index) => index === 1), [mostReadBlog]);

    // console.log(FilterMostReadBlogFirst);
    return (
        <div className='most_read_blog_body'>
            <div className='blog_box'>
                {FilterMostReadBlogFirst.map((readBlog) => (
                    < div key={readBlog.id}>
                        <div className='overflowDiv' key={readBlog.id}>
                            <img src={readBlog.cover !== null ? readBlog.cover : '../images/no_image.png'} className="most_read_blog_cover" />
                            <Link to={"/blog/" + readBlog.id}>
                                <div className='most_read_blog_title'>{readBlog.title_name?.slice(0, 100)}</div>
                            </Link>
                            <Grid style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className='most_read_blog_author'>
                                    {readBlog.author}
                                    <SlUserFollow style={{
                                        marginTop: '0px',
                                        color: '#0C6395',
                                        fontSize: '13px',
                                        marginLeft: '10px'
                                    }} />
                                </div>
                                <div className='mostread_Blog_follow_button'>
                                </div>
                            </Grid>
                            <Grid style={{
                                fontSize: '10px'
                            }}>
                                {readBlog.created_date?.slice(0, 10)}
                            </Grid>
                            <div>
                                <div dangerouslySetInnerHTML={{ __html: readBlog.content }} className='most_read_blog_content' />
                                <p className="read-more"></p>
                            </div>
                        </div>
                        <Grid style={{ display: 'flex', marginTop: '10px' }}>
                            <VisibilityIcon sx={{ fontSize: 16, marginTop: '-2px', color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.viewer_counter}</div>
                            <ThumbUpIcon sx={{ fontSize: 12, color: "#0C6395" }} onClick={() => { handleLikeBlog(readBlog.id) }} />
                            <div className='most_read_blog_like'>{readBlog.like_user_counter}</div>
                            {/* <ThumbDownIcon sx={{ fontSize: 12, color: "#0C6395" }} /> */}
                            {/* <div className='most_read_blog_like'>{readBlog.dislike_user_counter}</div> */}
                            {/* <FaComments style={{ fontSize: 12, color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.comment_counter}</div> */}
                            <ShareIcon sx={{ fontSize: 12, color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.share_user_counter}</div>
                            <Link to={"/blog/" + readBlog.id}
                                style={{ marginLeft: '60%' }}>
                                <Button variant="outline-info" style={{
                                    fontSize: '10px',
                                    padding: '3px 10px',
                                    marginTop: '-15px',
                                }}>
                                    বিস্তারিত
                                </Button>
                            </Link>
                        </Grid>
                    </div>
                ))}
            </div>
            <div className='divider_line'></div>
            <div className='blog_box'>
                {FilterMostReadBlogSecond.map((readBlog) => (
                    <div key={readBlog.id}>
                        <div className='overflowDiv' key={readBlog.id}>
                            <img src={readBlog.cover !== null ? readBlog.cover : '../images/no_image.png'} className="most_read_blog_cover" />
                            <Link to={"/blog/" + readBlog.id}>
                                <div className='most_read_blog_title'>{readBlog.title_name?.slice(0, 100)}</div>
                            </Link>
                            <Grid style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className='most_read_blog_author'>
                                    {readBlog.author}
                                    <SlUserFollow style={{
                                        marginTop: '0px',
                                        color: '#0C6395',
                                        fontSize: '13px',
                                        marginLeft: '10px'
                                    }} />
                                </div>
                                <div className='mostread_Blog_follow_button'>
                                </div>
                            </Grid>
                            <Grid style={{
                                fontSize: '10px'
                            }}>
                                {readBlog.created_date?.slice(0, 10)}
                            </Grid>
                            <div>
                                <div dangerouslySetInnerHTML={{ __html: readBlog.content }} className='most_read_blog_content' />
                                <p className="read-more">
                                </p>
                            </div>
                        </div>
                        <Grid style={{ display: 'flex', marginTop: '10px' }}>
                            <VisibilityIcon sx={{ fontSize: 16, marginTop: '-2px', color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.viewer_counter}</div>
                            <ThumbUpIcon sx={{ fontSize: 12, color: "#0C6395" }} onClick={() => { handleLikeBlog(readBlog.id) }} />
                            <div className='most_read_blog_like'>{readBlog.like_user_counter}</div>
                            {/* <ThumbDownIcon sx={{ fontSize: 12, color: "#0C6395" }} /> */}
                            {/* <div className='most_read_blog_like'>{readBlog.dislike_user_counter}</div> */}
                            {/* <FaComments style={{ fontSize: 12, color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.comment_counter}</div> */}
                            <ShareIcon sx={{ fontSize: 12, color: "#0C6395" }} />
                            <div className='most_read_blog_like'>{readBlog.share_user_counter}</div>
                            <Link to={"/blog/" + readBlog.id}
                                style={{ marginLeft: '60%' }}>
                                <Button variant="outline-info" style={{
                                    fontSize: '10px',
                                    padding: '3px 10px',
                                    marginTop: '-15px',
                                }}>
                                    বিস্তারিত
                                </Button>
                            </Link>
                        </Grid>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MostReadBlog
