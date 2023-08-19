import { Facebook, Instagram, LinkedIn, Logo, Twitter } from "@/components/icons"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-product-main min-h-screen px-8 pb-32 pt-8 text-white md:px-20 lg:pt-20">
      <div className="mx-auto max-w-5xl divide-y divide-zinc-300/40">
        <div className="flex flex-col divide-y divide-zinc-300/40 lg:flex-row lg:gap-12 lg:divide-none">
          <div className="space-y-4 pb-10 lg:w-48 lg:max-w-3xl lg:pb-0">
            <p className="text-xl font-bold">Take your crypto to the next level with Kraken.</p>
            <div className="flex gap-4 lg:w-32 lg:flex-col">
              <Link href="/signup">
                <Button rounded sm bold full variant="light">
                  Create account
                </Button>
              </Link>
              <Link href="/signin">
                <Button rounded sm bold full variant="light-outline">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>

          <ul className="flex-grow columns-2 pt-10 text-xs font-bold lg:columns-3 lg:pt-0">
            <li className="break-inside-avoid pb-8">
              <h3 className="text-2xl opacity-40">Features</h3>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <Link href="/features/support" className="hover:opacity-40">
                    24/7 Support
                  </Link>
                </li>
                <li>
                  <Link href="/features/account-management" className="hover:opacity-40">
                    Account Management
                  </Link>
                </li>
                <li>
                  <a className="hover:opacity-40">API</a>
                </li>
                <li>
                  <a className="hover:opacity-40">Bug Bounty</a>
                </li>
                <li>
                  <Link href="/features/fee-schedule" className="hover:opacity-40">
                    Fee Schedule
                  </Link>
                </li>
                <li>
                  <Link href="/features/funding-options" className="hover:opacity-40">
                    Funding Options
                  </Link>
                </li>
                <li>
                  <a className="hover:opacity-40">Futures</a>
                </li>
                <li>
                  <Link href="/features/indices" className="hover:opacity-40">
                    Indices
                  </Link>
                </li>
                <li>
                  <Link href="/features/liquidity" className="hover:opacity-40">
                    Liquidity
                  </Link>
                </li>
                <li>
                  <Link href="/features/margin-trading" className="hover:opacity-40">
                    Margin Trading
                  </Link>
                </li>
                <li>
                  <a className="hover:opacity-40">OTC</a>
                </li>
                <li>
                  <a className="hover:opacity-40">PGP Key</a>
                </li>
                <li>
                  <a className="hover:opacity-40">Proof of Reserves</a>
                </li>
                <li>
                  <Link href="/features/security" className="hover:opacity-40">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/features/staking" className="hover:opacity-40">
                    Staking
                  </Link>
                </li>
                <li>
                  <Link href="/features/support" className="hover:opacity-40">
                    Support
                  </Link>
                </li>
                <li>
                  <a className="hover:opacity-40">WebSockets</a>
                </li>
              </ul>
            </li>
            <li className="break-inside-avoid pb-8">
              <h3 className="text-2xl opacity-40">Prices</h3>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <Link href="/cryptowatch" className="block hover:opacity-40">
                    Cryptowatch
                  </Link>
                </li>
                <li>
                  <Link href="prices" className="block hover:opacity-40">
                    Crypto Prices
                  </Link>
                </li>
              </ul>
            </li>
            <li className="break-inside-avoid pb-8">
              <h3 className="text-2xl opacity-40">Learn</h3>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <a className="hover:opacity-40">Blog</a>
                </li>
                <li>
                  <Link href="/learn/crypto-guides" className="hover:opacity-40">
                    Crypto Guides
                  </Link>
                </li>
                <li>
                  <a className="hover:opacity-40">Videos</a>
                </li>
                <li>
                  <a className="hover:opacity-40">Podcast</a>
                </li>
                <li>
                  <a className="hover:opacity-40">Parachain Slot Auctions</a>
                </li>
                <li>
                  <a className="hover:opacity-40">How to Buy Bitcoin</a>
                </li>
                <li>
                  <a className="hover:opacity-40">How to Buy Ripple</a>
                </li>
                <li>
                  <a className="hover:opacity-40">How to Buy Ethereum</a>
                </li>
                <li>
                  <a className="hover:opacity-40">How to Buy Bitcoin Cash</a>
                </li>
                <li>
                  <a className="hover:opacity-40">How to Buy Litecoin</a>
                </li>
                <li>
                  <a className="hover:opacity-40">How to Buy Cardano</a>
                </li>
                <li>
                  <a className="hover:opacity-40">How to Buy Dogecoin</a>
                </li>
                <li>
                  <a className="hover:opacity-40">How to Buy Monero</a>
                </li>
                <li>
                  <a className="hover:opacity-40">How to Buy Polkadot</a>
                </li>
              </ul>
            </li>
            <li className="break-inside-avoid pb-8">
              <h3 className="text-2xl opacity-40">About</h3>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <a className="hover:opacity-40">Why Kraken</a>
                </li>
                <li>
                  <a className="hover:opacity-40">Mobile Apps</a>
                </li>
                <li>
                  <a className="hover:opacity-40">Institutions</a>
                </li>
                <li>
                  <a className="hover:opacity-40">Careers</a>
                </li>
                <li>
                  <a className="hover:opacity-40">Contact</a>
                </li>
                <li>
                  <a className="hover:opacity-40">Press</a>
                </li>
                <li>
                  <a className="hover:opacity-40">Affiliates</a>
                </li>
                <li>
                  <a className="hover:opacity-40">Grants</a>
                </li>
                <li>
                  <a className="hover:opacity-40">Kraken Bank</a>
                </li>
                <li>
                  <a className="hover:opacity-40">Status</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-y-12 py-4 text-white/60 lg:flex-row lg:items-center">
          <div className="flex flex-wrap items-center justify-between gap-y-4 lg:w-1/2">
            <Link href="/">
              <h2 className="mr-12 inline-flex cursor-pointer items-baseline gap-[2px] text-white">
                <Logo className="relative -bottom-[2px] h-7 w-7 fill-white" />
                <span className="text-3xl font-medium">Kraken</span>
              </h2>
            </Link>

            <div className="flex items-center gap-x-2">
              <div className="rounded-full border-[3px] p-2">
                <Facebook className="h-4 w-4 text-white" />
              </div>
              <div className="rounded-full border-[3px] p-2">
                <Twitter className="h-4 w-4 text-white" />
              </div>
              <div className="rounded-full border-[3px] p-2">
                <LinkedIn className="h-4 w-4 text-white" />
              </div>
              <div className="rounded-full border-[3px] p-2">
                <Instagram className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-6 lg:w-1/2 lg:justify-end">
            <div className="flex flex-col text-xs">
              <p>&copy; 2011 - {new Date().getFullYear()} Payward, Inc.</p>
              <Link href="/legal/privacy" className="underline">
                Privacy Notice
              </Link>
              <Link href="/legal" className="underline">
                Terms of Service
              </Link>
            </div>

            <div className="mt-auto flex flex-col text-xs">
              <Link href="/legal/cookies" className="underline">
                Cookies Policy
              </Link>
              <Link href="/legal/disclosures" className="underline">
                Disclosures
              </Link>
            </div>
          </div>
        </div>

        <div className="py-8">
          <p className="text-xs italic text-white/60">
            These materials are for general information purposes only and are not investment advice or a recommendation
            or solicitation to buy, sell or hold any cryptoasset or to engage in any specific trading strategy. Some
            crypto products and markets are unregulated, and you may not be protected by government compensation and/or
            regulatory protection schemes. The unpredictable nature of the cryptoasset markets can lead to loss of
            funds. Tax may be payable on any return and/or on any increase in the value of your cryptoassets and you
            should seek independent advice on your taxation position.
          </p>
        </div>
      </div>
    </footer>
  )
}
