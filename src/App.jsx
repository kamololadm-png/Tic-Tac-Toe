import { GameProvider } from './context/GameContext'
import Header from './components/Header'
import Status from './components/Status'
import ModeToggle from './components/ModeToggle'
import Board from './components/Board'
import Scoreboard from './components/Scoreboard'
import Controls from './components/Controls'
import './App.css'

export default function App() {
  return (
    <GameProvider>
      <main className="page">
        <div className="panel">
          <Header />
          <ModeToggle />
          <Status />
          <Board />
          <Scoreboard />
          <Controls />
        </div>
      </main>
    </GameProvider>
  )
}