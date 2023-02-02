import React, { useState, useEffect } from 'react';
import './BlogContent.css'
import PageLink from './PageLink'
import axios from 'axios';
import { Pagination } from 'antd';


const BlogContent = () => {

  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const loadPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setPosts(response.data);
      setTotal(response.data.length);
    };

    loadPosts();
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
    <div className='blog_content_main'>
      <div>
        <PageLink />
      </div>
      <div className='blog_content'>
        <div className='book_div'>
        {currentPosts.map((post) => (
          <h6 key={post.id} className='book_content'>{post.body}</h6>
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
    </div>
  )
}

export default BlogContent
