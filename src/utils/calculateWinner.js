// All 8 winning line combinations on a 3x3 board (indices 0-8)
const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6],            // diagonals
]

/**
 * Inspects a board array and returns the game result.
 * @param {Array<'X'|'O'|null>} board
 * @returns {{ winner: 'X'|'O'|null, line: number[]|null, isDraw: boolean }}
 */
export function calculateWinner(board) {
  for (const line of LINES) {
    const [a, b, c] = line
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line, isDraw: false }
    }
  }

  const isDraw = board.every((cell) => cell !== null)
  return { winner: null, line: null, isDraw }
}
