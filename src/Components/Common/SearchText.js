import React, { useState } from 'react';
import './SearchText.css';

const SearchText = () => {
    const [query, setQuery] = useState("");

    const search = (data) => {
        return data.filter(
            (item) =>
                item.tag.toLowerCase().includes(query) ||
                item.patterns.includes(query)
        );
    };

    // console.log(Users.filter(user=>user.tag.toLowerCase().includes("fe")))
    return (
        <div>
            <input
                type='text'
                placeholder='অনুসন্ধান করুন'
                className='SearchText'
                onChange={(e) => setQuery(e.target.value)} />
            {/* <PageLink data={search(Users)} /> */}
        </div>
    )
}

export default SearchText
