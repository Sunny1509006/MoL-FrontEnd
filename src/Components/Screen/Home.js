import React, { useState } from "react";
import BodyHead from "../Common/BodyHead";
import LeftSidebar from "../Common/LeftSidebar";
import HomePage from "../Common/HomePage";
import BlogContent from "../Common/BlogContent";
import EbookContent from "../Common/EbookContent";
import EbookDummy from "../Common/EbookDummy";
import ForumContent from "../Common/ForumContent";
import SignUp from "../Common/SignUp";


import './Home.css';
import Footer from "../Common/Footer";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";

function Home() {
    return (
        <div>
            <BodyHead />
            <LeftSidebar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/ebook" element={<EbookDummy />} />
                <Route exact path="/blog" element={<BlogContent />} />
                <Route exact path="/forum" element={<ForumContent />} />
                <Route exact path="/SignUp" element={<SignUp />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Home
