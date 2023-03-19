import React, { useEffect, useState } from 'react'
import "./ForumView.css"
import useAuth from '../../hooks/authHooks';
import { Helmet } from 'react-helmet';
import { BiLeftArrowAlt } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom';
import AddComment from './AddComment';
import axios from '../axios/axios';
import Comments from './Comment/Comments';

const ForumView = () => {
  const { marginDiv } = useAuth();
  const params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(
      `/api/forums/${params.id}/`
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
    <div className='forum_main_div' style={{ marginLeft: marginDiv ? '155px' : '50px' }}>
      <Helmet>
        <title>বিস্তারিত ফোরাম</title>
      </Helmet>
      <div className='forum_content_inner_div'>
        <div className='forum_content_inner_div_header'>
          <Link to='/forum'>
            <div>
              <BiLeftArrowAlt style={{ marginTop: '-3px' }} />
              &nbsp;&nbsp;ফোরাম&nbsp;&nbsp;
            </div>
          </Link>
          <div style={{ color: '#0C6395' }}>
            <IoIosArrowForward />
            &nbsp;&nbsp;বিস্তারিত
          </div>
        </div>
        <div className='forum_content_inner_padding'>
          <div><h5><b>{post.name}</b></h5></div>
          <div style={{ display: 'flex' }}>
            <p>{post.owner__full_name}</p>
          </div>
          <p style={{
            marginTop: '-10px',
            fontSize: '10px',
          }}>{post.created_date?.slice(0, 10)}</p>
          <div>
            {post.thumbnail !== null ?
              <>
                <img src={post.thumbnail} className='forum_inner_cover_image' />
                <div>{post.description}</div>
              </> :
              <div>{post.description}</div>
            }
          </div>
        </div>
      </div>
      {/* <AddComment /> */}
      <Comments id={params.id}/>
    </div >
  )
}

export default ForumView
