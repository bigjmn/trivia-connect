'use client'

import { useState } from "react"


export default function ChallengeForm() {
    const [challengeUsername, setChallengeUsername] = useState("")
    

    return (
        <div className="absolute w-full h-full top-0 left-0 bg-white bg-opacity-80 flex justify-center items-center" onClick={clickAway}>
            <div className="w-1/2 bg-white rounded-lg border">
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center items-center">
                        <input type="text" onChange={(e) => setChallengeUsername(e.target.value)} value={challengeUsername} />
                        
                    </div>
                </form>
            </div>
        </div>
    )
}