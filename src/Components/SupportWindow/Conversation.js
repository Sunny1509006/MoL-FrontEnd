import React, { useState, useEffect } from 'react'
import './Conversation.css'
import axios from '../axios/axios'
import { BsMicFill, BsMicMuteFill } from 'react-icons/bs'

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new speechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = "bn-BD"

const Conversation = () => {

    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])

    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")

    const handleQuestion = (e) => {
        setQuestion(e.target.value)
    }

    const handleAnswer = (e) => {
        setAnswer(e.target.value)
    }


    const handleApi = () => {
        // console.log(question)
        axios.post("http://143.110.241.20:5050/api/response/",
            question,
            {

                "headers": {

                    "content-type": "application/json",

                },


            })
            .then(result => {
                console.log(result.data)
                setAnswer(result.data.response)
            })
            .catch(error => {
                console.log(error)
                alert("error")
            })
    }

    // const getData = () => {
    //     handleQuestion,
    //     handleApi
    // }
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
            setQuestion(transcript)
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }

    const handleSaveNote = () => {
        setSavedNotes([...savedNotes, note])
        setNote('')
    }


    return (
        <div className='ConversationMainDiv'>
            <div style={{
                height: '35px',
                width: '100%',
                backgroundColor: '#0C6395',
            }}>
                <p style={{
                    color: 'white',
                    padding: '3px 10px'
                }}>ভূমিবিদ</p>
            </div>
            <div className='conversation_chat_div'>
                <div className='right'>
                    {question}
                </div>
                <div className='left'>
                    {answer}
                </div>
            </div>
            <form>
                {/* <input></input> */}

                <div className="conversation_input">
                    <button type="button"
                        onClick={() => setIsListening(prevState => !prevState)}
                        style={{
                            marginTop: '2px',
                            marginLeft: '10px',
                            position: 'fixed',
                            border: 'none',

                        }}>
                        {isListening ?
                            <BsMicFill fontSize={18} style={{ color: 'blue' }} />
                            :
                            <BsMicMuteFill fontSize={18} style={{ color: 'blue' }} />

                        }
                    </button>
                    <input type="text" className='msg_send' placeholder="এখানে লিখুন" name="msg"
                        value={question}
                        onChange={handleQuestion}
                    />
                    <button type="button" className="send" id="reply"
                        onClick={handleApi}
                    >পাঠান <i className="fas fa-paper-plane"></i></button>
                </div>
            </form>
        </div>
    )
}

export default Conversation
