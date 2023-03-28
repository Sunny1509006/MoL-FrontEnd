import axios from '../../axios/axios';
import React, { useEffect, useState } from 'react'
import "./Comments.css"
import Comment from "./Comment"
import CommentForm from './CommentForm';
import useAuth from '../../../hooks/authHooks';

const Comments = (id) => {
    const [data, setData] = useState([]);
    const { token } = useAuth();

    useEffect(() => {
        // console.log(id.id);
        axios.post("/api/ebooks/usercommentlist/",
            { ebook_id: id.id },
        )
            .then(response => {
                // console.log(response.data)
                setData(response.data);
            })
            .catch(err =>
                console.log(err)
            )
    }, [id]);

    const handleCommentList = () => {
        axios.post("/api/ebooks/usercommentlist/",
        { ebook_id: id.id },
    )
        .then(response => {
            // console.log(response.data)
            setData(response.data);
        })
        .catch(err =>
            console.log(err)
        )
    }

    const addComment = (text, parentID=id.id) => {
        console.log("addComment", text, parentID)
        if (token) { 
        axios.post("/api/ebooks/usercomment/",
            {
                ebook_id: parentID,
                user_comment: text,
                jwt: token,
            }
        )
        .then(response=> {
            // setData()
            handleCommentList()
        })
        .catch(err=> {
            console.log(err);
        })
    }
};


return (
    <div className='comments'>
        <div className='comments-title'>কমেন্টস</div>
        <div className='comment-form-title'>মতামত দিন</div>
        <CommentForm submitLabel="জমা দিন" handleSubmit={addComment} />
        <div className='comments-container'>
            {data.map((eachData) => (
                // <div key={eachData.id}>{eachData.comment}</div>
                <Comment key={eachData.id}
                    comment={eachData}
                    //  onChange = {handleReplyComment(eachData.id)}
                    //  replies = {reply}
                    ebookID={id.id}
                />
            ))}

        </div>
    </div>
)
}

export default Comments
