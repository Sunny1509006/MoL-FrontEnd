import React from 'react'
import './ActInput.css'
import AddSomething from './AddSomething'
import { useState, useEffect } from 'react'
import axios from '../axios/axios'
import { Link, useNavigate } from 'react-router-dom';

const ActInput = () => {
    const [actList, setActList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const loadActList = async () => {
            const response = await axios.get(
                "/api/acts/"
            );
            setActList(response.data);
            // setTotal(response.data.length);
        };

        loadActList();
    }, []);

    const handleNavigate = () => {
        navigate('/createact')
    }

    return (
        <div className='ActInputMain'>
            <div className='ActInputInner'>
                {actList && (
                    <div className='ActInputEach'>
                        <div style={{ width: '150px', cursor: 'pointer'}} onClick={handleNavigate}>
                            <AddSomething addText={"Add Act"} />
                        </div>
                        <table>
                            <tr>
                                <th>Index</th>
                                <th>Title</th>
                                <th>Act year</th>
                                <th>Act number</th>
                                <th>Published Date</th>
                            </tr>
                            {actList.map((eachAct, index) => (
                                <tr key={index} >

                                    <td>{index + 1}</td>
                                    <td><Link to="/createsection">{eachAct.title_of_act}</Link></td>
                                    <td>{eachAct.act_year}</td>
                                    <td>{eachAct.number}</td>
                                    <td>{eachAct.publication_date}</td>
                                </tr>

                            ))}
                        </table>

                    </div>
                )}

                {!actList && (
                    <div onClick={handleNavigate} style={{cursor: 'pointer'}}>
                    <AddSomething addText={"Add Act"} />
                    </div>
                )}

            </div>
        </div>
    )
}

export default ActInput
