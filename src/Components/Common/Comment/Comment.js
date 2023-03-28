import React, { useEffect, useState } from 'react'
import "./Comments.css"
import axios from '../../axios/axios';
import useAuth from '../../../hooks/authHooks';
import CommentForm from './CommentForm';

const Comment = ({ comment, ebookID }) => {
    const [replies, setReplies] = useState([]);
    const { token } = useAuth();
    const [commentReply, setCommentReply] = useState(false);
    const [commentID, setCommentID] = useState("")
    // console.log
    useEffect(() => {
        axios.post("/api/ebooks/usercommentsreplylist/",
            {
                ebook_id: ebookID,
                comment_id: comment.id
            },
        )
            .then(response => {
                // console.log(response.data)
                setReplies(response.data);
            })
            .catch(err =>
                console.log(err)
            )
    }, []);

    const handleCommentReplyList = () => {
        axios.post("/api/ebooks/usercommentsreplylist/",
        {
            ebook_id: ebookID,
            comment_id: comment.id
        },
    )
        .then(response => {
            // console.log(response.data)
            setReplies(response.data);
        })
        .catch(err =>
            console.log(err)
        )
    }

    const handleCommentReply = (id) => {
        setCommentReply(true);
        console.log(id);
        setCommentID(id)
    }

    const addReplyComment = (text, parentID=ebookID, commentReplyID=commentID) => {
        console.log("addComment", text, parentID, commentReplyID)
        if (token) { 
        axios.post("/api/ebooks/usercommentsreply/",
            {
                ebook_id: parentID,
                reply: text,
                comment_id: commentReplyID,
                jwt: token,
            }
        )
        .then(response=> {
            // setData()
            setCommentID("");
            setCommentReply(false);
            handleCommentReplyList()
        })
        .catch(err=> {
            console.log(err);
        })
    }
};


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
                        {comment.created_date.slice(0, 10)}
                    </div>
                </div>
                <div className='comment-text'>
                    {comment.comment}
                </div>
                <div className='comment-actions'>
                    {token &&
                        <div className='comment-action' onClick={()=>handleCommentReply(comment.id)}>Reply</div>
                    }
                </div>
                {commentReply && 
                    <CommentForm submitLabel="জমা দিন" handleSubmit={addReplyComment} />
                }
                {replies.length > 0 && (
                    <div className='replies'>
                        {replies.map((reply) => (
                            <div className='comment' key={reply.id}>
                                <div className='comment-image-container'>
                                    <img src="/images/profile.png" />
                                </div>
                                <div className='comment-right-part'>
                                    <div className='comment-content'>
                                        <div className='comment-author'>
                                            {reply.user_name}
                                        </div>
                                        {/* <div>
                                            {comment.created_date.slice(0, 10)}
                                        </div> */}
                                    </div>
                                    <div className='comment-text'>
                                        {reply.reply}
                                    </div>
                                    {/* <div className='comment-actions'>
                                        {token &&
                                            <div className='comment-action'>Reply</div>
                                        }
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Comment
