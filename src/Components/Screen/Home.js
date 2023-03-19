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
import FlippingPdf from "../Common/FlippingPdf";
import FlipBook from "../Common/FlipBook";
import Profile from "../Common/Profile";
import ForumView from "../Common/ForumView";
import Acts from "../Common/Category/Acts"
import Circulars from "../Common/Category/Circulars"
import Gazzettes from "../Common/Category/Gazzettes"
import Guidelines from "../Common/Category/Guidelines"
import Manuals from "../Common/Category/Manuals"
import Mous from "../Common/Category/Mous"
import Notifications from "../Common/Category/Notifications"
import OfficeOrders from "../Common/Category/OfficeOrders"
import Ordinance from "../Common/Category/Ordinances"
import Others from "../Common/Category/Others"
import Policies from "../Common/Category/Policies"
import PresidentOrders from "../Common/Category/PresidentOrders"
import Regulations from "../Common/Category/Regulations"
import Rules from "../Common/Category/Rules"

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
                <Route exact path="/profile" element={<Profile />} />
                <Route path="/ebook/view/:id" element={<EbookView />} />
                <Route path="/ebook/comment/:id" element={<EbookComment />} />
                <Route exact path="/forum/view/:id" element={<ForumView />} />
                <Route path="/blog/:id" element={<BlogInner />} />
                <Route exact path="/chatbot" element={<ChatbotDummy />} />
                <Route exact path="/comment" element={<AddComment />} />
                <Route path ="/ebook/pdf/:id" element={<FlipBook />} />
                <Route exact path="/acts" element={<Acts />} />
                <Route exact path="/circulars" element={<Circulars />} />
                <Route exact path="/ordinances" element={<Ordinance />} />
                <Route exact path="/presidentorders" element={<PresidentOrders />} />
                <Route exact path="/rules" element={<Rules />} />
                <Route exact path="/regulations" element={<Regulations />} />
                <Route exact path="/policies" element={<Policies />} />
                <Route exact path="/guidelines" element={<Guidelines />} />
                <Route exact path="/notifications" element={<Notifications />} />
                <Route exact path="/officeorders" element={<OfficeOrders />} />
                <Route exact path="/mous" element={<Mous />} />
                <Route exact path="/manuals" element={<Manuals />} />
                <Route exact path="/gazettes" element={<Gazzettes />} />
                <Route exact path="/others" element={<Others />} />
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
