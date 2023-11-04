
export default function QuestionModal({question, setQuestion}) {
    const allAnswers = [...question.incorrectAnswers, question.correctAnswer].sort(() => Math.random()-.5)
    console.log(allAnswers)

    const handleClick = (userAns) => {
        const isRight = userAns === question.correctAnswer
        if (isRight) {
            console.log('correct!')
        } else {
            console.log('incorrect!')
        }
    }
    const clickAway = () => {
        setQuestion(null)
    }

    return (
        <div className="absolute w-full h-full top-0 left-0 bg-white bg-opacity-80 flex justify-center items-center" onClick={clickAway}>
            <div className="w-1/2 bg-white rounded-lg border">
                <h2>{question.question.text}</h2>
                <div>
                    {allAnswers && allAnswers.map((ans, i) => (
                        <div key={i}>
                            <button className="w-full p-3 text-center bg-brown-300 cursor-pointer" onClick={() => handleClick(ans)}>{ans}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}