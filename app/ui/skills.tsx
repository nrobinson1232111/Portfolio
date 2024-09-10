'use client'

import { useEffect, useState } from 'react'

export default function Skills(){
    const [skillState, setSkillState]: [Array<string>, Function] = useState([])
    if(typeof location !== 'undefined'){
        useEffect(()=>{
            const pythonUrl: string = `${location.protocol}//${location.hostname}:5000`
            fetch(`${pythonUrl}/api/python/skills`).then(response =>{
                response.json().then((skill_array: Array<string>)=>{
                    setSkillState(skill_array)
                })
            })
        }, [])
    }
    return(
        <div>
            <h2>Skills</h2>
            <ul className="text-xs">
                {
                    skillState.map((skill, index) => {
                        if(index !== skillState.length - 1){
                            return(<li key={skill} className="inline-block">{skill}<span className="mx-1">|</span></li>)
                        } else{
                            return(<li key={skill} className="inline-block">{skill}</li>)
                        }
                    }) 
                }
            </ul>
        </div>
    )
}