'use client'

import { useEffect, useState } from 'react'

type Skill = string[]

export default function Skills(){
    const [skillState, setSkillState]: [Skill, Function] = useState([])
    if(typeof location !== 'undefined'){
        useEffect(()=>{
            const pythonUrl: string = `${location.protocol}//${location.hostname}:5000/api/python/skills`
            fetch(pythonUrl).then(response =>{
                response.json().then((skill_array: Skill)=>{
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