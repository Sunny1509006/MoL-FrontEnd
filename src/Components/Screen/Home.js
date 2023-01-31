import React, { useState } from "react";
import BodyHead from "../Common/BodyHead";
import Header from "../Common/Header";
import UserSidebar from "../Common/UserSidebar";
import LeftSidebar from "../Common/LeftSidebar";
import HomePage from "../Common/HomePage";

import './Home.css';
import Footer from "../Common/Footer";

function Home() {
    return (
        <div>
            <BodyHead />
            <LeftSidebar />
            <HomePage />
            <Footer />
        </div>
    )
}

export default Home
