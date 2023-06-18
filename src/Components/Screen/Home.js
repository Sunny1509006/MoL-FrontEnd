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
import ShowSearchText from "../Common/ShowSearchText";
import useAuth from "../../hooks/authHooks";
import ShowSearchContent from "../Common/ShowSearchContent";
import TermAndCondition from "../Common/AppPrivacy/TermAndCondition";
import PrivacyPolicy from "../Common/AppPrivacy/PrivacyPolicy";
import HomePageNew from "../Common/HomePageNew";
import ActInitialView from "../Common/ActView/ActInitialView";
import ActInnerView from "../Common/ActView/ActInnerView";
import AdminLogin from "../AdminPanel/AdminLogin";

function Home() {
    const {query} = useAuth();

    return (
        <div>
            {/* <BodyHead />
            <LeftSidebar /> */}
            <Routes>
                <Route exact path="/" element={[<BodyHead />, <LeftSidebar />, <HomePageNew />, <ChatbotView />, <Footer />]} />
                <Route exact path="/ebook" element={[<BodyHead />, <LeftSidebar />, <EbookDummy />, <ChatbotView />, <Footer />]} />
                <Route exact path="/blog" element={[<BodyHead />, <LeftSidebar />, <BlogContent />, <ChatbotView />, <Footer />]} />
                <Route exact path="/forum" element={[<BodyHead />, <LeftSidebar />, <ForumContent />, <ChatbotView />, <Footer />]} />
                <Route exact path="/SignUp" element={[<BodyHead />, <LeftSidebar />, <SignUp />, <ChatbotView />, <Footer />]} />
                <Route exact path="/Login" element={[<BodyHead />, <LeftSidebar />, <Login />, <ChatbotView />, <Footer />]} />
                <Route exact path="/profile" element={[<BodyHead />, <LeftSidebar />, <Profile />, <ChatbotView />, <Footer />]} />
                <Route exact path="/search" element={[<BodyHead />, <LeftSidebar />, <ShowSearchText />, <ChatbotView />, <Footer />]} />
                <Route exact path="/termsandconditions" element={[<BodyHead />, <LeftSidebar />, <TermAndCondition />, <ChatbotView />, <Footer />]} />
                <Route exact path="/privacypolicy" element={[<BodyHead />, <LeftSidebar />, <PrivacyPolicy />, <ChatbotView />, <Footer />]} />
                <Route exact path="/search/content/:id" element={[<BodyHead />, <LeftSidebar />, <ShowSearchContent />, <ChatbotView />, <Footer />]} />
                <Route path="/ebook/view/:id" element={[<BodyHead />, <LeftSidebar />, <EbookView />, <ChatbotView />, <Footer />]} />
                <Route path="/ebook/comment/:id" element={[<BodyHead />, <LeftSidebar />, <EbookComment />, <ChatbotView />, <Footer />]} />
                <Route exact path="/forum/view/:id" element={[<BodyHead />, <LeftSidebar />, <ForumView />, <ChatbotView />, <Footer />]} />
                <Route path="/blog/:id" element={[<BodyHead />, <LeftSidebar />, <BlogInner />, <ChatbotView />, <Footer />]} />
                <Route exact path="/chatbot" element={[<BodyHead />, <LeftSidebar />, <ChatbotDummy />, <ChatbotView />, <Footer />]} />
                <Route exact path="/comment" element={[<BodyHead />, <LeftSidebar />, <AddComment />, <ChatbotView />, <Footer />]} />
                <Route path ="/ebook/pdf/:id" element={[<BodyHead />, <LeftSidebar />, <FlipBook />, <ChatbotView />, <Footer />]} />
                <Route exact path="/acts" element={[<BodyHead />, <LeftSidebar />, <Acts />, <ChatbotView />, <Footer />]} />
                <Route exact path="/circulars" element={[<BodyHead />, <LeftSidebar />, <Circulars />, <ChatbotView />, <Footer />]} />
                <Route exact path="/ordinances" element={[<BodyHead />, <LeftSidebar />, <Ordinance />, <ChatbotView />, <Footer />]} />
                <Route exact path="/presidentorders" element={[<BodyHead />, <LeftSidebar />, <PresidentOrders />, <ChatbotView />, <Footer />]} />
                <Route exact path="/rules" element={[<BodyHead />, <LeftSidebar />, <Rules />, <ChatbotView />, <Footer />]} />
                <Route exact path="/regulations" element={[<BodyHead />, <LeftSidebar />, <Regulations />, <ChatbotView />, <Footer />]} />
                <Route exact path="/policies" element={[<BodyHead />, <LeftSidebar />, <Policies />, <ChatbotView />, <Footer />]} />
                <Route exact path="/guidelines" element={[<BodyHead />, <LeftSidebar />, <Guidelines />, <ChatbotView />, <Footer />]} />
                <Route exact path="/notifications" element={[<BodyHead />, <LeftSidebar />, <Notifications />, <ChatbotView />, <Footer />]} />
                <Route exact path="/officeorders" element={[<BodyHead />, <LeftSidebar />, <OfficeOrders />, <ChatbotView />, <Footer />]} />
                <Route exact path="/mous" element={[<BodyHead />, <LeftSidebar />, <Mous />, <ChatbotView />, <Footer />]} />
                <Route exact path="/manuals" element={[<BodyHead />, <LeftSidebar />, <Manuals />, <ChatbotView />, <Footer />]} />
                <Route exact path="/gazettes" element={[<BodyHead />, <LeftSidebar />, <Gazzettes />, <ChatbotView />, <Footer />]} />
                <Route exact path="/others" element={[<BodyHead />, <LeftSidebar />, <Others />, <ChatbotView />, <Footer />]} />
                <Route exact path="/ebook/temp" element={[<BodyHead />, <LeftSidebar />, <ActInitialView />, <ChatbotView />, <Footer />]} />
                <Route exact path="/ebook/temp/view" element={[<BodyHead />, <LeftSidebar />, <ActInnerView />, <ChatbotView />, <Footer />]} />
                <Route exact path="/admin" element={<AdminLogin/>} />
                <Route path="*"
                    element={
                        <div>
                            <h2>404 Page not found</h2>
                        </div>
                    }
                />
            </Routes>
            {/* <ChatbotView />
            <Footer /> */}
        </div>
    )
}

export default Home
