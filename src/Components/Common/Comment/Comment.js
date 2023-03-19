import React from 'react'
import "./Comments.css"

const Comment = ({ comment }) => {
    return (
        <div className='comment'>
            <div className='comment-image-container'>
                <img src="/images/profile.png" />
            </div>
            <div className='comment-right-part'>
                <div className='comment-content'>
                    <div className='comment-author'>
                        {comment.user_name}
                    </div>
                    <div>
                        {comment.created_date.slice(0,10)}
                    </div>
                </div>
                <div className='comment-text'>
                    {comment.comment}
                </div>
            </div>
        </div>
    )
}

export default Comment
