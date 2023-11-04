import { useState } from 'react'
import { useAuth } from './useAuth'
export const useChallenge = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    
    const { user } = useAuth()

    const challengeUser = async (username, colorOwed=null) => {
        setError(null)
        setIsSuccess(false)
        setIsPending(true)

        try {
            const res = await fetch('/challenge', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({challengedUser: username, challengerId: user.uid, challengerColor: colorOwed})
            })
            // get response object 
            const resOb = await res.json()
            if (resOb.wasSuccess) {
                setIsSuccess(true)
                setIsPending(false)
            } else {
                setError(resOb.errMessage)
                setIsPending(false)
            }
        } catch (err) {
            console.log(err)
            setError(err.message)
            setIsPending(false)
        }
    }

    return { error, isPending, isSuccess, challengeUser}
}