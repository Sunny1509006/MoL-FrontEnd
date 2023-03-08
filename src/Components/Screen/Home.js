import React, { useState } from "react";
import BodyHead from "../Common/BodyHead";
import LeftSidebar from "../Common/LeftSidebar";
import HomePage from "../Common/HomePage";
import BlogContent from "../Common/BlogContent";
import EbookDummy from "../Common/EbookDummy";
import ForumContent from "../Common/ForumContent";
import SignUp from "../Common/SignUp";
import EbookView from "../Common/EbookView";


import './Home.css';
import Footer from "../Common/Footer";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import BlogInner from "../Common/BlogInner";
import EbookComment from "../Common/EbookComment";
import Chatbot from "../Common/Chatbot";
import SupportWindow from "../SupportWindow/SupportWindow";
import ChatbotView from "../SupportWindow/ChatbotView";
import Login from "../Common/Login";
import SpeechToText from "../SupportWindow/speechToText";
import ChatbotDummy from "../SupportWindow/ChatbotDummy";
import AddComment from "../Common/AddComment";

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
                <Route exact path="/Login" element={<Login />} />
                <Route path="/ebook/view/:id" element={<EbookView />} />
                <Route path="/ebook/comment/:id" element={<EbookComment />} />
                <Route path="/blog/:id" element={<BlogInner />} />
                <Route exact path="/chatbot" element={<ChatbotDummy />} />
                <Route exact path="/comment" element={<AddComment />} />
                <Route
                    path="*"
                    element={
                        <div>
                            <h2>404 Page not found</h2>
                        </div>
                    }
                />
            </Routes>
            <ChatbotView />
            <Footer />
        </div>
    )
}

export default Home
