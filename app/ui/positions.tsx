'use client'

import { useState, useEffect } from "react"

interface Position{
    position: string,
    company: string,
    begin_month: string,
    end_month: string | null,
    description: string[]
}

export default function Positions(){
    const [positionState, setPositionState] = useState<Array<Position>>([])
    if(typeof location !== "undefined"){
        useEffect(()=>{
            const pythonUrl = `${location.protocol}//${location.hostname}:5000/api/python/positions`
            fetch(pythonUrl).then(positionsResponse=>{
                positionsResponse.json().then((positions: Array<Position>)=>{
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
                positionState.map((position: Position, index: Number) => {
                    return(
                        <div key={position['position']} className="mb-2 text-sm">
                            <h3>{position['position']} | {position['company']} | {position['begin_month']} - {position['end_month']}</h3>
                            <ul className="list-disc list-inside text-xs">
                                {position['description'].map((description: string) => {
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