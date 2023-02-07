import React from 'react'
import BodyHead from '../Common/BodyHead';
import Footer from "../Common/Footer";
import LeftSidebar from '../Common/LeftSidebar';
import SignUp from '../Common/SignUp';

const SignUpScreen = () => {
    return (
        <div>
            <BodyHead />
            <LeftSidebar />
            <SignUp />
            <Footer />
        </div>
    )
}

export default SignUpScreen
