import React, { useEffect, useState } from 'react'
import './EbookComment.css'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from '../axios/axios'

import { Grid, Paper } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { FaComments } from 'react-icons/fa';
import ShareIcon from '@mui/icons-material/Share';

import PageLink from './PageLink'
import { Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/authHooks';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";
import AddComment from './AddComment'

const EbookComment = () => {
    const { marginDiv, token } = useAuth()
    const params = useParams();
    console.log(params);
    const [post, setPost] = useState({});
    console.log(post);
    console.log(post.name);
    const ebookURL = `http://143.110.210.43:3000/api/ebooks/${params.id}/`

    const [showShare, setShowShare] = useState(false);
    const handleShareClick = () => {
        setShowShare(!showShare);
    };

    const handleLikeEbook = (id) => {
        if (token) {
            axios.post("/api/ebooks/userlike/",
                {
                    jwt: token,
                    ebook_id: id,
                }
            )
                .then(response => {
                    // fetchUser();
                    // fetchMostReadBlog();
                    handleSingleLikeEbook();
                })
                .catch(err =>
                    console.log(err)
                )
        }
    }

    const handleSingleLikeEbook = () => {
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

    }


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
        <div className='ebook_comment_main' style={{ marginLeft: marginDiv ? '155px' : '50px' }}>
            <Helmet>
                <title>ই-বুক</title>
            </Helmet>
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
                        <div className='overflow_ebook'>
                            <h6 style={{ fontWeight: 'bold' }}>{post.heading}</h6>
                            <p>লেখকঃ {post.author}</p>
                            <p>প্রকাশের তারিখঃ {post.publication_date}</p>
                            <div>
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                <p className='read_more'></p>
                            </div>
                        </div>
                        <Grid style={{ display: 'flex', marginTop: '10px' }}>
                            <Link to={"/ebook/view/" + post.id}>
                                <Button style={{ marginTop: '-5px', marginRight: '50px' }}>সম্পূর্ণ পড়ুন</Button>
                            </Link>
                            <Link to={"/ebook/pdf/" + post.id}>
                                <Button style={{ marginTop: '-5px', marginRight: '50px' }}>বই আকারে পড়ুন</Button>
                            </Link>
                            <VisibilityIcon sx={{ fontSize: 16, marginTop: '4px', color: "#0C6395" }} />
                            <div className='like_comment_padding'>{post.viewer_counter}</div>
                            <ThumbUpIcon sx={{ fontSize: 12, marginTop: '6px', color: "#0C6395" }} 
                            onClick={() => { handleLikeEbook(post.id) }}/>
                            <div className='like_comment_padding'>{post.like_user_counter}</div>
                            {/* <ThumbDownIcon sx={{ fontSize: 15, color: "#0C6395" }} />
                            <div className='like_comment_padding'>{post.dislike_user_counter}</div> */}
                            <FaComments style={{ fontSize: 12, marginTop: '6px', color: "#0C6395" }} />
                            <div className='like_comment_padding'>{post.comment_counter}</div>
                            <ShareIcon sx={{ fontSize: 12, marginTop: '6px', color: "#0C6395" }} onClick={handleShareClick} />
                            <div className='like_comment_padding'>{post.share_user_counter}
                                {showShare && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'absolute',
                                        background: 'white',
                                        padding: '10px',
                                        marginTop: '-220px'

                                    }}>
                                        <FacebookShareButton url={ebookURL}>
                                            <FacebookIcon size={24} style={{marginBottom: '5px'}}/>
                                        </FacebookShareButton>
                                        <WhatsappShareButton url={ebookURL}>
                                            <WhatsappIcon size={24} style={{marginBottom: '5px'}}/>
                                        </WhatsappShareButton>
                                        <EmailShareButton url={ebookURL}>
                                            <EmailIcon size={24} style={{marginBottom: '5px'}}/>
                                        </EmailShareButton>
                                        <LinkedinShareButton url={ebookURL}>
                                            <LinkedinIcon size={24} style={{marginBottom: '5px'}}/>
                                        </LinkedinShareButton>
                                        <TelegramShareButton url={ebookURL}>
                                            <TelegramIcon size={24} style={{marginBottom: '5px'}}/>
                                        </TelegramShareButton>
                                        <TwitterShareButton url={ebookURL}>
                                            <TwitterIcon size={24} style={{marginBottom: '5px'}}/>
                                        </TwitterShareButton>
                                    </div>
                                )}
                            </div>




                        </Grid>
                    </div>
                </div>
                
            </div>
            <AddComment />
        </div>
    )
}

export default EbookComment
