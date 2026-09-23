import { useGame } from '../context/GameContext'

export default function Status() {
  const { state } = useGame()
  const { winner, isDraw, currentPlayer, mode } = state

  const isComputerTurn = mode === 'vsComputer' && currentPlayer === 'O'

  let message = `Next Player: ${currentPlayer}`
  let tone = 'status--active'

  if (winner) {
    message = `Winner: ${winner}`
    tone = winner === 'X' ? 'status--x' : 'status--o'
  } else if (isDraw) {
    message = 'Draw!'
    tone = 'status--draw'
  }

  return (
    <div className="status-block">
      <p className={`status ${tone}`} role="status" aria-live="polite">
        {message}
      </p>
      {isComputerTurn && !winner && !isDraw && (
        <p className="status-note">Computer is thinking…</p>
      )}
    </div>
  )
}