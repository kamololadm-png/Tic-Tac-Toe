import { createContext, useContext, useReducer } from 'react'
import { gameReducer, initialState } from '../reducer/gameReducer'

const GameContext = createContext(null)

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  // Everything downstream reads/writes game state through this one value
  const value = { state, dispatch }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

/**
 * Custom hook so components never import GameContext directly.
 * Throws early if used outside the provider, instead of failing silently.
 */
export function useGame() {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGame must be used inside a <GameProvider>')
  }
  return context
}
