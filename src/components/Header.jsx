import { useGame } from '../context/GameContext'

export default function Header() {
  const { state } = useGame()

  return (
    <header className="panel__header">
      <span className="panel__eyebrow">React HQ</span>
      <h1 className="panel__title">Tic · Tac · Toe</h1>
      <span className="panel__subtitle">
        {state.mode === 'vsComputer'
          ? 'You play X — the computer plays O'
          : 'Player X vs Player O'}
      </span>
    </header>
  )
}