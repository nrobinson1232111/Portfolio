'use client'

import { useEffect, useState } from "react"

interface Certification{
    name: string,
    organization: string,
    expiration_date: string | null,
    link: string
}

export default function Certifications(){
    const [certificationsState, setCertificationsState] = useState<Array<Certification>>([])
    if(typeof location !== 'undefined'){
        useEffect(()=>{
            const pythonUrl: string = `${location.protocol}//${location.hostname}:5000/api/python/certifications`
            fetch(pythonUrl).then(response =>{
                response.json().then((certifications_array: Array<Certification>)=>{
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