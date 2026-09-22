import { useGame } from '../context/GameContext'

export default function Controls() {
  const { dispatch } = useGame()

  return (
    <div className="controls">
      <button
        className="controls__button controls__button--primary"
        onClick={() => dispatch({ type: 'RESET_BOARD' })}
      >
        Restart Round
      </button>
      <button
        className="controls__button controls__button--ghost"
        onClick={() => dispatch({ type: 'RESET_SCORES' })}
      >
        Reset Scores
      </button>
    </div>
  )
}
