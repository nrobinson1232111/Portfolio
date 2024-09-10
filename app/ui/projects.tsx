'use client'

import { useState, useEffect } from 'react'

export default function Projects(){
    const [projectsState, setProjectsState]: [Array<Object>, Function] = useState([])
    if(typeof location !== "undefined"){
        useEffect(()=>{
            const projectsLink = `${location.protocol}//${location.hostname}:5000/api/python/projects`
            fetch(projectsLink).then((projectsLinkResponse: Response) => {
                projectsLinkResponse.json().then((projects: Array<Object>) => {
                    setProjectsState(projects)
                })
            })
        }, [])
    } 
    return(
        <>
            <h2>Projects</h2>
            {projectsState.map((project: Object) => {
                return(
                    <div key={project['name']}>
                        <h3 className="text-sm">{project['name']}</h3>
                        <ul className="list-disc list-inside text-xs">
                            <li>Summary: {project['description']}</li>
                            <li>Tools: {project['tools_used'].map((tool: String, index: Number) => {
                                if(index !== project['tools_used'].length - 1){
                                    return(<span key={tool}>{tool}<span className="mx-1">|</span></span>)
                                } else{
                                    return(<span key={tool}>{tool}</span>)
                                }
                            })}</li>
                            <li>
                                <a href={project['github_link']}>
                                    Github Link
                                </a> 
                                {[project['live_link']].map((link: String | null) => {
                                    if(link){
                                        return(<span key={link}> | <a href={link}>Live Link</a></span>)
                                    }
                                })}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </>
    )
}