import { calculateWinner } from '../utils/calculateWinner'

export const initialState = {
  board: Array(9).fill(null),
  currentPlayer: 'X', // 'X' is always the human, 'O' is always the computer
  winner: null, // 'X' | 'O' | null
  winningLine: null,
  isDraw: false,
  scores: { X: 0, O: 0, draws: 0 },
}

/**
 * Places a mark on the board and derives the new game status from it.
 * Shared by MAKE_MOVE and COMPUTER_MOVE so the win/draw/score logic
 * only lives in one place.
 */
function placeMark(state, index) {
  // Guard: ignore clicks on a filled cell or moves after the game ended
  if (state.board[index] || state.winner || state.isDraw) return state

  const board = [...state.board]
  board[index] = state.currentPlayer

  const { winner, line, isDraw } = calculateWinner(board)

  const scores = winner
    ? { ...state.scores, [winner]: state.scores[winner] + 1 }
    : isDraw
    ? { ...state.scores, draws: state.scores.draws + 1 }
    : state.scores

  return {
    ...state,
    board,
    winner,
    winningLine: line,
    isDraw,
    scores,
    currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
  }
}

export function gameReducer(state, action) {
  switch (action.type) {
    case 'MAKE_MOVE':
      // Only the human (X) may trigger this action
      if (state.currentPlayer !== 'X') return state
      return placeMark(state, action.payload.index)

    case 'COMPUTER_MOVE':
      // Only the computer (O) may trigger this action
      if (state.currentPlayer !== 'O') return state
      return placeMark(state, action.payload.index)

    case 'RESET_BOARD':
      // New round: wipe the board but keep the running scoreboard
      return {
        ...state,
        board: Array(9).fill(null),
        currentPlayer: 'X',
        winner: null,
        winningLine: null,
        isDraw: false,
      }

    case 'RESET_SCORES':
      return {
        ...state,
        scores: { X: 0, O: 0, draws: 0 },
      }

    default:
      return state
  }
}
