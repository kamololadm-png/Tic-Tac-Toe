export default function Square({ value, onClick, isWinning, disabled }) {
  return (
    <button
      className={`square ${value ? `square--${value.toLowerCase()}` : ''} ${
        isWinning ? 'square--winning' : ''
      }`}
      onClick={onClick}
      disabled={disabled || Boolean(value)}
      aria-label={value ? `Square filled with ${value}` : 'Empty square'}
    >
      {value}
    </button>
  )
}
