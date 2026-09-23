import { useGame } from '../context/GameContext'

export default function ModeToggle() {
  const { state, dispatch } = useGame()
  const { mode } = state

  function setMode(nextMode) {
    dispatch({ type: 'SET_MODE', payload: { mode: nextMode } })
  }

  return (
    <div className="mode-toggle" role="group" aria-label="Game mode">
      <button
        className={`mode-toggle__button ${mode === 'twoPlayer' ? 'mode-toggle__button--active' : ''}`}
        onClick={() => setMode('twoPlayer')}
      >
        2 Player
      </button>
      <button
        className={`mode-toggle__button ${mode === 'vsComputer' ? 'mode-toggle__button--active' : ''}`}
        onClick={() => setMode('vsComputer')}
      >
        vs Computer
      </button>
    </div>
  )
}