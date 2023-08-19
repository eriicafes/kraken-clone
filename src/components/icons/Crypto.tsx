type Props = {
  symbol: string
  className?: string
}

export function Crypto({ symbol, className }: Props) {
  return (
    <span className={`bc sym-_default sym-${symbol.toLowerCase()} ${symbol} coin-fallback-color ${className ?? ""}`} />
  )
}
