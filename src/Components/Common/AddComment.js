import React, { useState } from 'react';

const AddComment = ({ onAddComment }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) {
      alert('Please fill in all fields');
      return;
    }
    onAddComment({ name, comment });
    setName('');
    setComment('');
  };

  return (
    <form 
    style={{
        margin: '300px'
    }} onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Comment</label>
        <textarea placeholder='Enter your comment' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
      </div>
      <button type='submit'>Add Comment</button>
      <p>{comment}</p>
    </form>

  );
};

export default AddComment;
