type BaseToken = {
  name: string
  id: string
  symbol: string
  staking?: { type: "On-chain" | "Off-chain"; reward: string }
}

export const tokens = {
  BTC: {
    name: "Bitcoin",
    id: "bitcoin",
    symbol: "BTC",
    staking: {
      type: "Off-chain",
      reward: "1.25",
    },
  },
  ETH: {
    name: "Ethereum",
    id: "ethereum",
    symbol: "ETH",
    staking: {
      type: "On-chain",
      reward: "4-7",
    },
  },
  USDT: {
    name: "Tether USD",
    id: "tether",
    symbol: "USDT",
    staking: {
      type: "Off-chain",
      reward: "1.5",
    },
  },
  BNB: { name: "Binance Coin", id: "binancecoin", symbol: "BNB" },
  USDC: {
    name: "USD Coin",
    id: "usd-coin",
    symbol: "USDC",
    staking: {
      type: "Off-chain",
      reward: "1.5",
    },
  },
  BUSD: { name: "Binance USD", id: "binance-usd", symbol: "BUSD" },
  XRP: { name: "XRP", id: "ripple", symbol: "XRP" },
  ADA: {
    name: "Cardano",
    id: "cardano",
    symbol: "ADA",
    staking: {
      type: "On-chain",
      reward: "3-6",
    },
  },
  DOGE: { name: "Dogecoin", id: "dogecoin", symbol: "DOGE" },
  MATIC: {
    name: "Polygon",
    id: "matic-network",
    symbol: "MATIC",
    staking: {
      type: "On-chain",
      reward: "5-9",
    },
  },
  SOL: {
    name: "Solana",
    id: "solana",
    symbol: "SOL",
    staking: {
      type: "On-chain",
      reward: "5-8",
    },
  },
  DOT: {
    name: "Polkadot",
    id: "polkadot",
    symbol: "DOT",
    staking: {
      type: "On-chain",
      reward: "9-12",
    },
  },
  LTC: { name: "Litecoin", id: "litecoin", symbol: "LTC" },
  UNI: { name: "Uniswap", id: "uniswap", symbol: "UNI" },
  WBTC: { name: "Wrapped Bitcoin", id: "wrapped-bitcoin", symbol: "WBTC" },
  SHIB: { name: "SHIBA INU", id: "shiba-inu", symbol: "SHIB" },
  DAI: { name: "Dai", id: "dai", symbol: "DAI" },
  TRX: {
    name: "Tron",
    id: "tron",
    symbol: "TRX",
    staking: {
      type: "On-chain",
      reward: "3-6",
    },
  },
  ATOM: {
    name: "Cosmos",
    id: "cosmos",
    symbol: "ATOM",
    staking: {
      type: "On-chain",
      reward: "12-15",
    },
  },
  LINK: { name: "ChainLink", id: "chainlink", symbol: "LINK" },
  XMR: { name: "Monero", id: "monero", symbol: "XMR" },
  ETC: { name: "Ethereum Classic", id: "ethereum-classic", symbol: "ETC" },
  BCH: { name: "Bitcoin Cash", id: "bitcoin-cash", symbol: "BCH" },
  XLM: { name: "Stellar", id: "stellar", symbol: "XLM" },
  NEAR: { name: "Near Protocol", id: "near", symbol: "NEAR" },
  FIL: { name: "Filecoin", id: "filecoin", symbol: "FIL" },
  ALGO: {
    name: "Algorand",
    id: "algorand",
    symbol: "ALGO",
    staking: {
      type: "On-chain",
      reward: "1-4",
    },
  },
  EOS: { name: "Eos", id: "eos", symbol: "EOS" },
  MANA: { name: "Decentraland", id: "decentraland", symbol: "MANA" },
  AAVE: { name: "Aave", id: "aave", symbol: "AAVE" },
  FLOW: {
    name: "Flow",
    id: "flow",
    symbol: "FLOW",
    staking: {
      type: "On-chain",
      reward: "6-9",
    },
  },
  AXS: { name: "Axie Infinity", id: "axie-infinity", symbol: "AXS" },
  XTZ: {
    name: "Tezos",
    id: "tezos",
    symbol: "XTZ",
    staking: {
      type: "On-chain",
      reward: "5-7",
    },
  },
  ZEC: { name: "Zcash", id: "zcash", symbol: "ZEC" },
  CHZ: { name: "Chiliz", id: "chiliz", symbol: "CHZ" },
  GRT: {
    name: "The Graph",
    id: "the-graph",
    symbol: "GRT",
    staking: {
      type: "On-chain",
      reward: "5-10",
    },
  },
  MKR: { name: "Maker", id: "maker", symbol: "MKR" },
  DASH: { name: "DASH", id: "dash", symbol: "DASH" },
  SNX: { name: "Synthetix", id: "havven", symbol: "SNX" },
  MINA: {
    name: "Mina",
    id: "mina-protocol",
    symbol: "MINA",
    staking: {
      type: "On-chain",
      reward: "12-20",
    },
  },
  COMP: { name: "Compound", id: "compound-governance-token", symbol: "COMP" },
  ENJ: { name: "Enjin", id: "enjincoin", symbol: "ENJ" },
  KAVA: {
    name: "KAVA",
    id: "kava",
    symbol: "KAVA",
    staking: {
      type: "On-chain",
      reward: "14-18",
    },
  },
  KSM: {
    name: "Kusama",
    id: "kusama",
    symbol: "KSM",
    staking: {
      type: "On-chain",
      reward: "7-11",
    },
  },
  QTUM: { name: "QTUM", id: "qtum", symbol: "QTUM" },
  SUSHI: { name: "Sushi", id: "sushi", symbol: "SUSHI" },
  WAVES: { name: "WAVES", id: "waves", symbol: "WAVES" },
  ICX: { name: "ICON", id: "icon", symbol: "ICX" },
  SCRT: {
    name: "Secret Network",
    id: "secret",
    symbol: "SCRT",
    staking: {
      type: "On-chain",
      reward: "18-21",
    },
  },
} satisfies Record<string, BaseToken>

export type TokenSymbol = keyof typeof tokens
export type Token<Symbol extends TokenSymbol = TokenSymbol> = {
  name: string
  id: string
  symbol: Symbol
  staking?: { type: "On-chain" | "Off-chain"; reward: string }
}

export const allSymbols = Object.keys(tokens) as TokenSymbol[]
export const allTokens = Object.values(tokens) as Token[]

export function getTokenBySymbolString(symbol: string): Token | null {
  const token = (tokens as any)[symbol.toUpperCase()]
  if (!token) return null
  return token
}

export function getTokenBySymbol<Symbol extends TokenSymbol>(symbol: Symbol): Token<Symbol> {
  return tokens[symbol] as Token<Symbol>
}

export function getTokenSymbolById(id: string): TokenSymbol | null {
  for (const [symbol, token] of Object.entries(tokens)) {
    if (token.id === id) return symbol as TokenSymbol
  }
  return null
}
