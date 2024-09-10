'use client'

import { useEffect, useState } from "react"

export default function Certifications(){
    const [certificationsState, setCertificationsState]: [Array<string>, Function] = useState([])
    if(typeof location !== 'undefined'){
        useEffect(()=>{
            const pythonUrl: string = `${location.protocol}//${location.hostname}:5000`
            fetch(`${pythonUrl}/api/python/certifications`).then(response =>{
                response.json().then((certifications_array: Array<string>)=>{
                    setCertificationsState(certifications_array)
                })
            })
        }, [])
    }
    return(
        <>
            <h2>Certifications</h2>
            <ul className="text-xs">
                {certificationsState.map(certification=>{
                    if(certification['expiration_date']){
                        return(<li key={certification['name']}><a href={certification['link']}>{certification['organization']}: {certification['name']} | Expires: {certification['expiration_date']}</a></li>)
                    } else{
                        return(<li key={certification['name']}><a href={certification['link']}>{certification['organization']}: {certification['name']} | Expires: Never</a></li>)
                    }
                })}
            </ul>
        </>
    )
}