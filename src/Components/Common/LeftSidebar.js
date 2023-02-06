import React, { useState } from 'react';
import './LeftSidebar.css';

import { motion } from "framer-motion";
import { FaBars, FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { GoLaw } from 'react-icons/go';
import { GiClawHammer } from 'react-icons/gi';
import { MdPolicy, MdBlurCircular, MdMenuBook } from 'react-icons/md';
import { RiGuideLine } from 'react-icons/ri';
import { AiOutlineNotification } from 'react-icons/ai';
import { SiLibreoffice } from 'react-icons/si';
import { FaRegHandshake } from 'react-icons/fa';
import { TfiBookmarkAlt } from 'react-icons/tfi';
import { TbDotsCircleHorizontal } from 'react-icons/tb';
import RuleRoundedIcon from '@mui/icons-material/RuleRounded';
import HomePage from './HomePage';


const routes = [
    {
        path: "/",
        name: "আইন",
        icon: <GoLaw />,
    },
    {
        path: "/ain",
        name: "অধ্যাদেশ",
        icon: <GiClawHammer />,
    },
    {
        path: "/ain",
        name: "বিধি ও প্রবিধান",
        icon: <RuleRoundedIcon fontSize='6px' />,
    },
    {
        path: "/ain",
        name: "নীতি",
        icon: <MdPolicy />,
    },
    {
        path: "/ain",
        name: "সার্কুলার",
        icon: <MdBlurCircular />,
    },
    {
        path: "/ain",
        name: "নির্দেশিকা",
        icon: <RiGuideLine />,
    },
    {
        path: "/ain",
        name: "বিজ্ঞপ্তি",
        icon: <AiOutlineNotification />,
    },
    {
        path: "/ain",
        name: "অফিস আদেশ",
        icon: <SiLibreoffice />,
    },
    {
        path: "/ain",
        name: "সমঝোতা স্মারক",
        icon: <FaRegHandshake />,
    },
    {
        path: "/ain",
        name: "ম্যানুয়াল",
        icon: <MdMenuBook />,
    },
    {
        path: "/ain",
        name: "গেজেট",
        icon: <TfiBookmarkAlt />,
    },
    {
        path: "/ain",
        name: "অন্যান্য",
        icon: <TbDotsCircleHorizontal />,
    },

]

const LeftSidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='main_container'>
            <div>
                <motion.div animate={{ width: isOpen ? "140px" : "35px" }} className="Left_Sidebar">
                    <div className='top_section'>
                        <div className='bars'>
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    <section>
                        {routes.map((route) => (
                            <NavLink to={route.path} key={route.name} className='link_div'>
                                <div>
                                    {route.icon}
                                </div>
                                {isOpen &&
                                    <div>
                                        {route.name}
                                    </div>
                                }
                            </NavLink>
                        ))}
                    </section>
                </motion.div>
            </div>
        </div>
    )
}

export default LeftSidebar
