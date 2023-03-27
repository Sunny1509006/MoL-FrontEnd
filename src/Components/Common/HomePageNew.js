import React, { useState, useEffect } from 'react'
import useAuth from '../../hooks/authHooks'
import "./HomePageNew.css"
import { Helmet } from 'react-helmet'
import SearchText from "./SearchText"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import SupportWindow from '../SupportWindow/SupportWindow'

const boxVariants = {
    hidden: {
        opacity: 0,
        x: -50,
        transition: {
            x: { duration: 0.5 }
        },
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            x: { duration: 0.5 }
        }
    }
};

const HomePageNew = () => {
    const { marginDiv, visible, setVisible } = useAuth()
    const [isVisible, setIsVisible] = useState(true);
    const [boxes, setBoxes] = useState([]);
    const [showFruits, setShowFruits] = useState(true);
    
    useEffect(() => {
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
                setShowFruits(!showFruits);
                setIsVisible(true);
            }, 1000);
        }, 5000);
    }, [showFruits]);

    function getNewBoxes() {
        const newBoxes = [];
        const fruits = ['আইন', 'অধ্যাদেশ', 'রাষ্ট্রপতির আদেশ', 'বিধিমালা', 'প্রবিধান'];
        const flowers = ['নীতিমালা', 'নির্দেশিকা', 'পরিপত্র', 'প্রজ্ঞাপন', 'অফিস আদেশ'];
        const linkFruits = ["/acts", "/ordinances", "/presidentorders","/rules", "regulations"];
        const linkFlowers = ["/policies", "/guidelines", "/circulars", "/notifications", "/officeorders"];

        const itemsToShow = showFruits ? fruits : flowers;

        for (let i = 1; i <= 5; i++) {
            newBoxes.push(
                <motion.div
                    key={`fruit-${i}`}
                    variants={boxVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    style={{ display: showFruits ? 'block' : 'none' }}
                    whileHover={{scale: 1.2}}
                >
                    <div style={{ width: 120, margin: 10 }} className="HomePageNewCategory">
                        <Link to={linkFruits[i-1]}>{itemsToShow[i - 1]}</Link>
                    </div>
                </motion.div>
            );
        }

        for (let i = 1; i <= 5; i++) {
            newBoxes.push(
                <motion.div
                    key={`flower-${i}`}
                    variants={boxVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    style={{ display: showFruits ? 'none' : 'block' }}
                    whileHover={{scale: 1.2}}
                >
                    <div style={{ width: 120, margin: 10 }} className="HomePageNewCategory">
                    <Link to={linkFlowers[i-1]}>{itemsToShow[i - 1]}</Link>
                    </div>
                </motion.div>
            );
        }

        return newBoxes;
    }

    useEffect(() => {
        setBoxes(getNewBoxes());
      }, [showFruits, isVisible]);

    return (
        <div className='HomePageNewMain' 
        style={{ marginLeft: marginDiv ? '140px' : '37px', transition: '.5s' }}
        onClick={() => {visible && setVisible(!visible)}}
        >
            <Helmet>
                <title>হোম</title>
            </Helmet>
            <div className='HomePageNewSearchDiv'>
                <div>
                    <h2>ভূমি সংক্রান্ত যাবতীয় তথ্য এখন আপনার সন্নিকটে</h2>
                </div>
                <div>
                    <SearchText />
                </div>
                <div style={{ display: 'flex', marginTop: '10px' }}>
                    {boxes}
                </div>
            </div>
            <div className='HomePageNewChatBot'>
                <motion.div className='HomePageNewImg'
                    // animate={{scale: 2}}
                    whileHover={{ scale: 1.1 }}
                // transition={{delay: .1}}
                >
                    <Link><img src="/images/chatbot_home.png" className='HomePageNewImgSecond' onClick={()=> setVisible(!visible)}/></Link>
                </motion.div>
                <motion.div className='HomePageNewImg'
                    whileHover={{ scale: 1.1 }}
                >
                    <Link to="/ebook"><img src="/images/ebook_home.png" className='HomePageNewImgSecond' /></Link>
                </motion.div>
            </div>
            <SupportWindow visible={visible} />
        </div>
    )
}

export default HomePageNew
