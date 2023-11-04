import { nanoid } from "nanoid"
export const categoryList = ["entertainment", "sports", "history", "general", "science", "geography"]
export const difficultyList = ["easy", "medium", "hard"]
export const assembleQuery = (category, difficulty) => {
    const categoryString = category === "entertainment" ? "music,film_and_tv" 
    : category === "sports" ? "sports_and_leisure" 
    : category === "history" ? "history"  
    : category === "general" ? "general_knowledge" 
    : category === "science" ? "science" 
    : category === "geography" ? "geography" 
    : ""
    return `https://the-trivia-api.com/v2/questions?limit=1&difficulties=${difficulty}&categories=${categoryString}`
}

export const createSquareArray = () => {
    const squareArr = []
    difficultyList.forEach((diff) => {
        categoryList.forEach((cat) => {
            const id1 = nanoid(5)
            const id2 = nanoid(5)
            const orderKey1 = Math.random()
            const orderKey2 = Math.random()
            const newSquare1 = { id: id1, orderKey: orderKey1, difficulty: diff, category: cat}
            const newSquare2 = { id: id2, orderKey: orderKey2, difficulty: diff, category: cat}

            squareArr.push(newSquare1)
            squareArr.push(newSquare2)
        })
    }) 
    squareArr.sort((a, b) => a.orderKey-b.orderKey)
    console.log(squareArr)

    return squareArr
}