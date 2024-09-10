'use client'

import { useEffect, useState } from 'react'



export default function Education(){
    const [educationState, setEducationState]: [object, Function] = useState([])
    if(typeof location !== 'undefined'){
        useEffect(()=>{
            const pythonUrl: string = `${location.protocol}//${location.hostname}:5000`
            fetch(`${pythonUrl}/api/python/education`).then(response =>{
                response.json().then((skill_array: Array<string>)=>{
                    setEducationState(skill_array)
                })
            })
        }, [])
    }
    return(
        <>
            <h2>Education</h2>
            <ul className="text-xs">
                {Array.from(Object.keys(educationState)).map(degree => {
                    return(<li key={degree}>{educationState[degree]["short_degree_type"]}: {educationState[degree]["degree_subject"]} | {educationState[degree]["short_name"]} | {educationState[degree]["begin_month"]} - {educationState[degree]["end_month"]} </li>)
                })}
            </ul>
        </>)
}