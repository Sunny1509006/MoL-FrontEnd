import React, { useState, useEffect } from 'react'
import "./ActInnerView.css"
import useAuth from '../../../hooks/authHooks'
import { Helmet } from 'react-helmet'
import axios from '../../axios/axios'
import EachSectionSingle from './EachSectionSingle'
import Repealed from './Repealed'


const ActInnerView = () => {
    const { marginDiv } = useAuth()

    const [post, setPost] = useState({});
    const [oiginalActData, setOriginalActData] = useState({})

    const [liveActData, setLiveActData] = useState([]);
    
    const handleActData = (actData) => {
        setPost(actData)
    }
    console.log(post)

    useEffect(() => {
        axios.post(
            `/api/getliveact/`, {
            act_id: 16
        }
        )
            .then(res => {
                // console.log(res.data.live_data)
                setLiveActData(res.data.live_data)
                // setCheck(res.data.Act[0]["section"])
            })
            .catch(err => {
                console.log(err)
            })

    }, []);


    useEffect(() => {
        axios.post(
            `/api/actsDetail/`, {
            id: 16
        }
        )
            .then(res => {
                // console.log(res.data.Act[0])
                setPost(res.data.Act[0])
                setOriginalActData(res.data.Act[0])
                // setCheck(res.data.Act[0]["section"])
            })
            .catch(err => {
                console.log(err)
            })

    }, []);

    // const yourArray = Object.values(post.section);
    // console.log(typeof(post.section))
    // console.log(typeof(yourArray))
    // console.log(yourArray)

    return (
        <div className='ActInner_main' style={{ marginLeft: marginDiv ? '155px' : '50px', transition: '.5s' }}>
            <Helmet>
                <title>বিস্তারিত ই-বুক</title>
            </Helmet>
            <div className='ActInner_top'>
                <h3><b>{post.title_of_act}</b></h3>
                <h4>( {post.act_year} সনের {post.number} নং আইন )</h4>
                <div className='ActInner_top_inside'>
                    <h5>[ ১১ এপ্রিল, ২০০১ ]</h5>
                </div>
                {liveActData && (
                    <div className='ActInner_top_inside2'>
                        <div style={{
                            height: '100%',
                            background: '#42adff',
                            padding: '0px 10px',
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }}
                        onClick={()=>handleActData(oiginalActData)}
                        >Original Act</div>
                        <div style={{
                            height: '100%',
                            background: '#42adff',
                            padding: '0px 10px',
                            color: 'white',
                            fontWeight: 'bold',
                        }}>Live: </div>
                        {liveActData.map((eachLiveActData, index) => (
                            <h5 
                            key={index} 
                            onClick={()=>handleActData(eachLiveActData.json_data__Act[0])}
                            style={{
                                cursor: 'pointer'
                            }}
                            >{eachLiveActData.year}</h5>
                        ))}

                    </div>
                )}


            </div>
            <div className='ActInner_middle'>
                <div dangerouslySetInnerHTML={{ __html: post.proposal }} style={{
                    fontWeight: 'bold',
                }} />
                <br />
                <div dangerouslySetInnerHTML={{ __html: post.objective }} />
            </div>
            <div className='ActInner_middle_two'>
                <h3><b>সূচি</b></h3>
            </div>
            <div className='ActInner_middle_three'>
                <h3><b>ধারাসমূহ</b></h3>
            </div>
            <div className='ActInner_last'>
                {post.section && (Object.values(post.section)).map((eachSection, index) => (
                    <>

                        <div key={index} className='ActInner_last_each'
                            // onClick={handleOpenSection}
                            style={index % 2 === 0 ? {
                                background: 'none',
                                cursor: 'pointer',
                            } :
                                {
                                    background: '#f9f9f9',
                                    cursor: 'pointer',
                                }}>
                            <EachSectionSingle key={index}
                                heading={eachSection.heading}
                                content={eachSection.content ? eachSection.content : ''}
                                number={eachSection.number}
                                live={eachSection.live}
                                repealed={eachSection.repealed}
                                amendment_from={eachSection.amendment_from}
                                amendment_to={eachSection.amendment_to}
                                repealed_data={eachSection.repealed_data}
                                subSection={eachSection.sub_section ? eachSection.sub_section
                                    :
                                    ''}
                                amendment_from_data={eachSection.amendment_from_data ? eachSection.amendment_from_data : ''}
                                amendment_to_data={eachSection.amendment_to_data ? eachSection.amendment_to_data : ''}
                            />

                        </div>


                    </>

                ))}

            </div>
        </div>
    )
}

export default ActInnerView
