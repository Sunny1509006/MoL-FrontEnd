import React, { useState, useEffect, useRef } from 'react'
import './Conversation.css'
import axios from '../axios/axios'
import { BsMicFill, BsMicMuteFill } from 'react-icons/bs'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import ScrollToBottom from 'react-scroll-to-bottom';
import { Button } from 'react-bootstrap';

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

    const [audioSrc, setAudioSrc] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef(null);

    const messagesEndRef = useRef(null);

    const handleQuestion = (e) => {
        setQuestion(e.target.value)
    }

    useEffect(() => {
        if (answer.length > 0) {
            const lastAnswer = answer[answer.length - 1];
            console.log(lastAnswer)
            if (lastAnswer.author === "user") {
                axios.post("/api/v1/response/",
                    lastAnswer.content,
                    {

                        "headers": {

                            "content-type": "application/json",
                            // 'Access-Control-Allow-Origin': '*',
                            // 'Access-Control-Allow-Credentials': 'true',


                        },


                    })
                    .then(result => {
                        // console.log(result.data.response)
                        setAnswer([...answer, { author: 'bot', content: result.data.response }]);
                        handleFetchAudio(result.data.response)

                    })
                    .catch(error => {
                        alert("error")
                    });

            }
        }
    }, [answer]);

    const handleFetchAudio = async (data) => {
        try {
            const response = await axios.post("/api/v1/tts/",
                data,
                {
                    responseType: "blob",
                },
                {

                    "headers": {

                        "content-type": "application/json",
                        // 'Access-Control-Allow-Origin': '*',
                        // 'Access-Control-Allow-Credentials': 'true',

                    },
                }
            );
            const blob = new Blob([response.data], { type: "audio/mpeg" });
            setAudioSrc(URL.createObjectURL(blob));
            // setIsPlaying(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePlayPause = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

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

    const handleSpeakClick = () => {
        const utterance = new SpeechSynthesisUtterance("আমি ");
        utterance.lang = 'bn-BD';
        window.speechSynthesis.speak(utterance);
    };

    const [text, setText] = useState("");

    //   const handleTextChange = (event) => {
    //     setText(answer.content);
    //   };


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
                                {Array.isArray(answer.content) ?
                                    <>
                                        {(answer.content).map((item, index) => (

                                            <div style={{ paddingBottom: '4px' }} key={index}>{item}<br /></div>
                                        ))}
                                    </>
                                    :
                                    <>
                                        {answer.content}
                                    </>
                                }

                            </div>
                            :
                            <div className='right'>
                                {answer.content}
                            </div>
                        }
                    </div>
                ))}
                {/* <Button type="button" onClick={handleSpeakClick}>Speak</Button> */}
                {audioSrc && (
                    <div style={{
                        marginLeft: '77%',
                        marginTop: '-50px',

                    }}>
                        <audio src={audioSrc} ref={audioRef} />
                        <Button onClick={handlePlayPause} style={{
                            background: 'white',
                        }}>
                            {isPlaying ?
                                <AiFillPauseCircle fontSize={24} style={{
                                    color: 'blue',
                                }} />
                                :
                                <AiFillPlayCircle fontSize={24} style={{
                                    color: 'blue',
                                }} />}
                        </Button>
                    </div>
                )}
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
