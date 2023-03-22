import React, { useState } from 'react';

function HighlightedText({ text, searchKey }) {
  const [highlightedText, setHighlightedText] = useState("");

  // // If searchKey exists in text, wrap it with <mark> tags to highlight it
  // if (searchKey && text?.toLowerCase().includes(searchKey?.toLowerCase())) {
  //   const regex = new RegExp(searchKey, 'gi');
  //   // const parts = text.split(regex);

  //   // setHighlightedText(
  //   //   parts.map((part, i) =>
  //   //     regex.test(part) ? <mark key={i}>{part}</mark> : part
  //   //   )
  //   // );
  //   const highlightedContent = highlightedText.replace(
  //     regex,
  //     `<span style='background-color: yellow;'>${searchKey}</span>`
  //   );

  //   setHighlightedText(highlightedContent);
  // }
  const parts = text.split(new RegExp(`(${searchKey})`, 'gi'));
  return <span>{parts.map(part => part.toLowerCase() === searchKey.toLowerCase() ? <b style={{backgroundColor: 'yellow'}}>{part}</b> : part)}</span>;

  // return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
}

export default HighlightedText;
