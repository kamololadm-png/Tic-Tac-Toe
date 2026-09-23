import { useEffect } from 'react'
import { useGame } from '../context/GameContext'
import { getComputerMove } from '../utils/getComputerMove'
import Square from './Square'

export default function Board() {
  const { state, dispatch } = useGame()
  const { board, currentPlayer, winner, isDraw, winningLine, mode } = state

  const gameOver = Boolean(winner) || isDraw
  const isComputerTurn = mode === 'vsComputer' && currentPlayer === 'O'

  useEffect(() => {
    if (!isComputerTurn || gameOver) return

    const timeoutId = setTimeout(() => {
      const index = getComputerMove(board)
      dispatch({ type: 'COMPUTER_MOVE', payload: { index } })
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [isComputerTurn, gameOver, board, dispatch])

  function handleSquareClick(index) {
    dispatch({ type: 'MAKE_MOVE', payload: { index } })
  }

  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => handleSquareClick(index)}
          isWinning={winningLine?.includes(index)}
          disabled={gameOver || isComputerTurn}
        />
      ))}
    </div>
  )
}