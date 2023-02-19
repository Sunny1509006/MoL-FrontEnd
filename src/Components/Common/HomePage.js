import React, { useMemo, useState, useEffect } from 'react';
import './HomePage.css';
import MostReadBlog from './MostReadBlog';
import { Link } from 'react-router-dom';
import PageLink from './PageLink';
import axios from 'axios';

function Article_div(props) {
    const article = props.article;

    const [isReadMore, setIsReadMore] = useState(false);

    const handleClickAction = () => {
        setIsReadMore(!isReadMore);
    }

    return (
        // <div style={{ width: '50%' }}>
        <div className='box_div' style={{ textAlign: 'left' }}>
            <img src='images/blog_land.png' className='bank_logo' />
            <p className='tittle_read_blog'>{article.title}</p>
            <p className='body_read_blog'>
                {isReadMore ? article.description : article.description.substring(0, 200)}
                <button onClick={handleClickAction} className='button_style'>{isReadMore ? '...বিস্তারিত' : '...বিস্তারিত'}</button>
            </p>
        </div>
    )
}

const HomePage = () => {

    const articles = [
        {
            title: 'ব্লগ শিরোনাম এখানে 1',
            description: 'বড় বড় গ্রামীণ পরিবার বা জমির মালিকদের সম্পদ ও আয় বৃদ্ধি পাচ্ছে, নানা ধরনের কাজের সঙ্গে জড়িয়ে পড়ছেন তাঁরা। জমির ইজারা দিয়ে তাঁরা অর্থ পাচ্ছেন, তাঁরাই আবার রাইস মিল দিচ্ছেন, শহরে বাড়ি-গাড়ি কিনছেন। আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের'
        },
        {
            title: 'ব্লগ শিরোনাম এখানে 2',
            description: 'বড় বড় গ্রামীণ পরিবার বা জমির মালিকদের সম্পদ ও আয় বৃদ্ধি পাচ্ছে, নানা ধরনের কাজের সঙ্গে জড়িয়ে পড়ছেন তাঁরা। জমির ইজারা দিয়ে তাঁরা অর্থ পাচ্ছেন, তাঁরাই আবার রাইস মিল দিচ্ছেন, শহরে বাড়ি-গাড়ি কিনছেন। আরেক দিকে গ্রামীণ সমাজের'
        },
    ];
    const FilterArticles = useMemo(() => articles.filter((article, index) => index === 0), [articles]);
    return (
        <div className='Homepage_div'>
            <div>
                <PageLink />
            </div>
            <div className='container_margin' style={{ flex: 1 }}>
                <div className='container_div_header'>সর্বাধিক পঠিত ব্লগ</div>
                {/* <div className='container_div_body'> */}
                {/* <div className='blog_box'>
                        {FilterArticles.map((article, index) => {
                            return <Article_div key={index} article={article} />;
                        })}
                    </div>
                    <div className='divider_line'></div>
                    <div className='blog_box'>
                        {FilterArticles.map((article, index) => {
                            return <Article_div key={index} article={article} />;
                        })}
                    </div> */}
                <MostReadBlog />
                {/* </div> */}
            </div>
            <div className='ain_forum'>
                <div className='container_margin flex_div' style={{ flex: 1 }}>
                    <div style={{ flex: 1 }}>
                        <div className='container_div_header'>সর্বশেষ প্রকাশনা</div>
                        <div className='container_div_body'>second div</div>
                    </div>
                </div>
                <div className='container_margin flex_div' style={{ flex: 1 }}>
                    <div style={{ flex: 1 }}>
                        <div className='container_div_header'>আলোচিত ফোরাম</div>
                        <div className='container_div_body'>second div</div>
                    </div>
                </div>
            </div>
            <div className='ain_forum'>
                <div className='container_margin flex_div' style={{ flex: 1 }}>
                    <div style={{ flex: 1 }}>
                        <div className='container_div_header'>গুরুত্বপূর্ণ সেবাসমূহের লিংক</div>
                        <div className='container_div_body'>second div</div>
                    </div>
                </div>
                <div className='container_margin flex_div' style={{ flex: 1 }}>
                    <div style={{ flex: 1 }}>
                        <div className='container_div_header'>ব্যবহারকারীর ম্যানুয়াল</div>
                        <div className='container_div_body'>second div</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
