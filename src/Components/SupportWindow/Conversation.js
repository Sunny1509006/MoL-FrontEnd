import React, { useState, useEffect, useRef } from 'react'
import './Conversation.css'
import axios from '../axios/axios'
import { BsMicFill, BsMicMuteFill } from 'react-icons/bs'
import ScrollToBottom from 'react-scroll-to-bottom';

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new speechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = "bn-BD"


const Conversation = () => {

    const [isListening, setIsListening] = useState(true)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])

    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState([])

    const messagesEndRef = useRef(null);

    const handleQuestion = (e) => {
        setQuestion(e.target.value)
    }

    useEffect(() => {
        if (answer.length > 0) {
            const lastAnswer = answer[answer.length - 1];
            console.log(lastAnswer)
            if (lastAnswer.author === "user") {
                axios.post("http://143.110.241.20:5050/api/response/",
                    lastAnswer.content,
                    {

                        "headers": {

                            "content-type": "application/json",

                        },


                    })
                    .then(result => {
                        // console.log(result.data.response)
                        setAnswer([...answer, { author: 'bot', content: result.data.response }]);

                    })
                    .catch(error => {
                        alert("error")
                    });

            }
        }
    }, [answer]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (question.trim() !== "") {
            setAnswer([...answer, { author: "user", content: question }]);
            setQuestion("");
        }
    };


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
            // console.log(transcript)
            setQuestion(transcript)
            mic.onerror = event => {
                // console.log(event.error)
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
            <ScrollToBottom className='conversation_chat_div' >

                {answer.map((answer, index) => (
                    <div key={index}>
                        {(answer.author === "bot") ?
                            <div className='left' >
                                {answer.content}
                            </div>
                            :
                            <div className='right'>
                                {answer.content}
                            </div>
                        }
                    </div>
                ))}

            </ScrollToBottom>
            <form onSubmit={handleSubmit}>

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
                            <BsMicMuteFill fontSize={18} style={{ color: 'blue' }} />
                            :
                            <BsMicFill fontSize={18} style={{ color: 'blue' }} />

                        }
                    </button>
                    <input type="text" className='msg_send' placeholder="এখানে লিখুন" name="msg"
                        value={question}
                        onChange={handleQuestion}
                    />
                    <button type="button" className="send" id="reply"
                        onClick={handleSubmit}
                    >পাঠান <i className="fas fa-paper-plane"></i></button>
                </div>
            </form>
        </div>
    )
}

export default Conversation
