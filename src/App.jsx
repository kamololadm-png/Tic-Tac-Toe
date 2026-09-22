import { GameProvider } from './context/GameContext'
import Board from './components/Board'
import Status from './components/Status'
import Scoreboard from './components/Scoreboard'
import Controls from './components/Controls'
import './App.css'

export default function App() {
  return (
    <GameProvider>
      <main className="page">
        <div className="panel">
          <header className="panel__header">
            <span className="panel__eyebrow">React HQ</span>
            <h1 className="panel__title">Tic · Tac · Toe</h1>
            <span className="panel__subtitle">You play X — the computer plays O</span>
          </header>

          <Status />
          <Board />
          <Scoreboard />
          <Controls />
        </div>
      </main>
    </GameProvider>
  )
}
