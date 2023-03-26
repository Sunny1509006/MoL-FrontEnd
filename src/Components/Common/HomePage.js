import React, { useEffect, useState } from 'react';
import './HomePage.css';
import MostReadBlog from './MostReadBlog';
import PageLink from './PageLink';
import LatestPublication from './LatestPublication';
import ImportantServices from './ImportantServices';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/authHooks';
import MostDiscussedForum from './MostDiscussedForum';

// function Article_div(props) {
//     const article = props.article;

//     const [isReadMore, setIsReadMore] = useState(false);

//     const handleClickAction = () => {
//         setIsReadMore(!isReadMore);
//     }

//     return (
//         // <div style={{ width: '50%' }}>
//         <div className='box_div' style={{ textAlign: 'left' }}>
//             <img src='images/blog_land.png' className='bank_logo' />
//             <p className='tittle_read_blog'>{article.title}</p>
//             <p className='body_read_blog'>
//                 {isReadMore ? article.description : article.description.substring(0, 200)}
//                 <button onClick={handleClickAction} className='button_style'>{isReadMore ? '...বিস্তারিত' : '...বিস্তারিত'}</button>
//             </p>
//         </div>
//     )
// }

const HomePage = (props) => {

    // const articles = [
    //     {
    //         title: 'ব্লগ শিরোনাম এখানে 1',
    //         description: 'বড় বড় গ্রামীণ পরিবার বা জমির মালিকদের সম্পদ ও আয় বৃদ্ধি পাচ্ছে, নানা ধরনের কাজের সঙ্গে জড়িয়ে পড়ছেন তাঁরা। জমির ইজারা দিয়ে তাঁরা অর্থ পাচ্ছেন, তাঁরাই আবার রাইস মিল দিচ্ছেন, শহরে বাড়ি-গাড়ি কিনছেন। আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের আরেক দিকে গ্রামীণ সমাজের'
    //     },
    //     {
    //         title: 'ব্লগ শিরোনাম এখানে 2',
    //         description: 'বড় বড় গ্রামীণ পরিবার বা জমির মালিকদের সম্পদ ও আয় বৃদ্ধি পাচ্ছে, নানা ধরনের কাজের সঙ্গে জড়িয়ে পড়ছেন তাঁরা। জমির ইজারা দিয়ে তাঁরা অর্থ পাচ্ছেন, তাঁরাই আবার রাইস মিল দিচ্ছেন, শহরে বাড়ি-গাড়ি কিনছেন। আরেক দিকে গ্রামীণ সমাজের'
    //     },
    // ];
    // const FilterArticles = useMemo(() => articles.filter((article, index) => index === 0), [articles]);
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (localStorage.getItem('access')) {
    //         navigate('/')
    //     }
    // }, [])
    const { marginDiv } = useAuth()

    return (
        <div className='Homepage_div' style={{ marginLeft: marginDiv ? '140px' : '37px' }}>
            <Helmet>
                <title>নাগরিক কর্নার</title>
            </Helmet>
            <div>
                <PageLink />
            </div>
            <div className='container_margin' style={{ flex: 1 }}>
                <div className='container_div_header'><b>সর্বাধিক পঠিত</b></div>
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
                <div className='container_margin flex_div' style={{ flex: 1, height: '100%' }}>
                    <div style={{ flex: 1 }}>
                        <div className='container_div_header'><b>সর্বশেষ প্রকাশনা</b></div>
                        <div className='container_div_body'>
                            <LatestPublication />
                        </div>
                    </div>
                </div>
                <div className='container_margin flex_div' style={{ flex: 1, height: '100%' }}>
                    <div style={{ flex: 1 }}>
                        <div className='container_div_header'><b>আলোচিত ফোরাম</b></div>
                        <div className='container_div_body'>
                            {/* <img src="/images/alochitoforum.png" style={{
                                height: '380px',
                                width: '100%',
                            }}/> */}
                            <MostDiscussedForum />
                        </div>
                    </div>
                </div>
            </div>
            <div className='ain_forum'>
                <div className='container_margin flex_div' style={{ flex: 1, height: '100%' }}>
                    <div style={{ flex: 1 }}>
                        <div className='container_div_header'><b>গুরুত্বপূর্ণ সেবাসমূহ</b></div>
                        <div className='container_div_body'>
                            <ImportantServices />
                        </div>
                    </div>
                </div>
                <div className='container_margin flex_div' style={{ flex: 1, height: '100%' }}>
                    <div style={{ flex: 1 }}>
                        <div className='container_div_header'><b>সেবাসমূহ ব্যবহারের নির্দেশিকা</b></div>
                        <div className='container_div_body'>
                            <img src="/images/seba.png" style={{
                                height: '360px',
                                width: '100%',
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
