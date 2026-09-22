# Tic Tac Toe — React HQ

A TicTacToe game built with React, Context + `useReducer`, a restart/scoreboard
feature, and a random-move computer opponent.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → **Add New Project** → import the repo.
3. Framework preset: **Vite**. Leave build command (`npm run build`) and
   output directory (`dist`) as detected. Click **Deploy**.

## Deploy (Netlify)

1. Push this folder to a new GitHub repo.
2. Go to app.netlify.com → **Add new site → Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`. Click **Deploy**.

## Project structure

```
src/
  reducer/gameReducer.js   -> all state transitions (MAKE_MOVE, COMPUTER_MOVE, RESET_BOARD, RESET_SCORES)
  context/GameContext.jsx  -> Context provider + useGame() hook
  utils/calculateWinner.js -> pure win/draw detection
  components/
    Board.jsx        -> grid + triggers the computer's move
    Square.jsx        -> dumb, presentational
    Status.jsx        -> "Next Player" / "Winner" / "Draw" text
    Scoreboard.jsx     -> running X/O/draw tally
    Controls.jsx       -> Restart Round + Reset Scores buttons
```

## How the game logic works

- `App` wraps everything in `<GameProvider>`, so any component can call
  `useGame()` to read `state` or `dispatch` an action — no prop drilling.
- `gameReducer` is the only place that touches game state. Both a human
  click (`MAKE_MOVE`) and the computer's move (`COMPUTER_MOVE`) funnel
  through the same `placeMark()` helper, so win/draw/score logic is
  written once.
- `Board` watches `currentPlayer` with a `useEffect`. When it becomes `'O'`,
  it waits 500ms (so the move feels intentional) and dispatches a random
  empty square as `COMPUTER_MOVE`.
- `Restart Round` clears the board but keeps the scoreboard; `Reset Scores`
  zeroes the tally.
