import {FaMask, FaFootballBall, FaScroll, FaGlobeAmericas, FaGraduationCap} from 'react-icons/fa'
import {MdScience} from 'react-icons/md'
import { assembleQuery } from '@/utils/helpers'

const colorFromDifficulty = (dif) => {
    if (dif === "easy") return "green"
    if (dif === "medium") return "orange"
    if (dif === "hard") return "red"
    return "blue"
}
const iconDict = {
    "science": <MdScience style={{fontSize: 45}}/>,
    "geography" : <FaGlobeAmericas />,
    "general" : <FaGraduationCap />,
    "sports" : <FaFootballBall />,
    "history" : <FaScroll />,
    "entertainment" : <FaMask />
}
export function BoardSquare({difficulty, category, setQuestionForm}) {
    const handleClick = async () => {
        const queryUrl = assembleQuery(category, difficulty)
        console.log(queryUrl)
        try {
            const res = await fetch(queryUrl, {
                method: 'GET',
                headers: {'Content-type': 'application/json'}
            })
            const resOb = await res.json()
            console.log(resOb)
            setQuestionForm(resOb[0])
        } catch (err) {
            console.log(err)
        }
    }
    const bgColor = colorFromDifficulty(difficulty)
    const cName = `aspect-square border border-solid flex justify-center items-center cursor-pointer text-lg`

    return (
        <div className={cName} style={{backgroundColor: bgColor}} onClick={handleClick}>
            {iconDict[category]}

        </div>
    )

}