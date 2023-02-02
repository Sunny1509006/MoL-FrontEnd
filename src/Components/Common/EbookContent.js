import React, {useMemo} from 'react';
import './EbookContent.css';
import PageLink from './PageLink';


function BookList_div(props) {
    const book = props.book
    return (
        <div className='book_content'>
            <img src={book.image} className='book_cover'/>
            <p>{book.title.substring(0, 50)}</p>
        </div>
    )
}

const EbookContent = () => {
    const books = [
        {
            title: 'ব্লগ শিরোনাম এখানে ব্লগ শিরোনাম এখানে ব্লগ শিরোনাম এখানে 1',
            image: 'images/gadget.png'
        },
        {
            title: 'ব্লগ শিরোনাম এখানে 2',
            image: 'images/gadget.png'
        },
        {
            title: 'ব্লগ শিরোনাম এখানে 3',
            image: 'images/gadget.png'
        },
        {
            title: 'ব্লগ শিরোনাম এখানে 4',
            image: 'images/gadget.png'
        },
        {
            title: 'ব্লগ শিরোনাম এখানে 5',
            image: 'images/gadget.png'
        },
        {
            title: 'ব্লগ শিরোনাম এখানে 6',
            image: 'images/gadget.png'
        },
        {
            title: 'ব্লগ শিরোনাম এখানে 4',
            image: 'images/gadget.png'
        },
        {
            title: 'ব্লগ শিরোনাম এখানে 5',
            image: 'images/gadget.png'
        },
        {
            title: 'ব্লগ শিরোনাম এখানে 6',
            image: 'images/gadget.png'
        },
        {
            title: 'ব্লগ শিরোনাম এখানে 4',
            image: 'images/gadget.png'
        },
        {
            title: 'ব্লগ শিরোনাম এখানে 5',
            image: 'images/gadget.png'
        },

    ];
    const FilterBooks = useMemo(() => books.filter((book, index) => index >= 0 ), [books]);
    return (
        <div className='ebook_content_main'>
            <div>
                <PageLink />
            </div>
            <div className='book_div_header' >ই-বুক</div>
            <div className='book_div'>
                {FilterBooks.map((book, index) => {
                    return <BookList_div key={index} book={book} />;
                })}
            </div>

        </div>
    )
}

export default EbookContent
