import React, { useEffect, useState } from 'react'
import { Avatar, Grid, Paper } from '@mui/material'
import axios from '../axios/axios'
import { Pagination } from 'antd'

import './EbookDummy.css'
import PageLink from './PageLink'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { FaComments } from 'react-icons/fa';
import ShareIcon from '@mui/icons-material/Share';
import { maxWidth } from '@mui/system'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";

const EbookDummy = () => {

    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState("");
    const [page, setPage] = useState(0);
    const [postPerPage, setPostPerPage] = useState(10);

    useEffect(() => {
        const loadEbookPosts = async () => {
            const response = await axios.get(
                "/api/ebooks/"
            );
            setPosts(response.data);
            setTotal(response.data.length);
        };

        loadEbookPosts();
    }, []);

    const indexofLastPage = page + postPerPage;
    const indexofFirstPage = indexofLastPage - postPerPage;
    const currentPosts = posts.slice(indexofFirstPage, indexofLastPage);

    const onShowSizeChange = (current, pageSize) => {
        setPostPerPage(pageSize);
    };

    const itemRender = (current, type, originalElement) => {
        if (type === "prev") {
            return <a>Previous</a>;
        }
        if (type === "next") {
            return <a>Next</a>;
        }

        return originalElement;
    }

    return (
        <div className='ebook_dummy_main'>
            <div>
                <PageLink />
            </div>

            <div className='blog_content'>
                
                <div className='book_content_div'>
                    {currentPosts.map((post) => (
                        // <h6 key={post.ebook_id} className='book_content'><img src={post.ebook_cover} className='blog_cover'/></h6>
                        // <h6 key={post.ebook_id} className='book_content'>{post.ebook_description}</h6>
                        // book_content classname can be added
                        <div key={post.id} className='book_content_div book_content_margin_div'>
                            <Paper elevation={5}>
                                <img src={post.cover} className='book_image' />

                            </Paper>
                            {/* <ShareIcon sx={{ fontSize: 10, color: "#0C6395" }} /> */}
                            <Grid style={{ margin: '10px 0px' }}>
                                <Link to={"/ebook/comment/"+post.id}><h6>{post.heading?.slice(0, 20)}...</h6></Link>
                            </Grid>
                            <Grid style={{ display: 'flex', marginTop: '-10px' }}>
                                <VisibilityIcon sx={{ fontSize: 20, marginTop: '-2px', color: "#0C6395" }} />
                                <div className='like_comment_padding'>{post.viewer_counter}</div>
                                <ThumbUpIcon sx={{ fontSize: 15, color: "#0C6395" }} />
                                <div className='like_comment_padding'>{post.like_user_counter}</div>
                                {/* <ThumbDownIcon sx={{ fontSize: 15, color: "#0C6395" }} /> */}
                                {/* <div className='like_comment_padding'>{post.dislike_user_counter}</div> */}
                                <FaComments style={{ fontSize: 15, color: "#0C6395"}}/>
                                <div className='like_comment_padding'>{post.comment_counter}</div>

                            </Grid>
                        </div>
                    ))}
                </div>
                <Pagination
                    onChange={(value) => setPage(value)}
                    pageSize={postPerPage}
                    total={total}
                    current={page}
                    showSizeChanger
                    showQuickJumper
                    onShowSizeChange={onShowSizeChange}
                    itemRender={itemRender}
                />
            </div>
        </div >
    )
}

export default EbookDummy
