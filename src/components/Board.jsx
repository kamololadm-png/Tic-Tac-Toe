import { useEffect } from 'react'
import { useGame } from '../context/GameContext'
import Square from './Square'

function getRandomEmptyIndex(board) {
  const emptyIndices = board
    .map((cell, index) => (cell === null ? index : null))
    .filter((index) => index !== null)

  return emptyIndices[Math.floor(Math.random() * emptyIndices.length)]
}

export default function Board() {
  const { state, dispatch } = useGame()
  const { board, currentPlayer, winner, isDraw, winningLine } = state

  const gameOver = Boolean(winner) || isDraw

  // Computer's turn: wait a beat so the move feels intentional, then play
  useEffect(() => {
    if (currentPlayer !== 'O' || gameOver) return

    const timeoutId = setTimeout(() => {
      const index = getRandomEmptyIndex(board)
      dispatch({ type: 'COMPUTER_MOVE', payload: { index } })
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [currentPlayer, gameOver, board, dispatch])

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
          disabled={gameOver || currentPlayer === 'O'}
        />
      ))}
    </div>
  )
}
