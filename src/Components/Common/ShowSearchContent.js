import React from 'react'
import useAuth from '../../hooks/authHooks';
import HighlightedText from "./HighlightedText"

const ShowSearchContent = () => {
    const { searchData, marginDiv, query } = useAuth();
    // console.log(typeof(JSON.stringify(content)));
  return (
    <div>
        {searchData.map((result)=> (
            <div key={result.id}>
            <HighlightedText text={JSON.stringify(result.content)} searchKey={query} />
            </div>
        ))}
      
    </div>
  )
}

export default ShowSearchContent
