import { useGame } from '../context/GameContext'

export default function Scoreboard() {
  const { state } = useGame()
  const { scores } = state

  return (
    <div className="scoreboard" aria-label="Scoreboard">
      <div className="scoreboard__cell">
        <span className="scoreboard__label">Player X</span>
        <span className="scoreboard__value">{scores.X}</span>
      </div>
      <div className="scoreboard__cell">
        <span className="scoreboard__label">Draws</span>
        <span className="scoreboard__value">{scores.draws}</span>
      </div>
      <div className="scoreboard__cell">
        <span className="scoreboard__label">Player O</span>
        <span className="scoreboard__value">{scores.O}</span>
      </div>
    </div>
  )
}