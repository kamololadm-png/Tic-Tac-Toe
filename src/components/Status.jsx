import { useGame } from '../context/GameContext'

export default function Status() {
  const { state } = useGame()
  const { winner, isDraw, currentPlayer } = state

  let message = `Next Player: ${currentPlayer}`
  let tone = 'status--active'

  if (winner) {
    message = winner === 'X' ? 'You Win! 🎉' : 'Computer Wins 🤖'
    tone = winner === 'X' ? 'status--win' : 'status--lose'
  } else if (isDraw) {
    message = "Draw!"
    tone = 'status--draw'
  } else if (currentPlayer === 'O') {
    message = 'Computer is thinking…'
  }

  return (
    <p className={`status ${tone}`} role="status" aria-live="polite">
      {message}
    </p>
  )
}
