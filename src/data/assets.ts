import { fiats } from "./fiats"
import { allTokens, Token, tokens } from "./tokens"

export type Stakeable = {
  name: string
  symbol: string
  staking: { type: "On-chain" | "Off-chain"; reward: string }
}

export const stakingRewards: Stakeable[] = [
  tokens.ADA,
  tokens.ATOM,
  tokens.ETH,
  tokens.FLOW,
  tokens.KAVA,
  tokens.KSM,
  tokens.MINA,
  tokens.DOT,
  tokens.SOL,
  tokens.XTZ,
  tokens.TRX,
]

export const stakingAssets: Stakeable[] = [
  tokens.ALGO,
  tokens.ADA,
  tokens.ATOM,
  tokens.ETH,
  tokens.FLOW,
  tokens.KAVA,
  tokens.KSM,
  tokens.MINA,
  tokens.DOT,
  tokens.MATIC,
  tokens.SCRT,
  tokens.SOL,
  tokens.XTZ,
  tokens.GRT,
  tokens.TRX,
  tokens.BTC,
  fiats.EUR,
  tokens.USDT,
  fiats.USD,
  tokens.USDC,
]

export const fundingAssets = [
  tokens.BTC,
  tokens.XRP,
  tokens.ETH,
  tokens.LTC,
  tokens.QTUM,
  tokens.ADA,
  tokens.ZEC,
  tokens.XMR,
]

export const assetGuides = [
  {
    ...tokens.BTC,
    desc: "Bitcoin is an open-source software that since 2009 has enabled the exchange of an entirely new form of money (BTC) over the internet.",
  },
  {
    ...tokens.ETH,
    desc: "One of the most ambitious cryptocurrencies to date, Ethereum was launched in 2014 to decentralize products and services in a broader array of use cases beyond money.",
  },
  {
    ...tokens.XRP,
    desc: "XRP is a cryptocurrency that aims to complement traditional payments, migrating transactions that occur today between databases controlled by financial firms to a more open infrastructure.",
  },
  {
    ...tokens.BCH,
    desc: "Launched in 2017, Bitcoin Cash (BCH) is a newer cryptocurrency that intends to offer an alternative to the world’s oldest and most widely traded cryptocurrency, Bitcoin (BTC).",
  },
  {
    ...tokens.LTC,
    desc: "Litecoin (LTC) is one of the very first projects to copy and modify Bitcoin’s code and use it to launch a new cryptocurrency.",
  },
  {
    ...tokens.EOS,
    desc: "The cryptocurrency that powers the EOSIO blockchain, buying EOS is essential for developers who must buy and stake EOS to launch decentralized applications (dapps).",
  },
  {
    ...tokens.DOT,
    desc: "Polkadot is a software that seeks to incentivize a global network of computers to operate a blockchain on top of which users can launch and operate their own blockchains.",
  },
  {
    ...tokens.KSM,
    desc: "Kusama is a public pre-production environment for Polkadot, one that allows any developer to experiment and test new blockchains or applications before releasing them on this network.",
  },
  {
    ...tokens.ADA,
    desc: "One of a number of competing proof-of-stake blockchains, Cardano enables owners of its ADA cryptocurrency to help operate its network and vote on changes to its software rules.",
  },
]

export const overviewTopics = ["Biggest gains", "Biggest dips", "Trending assets", "Recently listed"] as const
export type OverviewTopic = (typeof overviewTopics)[number]
export const overviewTopicsMap = {
  "Biggest gains": [tokens.BTC, tokens.ETH, tokens.USDT, tokens.DOT] as Token[],
  "Biggest dips": [tokens.USDC, tokens.BUSD, tokens.BCH, tokens.DASH] as Token[],
  "Trending assets": [tokens.WBTC, tokens.DOT, tokens.SHIB, tokens.UNI] as Token[],
  "Recently listed": [tokens.MINA, tokens.MKR, tokens.KAVA, tokens.SNX] as Token[],
} satisfies Record<OverviewTopic, Token[]>

export const topics = [
  "All assets",
  "Tradeable",
  "Non-tradeable",
  "Biggest gains",
  "Biggest dips",
  "Recently listed",
] as const
export type Topic = (typeof topics)[number]

export const topicsMap = {
  "All assets": allTokens,
  ["Tradeable"]: allTokens.filter((t) => !!t.staking),
  "Non-tradeable": allTokens.filter((t) => !t.staking),
  "Biggest gains": [
    tokens.SOL,
    tokens.ADA,
    tokens.AAVE,
    tokens.CHZ,
    tokens.FIL,
    tokens.KSM,
    tokens.ATOM,
    tokens.XMR,
    tokens.XRP,
    tokens.EOS,
    tokens.AXS,
    tokens.DAI,
    tokens.MATIC,
    tokens.WBTC,
    tokens.XLM,
    tokens.TRX,
  ] as Token[],
  "Biggest dips": [
    tokens.USDC,
    tokens.BUSD,
    tokens.BCH,
    tokens.DASH,
    tokens.ZEC,
    tokens.SHIB,
    tokens.ETC,
    tokens.DOGE,
    tokens.KAVA,
    tokens.MKR,
  ] as Token[],
  "Recently listed": [
    tokens.MINA,
    tokens.MKR,
    tokens.KAVA,
    tokens.SNX,
    tokens.COMP,
    tokens.DAI,
    tokens.ICX,
    tokens.GRT,
    tokens.MANA,
    tokens.WAVES,
    tokens.QTUM,
    tokens.SUSHI,
    tokens.EOS,
    tokens.NEAR,
    tokens.AXS,
    tokens.FLOW,
    tokens.ENJ,
    tokens.CHZ,
  ] as Token[],
} satisfies Record<Topic, Token[]>
