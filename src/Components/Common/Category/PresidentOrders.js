import React, { useState, useEffect } from 'react'
import './Categories.css'
import useAuth from '../../../hooks/authHooks';
import { Helmet } from 'react-helmet';
import PageLink from '../PageLink';
import { Link } from 'react-router-dom';
import { BiLeftArrowAlt, BiPlus } from 'react-icons/bi'
import axios from "../../axios/axios"

const PresidentOrders = () => {
  const { marginDiv, token } = useAuth();
  const [presidentOrders, setPresidentOrders] = useState([])

  useEffect(() => {
    const loadPresidentOrders = async () => {
      const response = await axios.get(
        "/api/category/presidentorders/"
      );
      console.log(response);
      setPresidentOrders(response.data);
      // setTotal(response.data.length);

    };

    loadPresidentOrders();
  }, []);
  return (
    <div className='category_main_div' style={{ marginLeft: marginDiv ? '155px' : '50px' }}>
      <Helmet>
        <title>রাষ্ট্রপতির আদেশ সমূহ</title>
      </Helmet>
      <div>
        <PageLink />
      </div>
      <div className='category_content'>
        <div className='category_content_header'>
          <div style={{ color: '#0C6395' }}>
            <Link to='/'>
              <BiLeftArrowAlt style={{ marginTop: '-3px', fontSize: '25px' }} />
            </Link>
            &nbsp;&nbsp;রাষ্ট্রপতির আদেশ সমূহ&nbsp;&nbsp;
          </div>
        </div>
        <div className='category_inner_content'>
          <div className='category_loop_div'>
            {presidentOrders.map((presidentOrder) => (
              <div className='single_category' key={presidentOrder.id}>
                <div className='category_thumbnail'>
                  <img src={presidentOrder.cover ? presidentOrder.cover : '/images/forum_thumbnail.png'}
                    style={{
                      height: '40px',
                      width: '40px',
                    }}></img>
                </div>
                <div className='category_ques_writer'>
                  <Link to={"/ebook/comment/" + presidentOrder.id}><p>{presidentOrder.heading}</p></Link>
                  {/* <p>প্রশ্নকারী: {forum.owner}</p> */}
                </div>
                <div className='category_ans_view'>
                  {/* <p>উত্তর: {forum.comment_counter}</p>
              <p>দেখেছে: {forum.viewer_counter}</p> */}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default PresidentOrders
