import React, { useState, useEffect } from 'react';
import './SearchText.css';
import { BsMicFill, BsMicMuteFill } from 'react-icons/bs'

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new speechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = "bn-BD"


const SearchText = () => {
    const [query, setQuery] = useState("");

    const [isListening, setIsListening] = useState(true)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])
  
    useEffect(() => {
      handleListen()
  
  }, [isListening])
  
  const handleListen = () => {
      if (!isListening) {
          mic.start()
          mic.onend = () => {
              console.log('continue')
              mic.start()
          }
      }
      else {
          mic.stop()
          mic.onend = () => {
              console.log('stopped mic onclick')
          }
      }
      mic.onstart = () => {
          console.log('mics on')
      }
  
      mic.onresult = event => {
          const transcript = Array.from(event.results)
              .map(result => result[0])
              .map(result => result.transcript)
              .join('')
          setNote(transcript)
          console.log(transcript)
          setQuery(transcript)
          mic.onerror = event => {
              console.log(event.error)
          }
      }
  }
  
  const handleSaveNote = () => {
      setSavedNotes([...savedNotes, note])
      setNote('')
  }

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
            <button type="button"
                onClick={() => setIsListening(prevState => !prevState)}
                style={{
                    marginTop: '2px',
                    marginLeft: '10px',
                    position: 'fixed',
                    border: 'none',
                    backgroundColor: 'white',

                }}>
                {isListening ?
                    <BsMicMuteFill fontSize={18} style={{ color: 'blue' }} />
                    :
                    <BsMicFill fontSize={18} style={{ color: 'blue' }} />

                }
            </button>
            <input style={{
                padding: '10px 40px',
                fontFamily: 'Kalpurush',
            }}
                type='text'
                placeholder='অনুসন্ধান করুন'
                className='SearchText'
                value={query}
                onChange={(e) => setQuery(e.target.value)} />
            {/* <PageLink data={search(Users)} /> */}
        </div>
    )
}

export default SearchText
