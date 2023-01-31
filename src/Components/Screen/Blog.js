import React from 'react'
import BodyHead from '../Common/BodyHead';
import BlogContent from '../Common/BlogContent';
import Footer from "../Common/Footer";
import LeftSidebar from '../Common/LeftSidebar';

const Blog = () => {
  return (
    <div>
      <BodyHead />
      <LeftSidebar />
      <BlogContent />
      <Footer />
    </div>
  )
}

export default Blog;
