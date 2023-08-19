type Fiat = {
  name: string
  symbol: string
  staking?: { type: "Off-chain"; reward: string }
}

export const fiats = {
  USD: {
    name: "US Dollar",
    symbol: "USD",
    staking: {
      type: "Off-chain",
      reward: "3.5",
    },
  },
  EUR: {
    name: "Euro",
    symbol: "EUR",
    staking: {
      type: "Off-chain",
      reward: "2.5",
    },
  },
} satisfies Record<string, Fiat>
