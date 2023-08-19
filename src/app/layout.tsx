import "@/styles/globals.css"

import { celias } from "@/assets/fonts/celias"
import { NavLink } from "@/types/link"
import { Metadata } from "next"
import { ReactNode } from "react"
import { Footer } from "./_sections/Footer"
import { Header } from "./_sections/Header"

export const metadata: Metadata = {
  title: {
    default: "Bitcoin & Cryptocurrency Staking | Bitcoin Trading Platform | Kraken",
    template: "%s | Kraken",
  },
  description: `Kraken is more than just a Bitcoin trading platform.
  Come see why our cryptocurrency exchange is the best place to buy, sell, trade and stake crypto.`,
}

const navLinks: NavLink[] = [
  {
    title: "Features",
    children: [
      { title: "Security", href: "/features/security" },
      { title: "Fee Structure", href: "/features/fee-schedule" },
      { title: "Funding Options", href: "/features/funding-options" },
      { title: "Staking", href: "/features/staking" },
      { title: "24/7 Support", href: "/features/support" },
      { title: "Liquidty", href: "/features/liquidity" },
      { title: "Margin Trading", href: "/features/margin-trading" },
      { title: "Indices", href: "/features/indices" },
      { title: "Futures", href: "" },
      { title: "OTC", href: "" },
      { title: "Account Management", href: "/features/account-management" },
      { title: "Cryptowatch", href: "/cryptowatch" },
    ],
  },
  { title: "Prices", href: "/prices" },
  { title: "NFT", href: "" },
  { title: "Pro", href: "" },
  { title: "Futures", href: "" },
  { title: "Institutions", href: "" },
  {
    title: "Learn",
    children: [
      { title: "Crypto Guides", href: "/learn/crypto-guides" },
      { title: "Videos", href: "" },
      { title: "Podcasts", href: "" },
    ],
  },
  { title: "Support", href: "/features/support" },
]

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={celias.className}>
      <Header navLinks={navLinks} />
      {children}
      <Footer />
    </html>
  )
}
