import { createSquareArray } from "@/utils/helpers"
import Board from "@/components/GameComponents/Board"
export default function Home() {
  const boardsquares = createSquareArray()
  return (
    <main>
      <Board boardArr={boardsquares}/>

    </main>
  )
}
