'use client'

import { useState, useEffect } from 'react'

interface Position{
    name: string,
    description: string,
    tools_used: string[],
    github_link: string,
    live_link: string | null
}

let projectsLink: string;

export default function Projects(){
    const [projectsState, setProjectsState] = useState<Array<Position>>([])
    if(typeof location !== "undefined"){
        useEffect(()=>{
            if(location.protocol === "http:"){
                projectsLink = `${location.protocol}//${location.hostname}:5000/api/python/projects`
            } else{
                projectsLink = `${location.protocol}//${location.hostname}/python/projects`
            }
            fetch(projectsLink).then((projectsLinkResponse: Response) => {
                projectsLinkResponse.json().then((projects: Array<Position>) => {
                    setProjectsState(projects)
                })
            })
        }, [])
    } 
    return(
        <>
            <h2>Projects</h2>
            {projectsState.map((project: Position) => {
                return(
                    <div key={project['name']}>
                        <h3 className="text-sm">{project['name']}</h3>
                        <ul className="list-disc list-inside text-xs">
                            <li>Summary: {project['description']}</li>
                            <li>Tools: {project['tools_used'].map((tool: string, index: Number) => {
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
                                {[project['live_link']].map((link: string | null) => {
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