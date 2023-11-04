'use client'
import { useState } from 'react'

import { BoardSquare } from "./BoardSquare"
import QuestionModal from './QuestionModal'
export default function Board({boardArr}) {
    const [questionForm, setQuestionForm] = useState(null)

    return (
        <>
        <div className="grid grid-cols-6 gap-x-4 gap-y-4 w-1/2">
            {boardArr && boardArr.map((sq) => (
                <div key={sq.id} className="col-span-1">
                    <BoardSquare difficulty={sq.difficulty} category={sq.category} setQuestionForm={setQuestionForm} />
                </div>
            ))}
        </div>
        {questionForm && (
            <QuestionModal question={questionForm} setQuestion={setQuestionForm} />
        )}
        </>
    )
}