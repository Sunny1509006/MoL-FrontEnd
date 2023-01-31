import React from 'react'
import BodyHead from '../Common/BodyHead';
import ForumContent from '../Common/ForumContent';
import Footer from "../Common/Footer";
import LeftSidebar from '../Common/LeftSidebar';


const Forum = () => {
  return (
    <div>
      <BodyHead />
      <LeftSidebar />
      <ForumContent />
      <Footer />
    </div>
  )
}

export default Forum;
