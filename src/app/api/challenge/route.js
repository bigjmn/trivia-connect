import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { adminFirestore } from "@/firebase/admin-config";

export async function POST(request) {
    const { challengedUser, challengerId, challengerColor } = request.body
    const challengerDoc = await adminFirestore.collection('users').doc(challengerId).get()
    const {challengerName} = challengerDoc.data() 
    const querySnapshot = await adminFirestore.collection('users').where("displayName", "==", challengedUser).get()
    if (querySnapshot.empty) {
        return NextResponse.json({errmessage: "could not find user", wasSuccess: false}, { status: 404 })
    }
    // define creation time here so it's consistent for both users
    const currDate = Date.now()
    // 
    // should only be one doc that meets the query, or something is very wrong 
    querySnapshot.forEach((snapDoc) => {
        const newChallengeId = nanoid(7)
        const challengedUserId = snapDoc.id
        const addChallenge = adminFirestore.collection('challenges').doc(newChallengeId)
        .set({
            challengeTime: currDate,
            challenger: challengerId,
            challengee: challengedUserId,
            isWaiting: true,
            isAccepted: false,
            challengerColor: challengerColor
        })
        const addedSnap = adminFirestore.collection('users')
        .doc(challengedUserId)
        .collection('challenges')
        .doc(newChallengeId)
        .set({wasChallenged: true, challengePartnerName: challengerName, challengeTime: currDate})

        const addedOutgoing = adminFirestore.collection('users')
        .doc(challengerId)
        .collection('challenges')
        .doc(newChallengeId)
        .set({wasChallenged: false, challengePartnerName: challengedUser, challengeTime: currDate})
    })

    return NextResponse.json({errMessage: null, wasSuccess: true}, {status: 200})




}