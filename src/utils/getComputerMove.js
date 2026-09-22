import { calculateWinner } from './calculateWinner'

function emptyIndices(board) {
  return board
    .map((cell, index) => (cell === null ? index : null))
    .filter((index) => index !== null)
}

/** Returns true if placing `mark` at `index` would win the game for `mark`. */
function wins(board, index, mark) {
  const next = [...board]
  next[index] = mark
  return calculateWinner(next).winner === mark
}

/**
 * Picks the computer's ('O') next move using simple priority rules:
 * 1. Take a move that wins immediately.
 * 2. Block the human ('X') if they'd win on their next move.
 * 3. Take the center if it's open.
 * 4. Take a corner if one's open.
 * 5. Otherwise take any open square.
 * This is a heuristic, not full minimax — beatable, but no longer random.
 */
export function getComputerMove(board) {
  const empty = emptyIndices(board)

  const winningMove = empty.find((index) => wins(board, index, 'O'))
  if (winningMove !== undefined) return winningMove

  const blockingMove = empty.find((index) => wins(board, index, 'X'))
  if (blockingMove !== undefined) return blockingMove

  if (board[4] === null) return 4

  const openCorners = [0, 2, 6, 8].filter((index) => board[index] === null)
  if (openCorners.length > 0) {
    return openCorners[Math.floor(Math.random() * openCorners.length)]
  }

  return empty[Math.floor(Math.random() * empty.length)]
}