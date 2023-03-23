import React, { useState } from 'react'
import useAuth from '../../hooks/authHooks'
import "./ShowSearchText.css"
import { Helmet } from 'react-helmet'
import PageLink from './PageLink'
import { Link } from 'react-router-dom'
import { BiLeftArrowAlt, BiPlus } from 'react-icons/bi'
import HighlightedText from './HighlightedText'
import ShowSearchContent from './ShowSearchContent'

const ShowSearchText = () => {
    const { searchData, marginDiv } = useAuth();
    // console.log(searchData);

    // const handleStr = (str) => {
    //     console.log(str);
    //     console.log(typeof(str));
    //     const newStr = str.substring(1, str.length - 1);
    //     return newStr;
    // }

    return (
        <div className='search_text_main' style={{ marginLeft: marginDiv ? '155px' : '50px' }}>
            <Helmet>
                <title>সার্চ</title>
            </Helmet>
            <div>
                <PageLink />
            </div>
            <div className='search_content'>
                <div className='search_content_header'>
                    <div style={{ color: '#0C6395' }}>
                        <Link to='/'>
                            <BiLeftArrowAlt style={{ marginTop: '-3px', fontSize: '25px' }} />
                        </Link>
                        &nbsp;&nbsp;অনুসন্ধান ফলাফল&nbsp;&nbsp;
                    </div>
                </div>
                <div className='search_inner_content'>
                    <div className='search_loop_div'>
                        {searchData.map((result) => (
                            <div key={result.id} className="single_search">
                                <div className='overflowDiv'>
                                    <div>
                                        {/* <Link to={"/ebook/comment/"+result.id}> */}
                                        <Link to={"/search/content/"+result.id} >
                                           <b><HighlightedText text={result.heading} /></b>
                                        </Link>
                                    </div>
                                    <div>
                                        <div dangerouslySetInnerHTML={{ __html: result.content }} className='most_read_blog_content' />
                                        <p className="read-more"></p>
                                        {/* <HighlightedText text={result.content} searchKey={query} /> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowSearchText
