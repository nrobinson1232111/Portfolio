'use client'

import { useEffect, useState } from 'react'

interface Degree{
    short_name: string,
    begin_month: string,
    end_month: string,
    degree_type: string,
    short_degree_type: string,
    degree_subject: string
}

interface Education{
    [school: string]: Degree
}

let pythonUrl: string;

export default function Education(){
    const [educationState, setEducationState] = useState<Education>({})
    if(typeof location !== 'undefined'){
        useEffect(()=>{
            if(location.protocol === "http:"){
                pythonUrl = `${location.protocol}//${location.hostname}:5000/api/python/education`
            } else{
                pythonUrl = `${location.protocol}//${location.hostname}/python/education`
            }
            fetch(pythonUrl).then(response =>{
                response.json().then((education: Education)=>{
                    setEducationState(education)
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