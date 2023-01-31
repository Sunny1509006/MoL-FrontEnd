import React, { useMemo }  from 'react';
import './MostReadBlog.css';
import { useState } from 'react';



function Article_div(props) {
    const article = props.article;

    const [isReadMore, setIsReadMore] = useState(false);

    const handleClickAction = () => {
        setIsReadMore(!isReadMore);
    }

    return (
        // <div style={{ width: '50%' }}>
        <div className='col-md-6 col-sm-12 box_div' style={{ textAlign: 'left' }}>
            <img src='images/blog_land.png' className='bank_logo' />
            <p className='tittle_read_blog'>{article.title}</p>
            <p className='body_read_blog'>
                {isReadMore ? article.description : article.description.substring(0, 200)}
                <button onClick={handleClickAction} className='button_style'>{isReadMore ? '...বিস্তারিত' : '...বিস্তারিত'}</button>
            </p>
        </div>
    )
}

const MostReadBlog = () => {
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
    const FilterArticles = useMemo(() => articles.filter((article, index) => (index >= 0 & index <= 1)), [articles]);
    return (
        <div>
            <div className='main_bar row'>
                {FilterArticles.map((article, index) => {
                    return <Article_div key={index} article={article} />;
                })}
            </div>
        </div>
    )
}

export default MostReadBlog
