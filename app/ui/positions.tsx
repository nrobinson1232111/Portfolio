'use client'

import { useState, useEffect } from "react"

export default function Positions(){
    const [positionState, setPositionState]: [Array<object>, Function] = useState([])
    if(typeof location !== "undefined"){
        useEffect(()=>{
            const pythonUrl = `${location.protocol}//${location.hostname}:5000/api/python/positions`
            fetch(pythonUrl).then(positionsResponse=>{
                positionsResponse.json().then((positions: Array<object>)=>{
                    setPositionState(positions)
                })
            })
        }
        , [])
    }
    return(
        <>
            <h2>Positions</h2>
            {
                positionState.map((position: Object) => {
                    return(
                        <div key={position['position']} className="mb-2 text-sm">
                            <h3>{position['position']} | {position['company']} | {position['begin_month']} - {position['end_month']}</h3>
                            <ul className="list-disc list-inside text-xs">
                                {position['description'].map((description: String) => {
                                    return(<li key={description}>{description}</li>)
                                })}
                            </ul>
                        </div>
                    )}
                )
            }
        </>
    )
}