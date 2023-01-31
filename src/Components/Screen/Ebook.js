import React from 'react'
import BodyHead from '../Common/BodyHead';
import EbookContent from '../Common/EbookContent';
import Footer from "../Common/Footer";
import LeftSidebar from '../Common/LeftSidebar';

const Ebook = () => {
  return (
    <div>
      <BodyHead />
      <LeftSidebar />
      <EbookContent />
      <Footer />
    </div>
  )
}

export default Ebook;

