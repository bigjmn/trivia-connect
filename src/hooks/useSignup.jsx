import { useState } from 'react'
import { auth, firestore } from '../firebase/config'
import { createUserWithEmailAndPassword, setPersistence, updateProfile } from 'firebase/auth'
import { useAuth } from './useAuth'
import { doc, setDoc } from 'firebase/firestore'
export const useSignup = () => {
    const { dispatch } = useAuth()
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    const signup = async (email, password, displayName, rememberMe) => {
        setError(null)
        setIsPending(true)

        const isRemembered = rememberMe ? browserLocalPersistence : browserSessionPersistence
        try {
            await setPersistence(auth, isRemembered)
            const res = await createUserWithEmailAndPassword(auth, email, password)

            await updateProfile(res.user, { displayName })

            const docRef = doc(firestore, 'users', res.user.uid)
            await setDoc(docRef, {
                email,
                displayName,
                online: true,
                rating: 1200

            })
            setIsPending(false)
            dispatch({ type: 'LOGIN', payload: res.user })
            



        } catch (err) {
            setError(err.message)
            setIsPending(false)
        }
    }
    return { signup, error, isPending }
}