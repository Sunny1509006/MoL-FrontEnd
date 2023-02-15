import React from 'react'
import './EbookComment.css'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

import PageLink from './PageLink'

const EbookComment = () => {
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
                        <img src="../../images/vumisignin.png" className='ebook_comment_cover_size' />
                    </div>
                    <div className='ebook_comment_book_details'>
                        <h3>My name is ...</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EbookComment
