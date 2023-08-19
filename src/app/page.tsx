import demoPro from "@/assets/images/demo-pro.webp"
import demoWelcomeBuy from "@/assets/images/demo-welcome-buy.webp"
import iconChartWhite from "@/assets/images/icon-chart-white.webp"
import iconCircles from "@/assets/images/icon-circles.webp"
import iconCoinsWhite from "@/assets/images/icon-coins-white.webp"
import iconCoins from "@/assets/images/icon-coins.webp"
import iconDiamond from "@/assets/images/icon-diamond.webp"
import iconLeftRightWhite from "@/assets/images/icon-left-right-white.webp"
import illustrationEducation from "@/assets/images/illustration-education.webp"
import illustrationService from "@/assets/images/illustration-service.webp"
import illustrationSimplicity from "@/assets/images/illustration-simplicity.webp"
import { Crypto, Logo } from "@/components/icons"
import { Button } from "@/components/ui"
import { stakingRewards } from "@/data/assets"
import Image from "next/image"
import Link from "next/link"
import { CryptoJourney } from "./_sections/CryptoJourney"
import { Portfolio } from "./_sections/Portfolio"

export default function Home() {
  return (
    <main>
      {/* hero */}
      <section className="relative mt-0 min-h-screen bg-product-alt lg:px-24">
        <div className="absolute inset-0 bg-[url('/images/bg-home-hero-sm.png')] bg-contain bg-top bg-no-repeat lg:bg-[url('/images/bg-home-hero-lg.png')] lg:bg-cover lg:bg-center" />

        <div className="relative mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-10 pt-12 lg:flex-row lg:pt-0">
          <div className="space-y-5 py-4 text-center lg:mr-auto lg:space-y-8 lg:pt-28 lg:text-left">
            <h1 className="max-w-lg text-[40px] font-medium text-black/90 lg:max-w-md lg:text-7xl ">
              Buy bitcoin & crypto
            </h1>
            <h2 className="max-w-sm leading-tight lg:max-w-md lg:text-2xl lg:leading-normal">
              Sign up today to easily buy <span className="font-bold">185+ cryptocurrencies.</span> Get started in
              minutes with as little as <span className="font-bold">$10.</span>
            </h2>

            <Link href="/signup" className="inline-block">
              <Button rounded variant="main">
                Buy crypto with $10
              </Button>
            </Link>
          </div>

          <div className="flex justify-end py-3 lg:pt-14">
            <video autoPlay loop playsInline muted className="h-[560px]">
              <source src="/video/app-intro.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* overview */}
      <section className="mx-auto max-w-6xl px-8 pb-8 pt-20">
        <div className="text-center text-product-main">
          <h2 className="mb-14 pt-2 text-[32px] font-medium tracking-wide lg:text-[38px]">
            Kraken is a crypto exchange for everyone
          </h2>
          <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-3">
            <div>
              <h4 className="mb-6 text-5xl font-medium">9M+</h4>
              <h5 className="text-black">Clients</h5>
            </div>
            <div>
              <h4 className="mb-6 text-5xl font-medium">190+</h4>
              <h5 className="text-black">Countries supported</h5>
            </div>
            <div>
              <h4 className="mb-6 text-5xl font-medium">$207B+</h4>
              <h5 className="text-black">Quarterly trading volume</h5>
            </div>
          </div>
        </div>

        <div className="mt-28 flex flex-col items-center lg:flex-row lg:items-start lg:gap-16">
          <div className="pb-4 text-center lg:hidden">
            <h4 className="mb-6 text-sm tracking-widest">CRYPTO EXCHANGE</h4>
            <h2 className="max-w-xs text-[36px] font-medium leading-tight text-product-main">
              Buy and sell crypto in minutes
            </h2>
          </div>

          <Image className="w-full lg:h-full lg:w-[53%]" src={demoWelcomeBuy} alt="demo welcome buy" />

          <div className="flex flex-col items-center gap-y-8 lg:items-start lg:gap-y-0">
            <h4 className="mb-6 hidden text-lg font-medium tracking-widest lg:block">CRYPTO EXCHANGE</h4>
            <h2 className="hidden text-[40px] font-medium leading-snug text-product-main lg:block">
              Buy and sell crypto in minutes
            </h2>

            <ul className="my-2 space-y-3 px-3 lg:my-14 lg:space-y-6">
              <li className="flex flex-col items-center gap-3 lg:flex-row">
                <span className="inline-block h-8 w-8 rounded-full border-[1.5px] border-product-main text-center text-xl text-product-main">
                  1
                </span>
                <p className="text-xl font-medium text-black/80 lg:text-2xl">Create your free Kraken account</p>
              </li>
              <li className="flex flex-col items-center gap-3 lg:flex-row">
                <span className="inline-block h-8 w-8 rounded-full border-[1.5px] border-product-main text-center text-xl text-product-main">
                  2
                </span>
                <p className="text-xl font-medium text-black/80 lg:text-2xl">Connect your funding method</p>
              </li>
              <li className="flex flex-col items-center gap-3 lg:flex-row">
                <span className="inline-block h-8 w-8 rounded-full border-[1.5px] border-product-main text-center text-xl text-product-main">
                  3
                </span>
                <p className="text-xl font-medium text-black/80 lg:text-2xl">Buy and sell 185+ cryptocurrencies</p>
              </li>
            </ul>

            <Link href="/signup">
              <Button rounded variant="main">
                Buy crypto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* portfolio */}
      <Portfolio />

      {/* why */}
      <section className="mx-auto max-w-6xl px-8 py-20">
        <div className="mb-14 text-center">
          <h2 className="pt-2 text-[32px] font-medium tracking-wide text-product-main lg:text-[38px]">Why Kraken?</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-14">
          <div className="flex max-w-xs flex-col items-center text-center">
            <Image src={illustrationSimplicity} width={200} alt="simplicity" />
            <h3 className="mt-2 text-2xl font-medium">Simplicity</h3>
            <p className="leading-relaxed">
              Kraken makes it easy to buy and sell crypto using our{" "}
              <span className="font-bold text-product-deep hover:underline">mobile apps</span>.
            </p>
          </div>
          <div className="flex max-w-xs flex-col items-center text-center">
            <Image src={illustrationEducation} width={200} alt="simplicity" />
            <h3 className="mt-2 text-2xl font-medium">Simplicity</h3>
            <p className="leading-relaxed">
              Not sure where to start? Head to our{" "}
              <span className="font-bold text-product-deep hover:underline">Learn Center</span> and learn about all
              things crypto.
            </p>
          </div>
          <div className="flex max-w-xs flex-col items-center text-center">
            <Image src={illustrationService} width={200} alt="simplicity" />
            <h3 className="mt-2 text-2xl font-medium">Service</h3>
            <p className="leading-relaxed">
              Find your answers instantly in our{" "}
              <span className="font-bold text-product-deep hover:underline">Support Center</span>. Or reach us 24/7/365
              on Live Chat, phone or by email.
            </p>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/signup">
            <Button rounded variant="main">
              Get started with Kraken
            </Button>
          </Link>
        </div>
      </section>

      {/* staking */}
      <section className="bg-product-light">
        <div className="mx-auto max-w-7xl space-y-14 px-8 py-16">
          <div className="text-center">
            <h3 className="text-sm font-medium uppercase tracking-widest sm:text-lg">Staking Crypto</h3>
            <h2 className="pt-2 text-[32px] font-medium tracking-wide text-product-main lg:text-[38px]">
              Earn crypto rewards
            </h2>
            <p className="mt-5">
              Earn up to 21% in rewards annually by staking your assets with Kraken. It only takes a few clicks to
              stake.*
            </p>
          </div>

          <div className="flex flex-col flex-wrap justify-center gap-6 sm:items-center sm:gap-8 md:flex-row md:gap-y-16">
            {stakingRewards.map(({ symbol, name, staking }) => (
              <div
                key={symbol}
                className="flex items-center justify-between sm:w-[270px] sm:flex-col sm:justify-start sm:rounded-lg sm:bg-white sm:p-6 sm:pt-9 sm:shadow-2xl sm:shadow-gray-700/10"
              >
                <div className="flex items-start gap-2 sm:flex-col sm:items-center">
                  <Crypto symbol={symbol} className="text-4xl sm:text-5xl" />
                  <div className="mt-1">
                    <p className="text-xl font-bold">
                      {name} <span className="opacity-30">{`(${symbol})`}</span>
                    </p>
                    <p className="text-xs sm:mt-4 sm:text-center sm:text-base sm:font-bold">Yearly rewards</p>
                  </div>
                </div>
                <p className="text-2xl text-product-darkgreen sm:mt-2">
                  {staking.reward}
                  <span className="text-sm">%</span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex w-full flex-col items-center gap-4 sm:max-w-[350px]">
              <Image src={iconCircles} width={58} alt="staking" />
              <p className="text-center text-xl font-medium md:text-2xl">
                12+ assets <br /> for staking
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-4 sm:max-w-[350px]">
              <Image src={iconDiamond} width={58} alt="staking" />
              <p className="text-center text-xl font-medium md:text-2xl">
                Up to 21% in <br /> yearly rewards
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-4 sm:max-w-[350px]">
              <Image src={iconCoins} width={58} alt="staking" />
              <p className="text-center text-xl font-medium md:text-2xl">
                $100M+ in rewards <br /> earned by clients
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/features/staking">
              <Button rounded variant="main">
                Start earning today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* pro */}
      <section className="bg-product-dark bg-darkglow text-white">
        <div className="mx-auto max-w-7xl px-8 pb-64 pt-16">
          <div className="pt-2 text-center">
            <h3 className="text-sm font-medium uppercase tracking-widest sm:text-lg">Kraken Pro</h3>
            <h2 className="pt-4 text-[32px] font-medium tracking-wide lg:text-[38px]">
              Trade spot, margin and stake. <br /> All in one powerful interface.
            </h2>
          </div>

          <div className="mt-14 hidden md:block">
            <Image src={demoPro} alt="pro" />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-10 lg:-mt-20">
            <div className="flex w-full flex-col items-center gap-3 sm:max-w-[350px]">
              <Image src={iconLeftRightWhite} width={58} alt="staking" />
              <p className="text-xl font-medium md:text-2xl">Low spreads</p>
              <p className="text-center">
                Lower your average <br /> cost per trade.
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-3 sm:max-w-[350px]">
              <Image src={iconCoinsWhite} width={58} alt="staking" />
              <p className="text-xl font-medium md:text-2xl">Deep liquidity across markets</p>
              <p className="text-center">
                Easily trade large volumes <br /> at stable prices.
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-3 sm:max-w-[350px]">
              <Image src={iconChartWhite} width={58} alt="staking" />
              <p className="text-xl font-medium md:text-2xl">High rate limits</p>
              <p className="text-center">
                Trade crypto fast with our robust, <br /> low latency API.
              </p>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <Link href="/signup">
              <Button rounded variant="light">
                Trade Crypto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* learn */}
      <section className="mx-auto -mt-32 max-w-7xl px-8">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex w-full flex-col items-center gap-3 rounded-lg border border-blue-300/10 bg-product-darkish px-7 py-12 text-white sm:max-w-[360px]">
            <div className="flex items-center gap-1">
              <Logo className="relative h-10 w-10 fill-white" />
              <span className="rounded-md bg-white px-2 py-1 font-sans text-2xl font-bold uppercase leading-none tracking-wide text-product-darkish">
                pro
              </span>
            </div>
            <p className="mt-4 text-center md:text-lg">
              Place advanced orders on-the-go <br /> with the Kraken Pro app.
            </p>
            <p className="mt-4 font-bold text-product-alt">Learn more</p>
          </div>

          <div className="flex w-full flex-col items-center gap-3 rounded-lg border border-blue-300/10 bg-product-darkish px-7 py-12 text-white sm:max-w-[360px]">
            <div className="flex items-center gap-1">
              <span className="rounded-md bg-white px-2 py-1 font-sans text-2xl font-bold uppercase leading-none tracking-wide text-product-darkish">
                margin trading
              </span>
            </div>
            <p className="mt-4 text-center md:text-lg">
              Trade with up <br /> to 5x leverage.*
            </p>
            <Link href="/features/margin-trading" className="mt-4 font-bold text-product-alt">
              Learn more
            </Link>
          </div>

          <div className="flex w-full flex-col items-center gap-3 rounded-lg border border-blue-300/10 bg-product-darkish px-7 py-12 text-white sm:max-w-[360px]">
            <div className="flex items-center gap-1">
              <Logo className="relative h-10 w-10 fill-white" />
              <span className="rounded-md bg-white px-2 py-1 font-sans text-2xl font-bold uppercase leading-none tracking-wide text-product-darkish">
                futures
              </span>
            </div>
            <p className="mt-4 text-center md:text-lg">
              Trade 50+ multi-collateral <br /> futures contracts.
            </p>
            <p className="mt-4 font-bold text-product-alt">Learn more</p>
          </div>
        </div>
      </section>

      {/* journey */}
      <CryptoJourney />

      {/* note */}
      <section className="bg-product-light px-8 py-6 text-zinc-600/80">
        <div className="mx-auto max-w-6xl space-y-4 text-center text-xs italic">
          <p>
            <a className="font-bold hover:underline">Margin,</a> <a className="font-bold hover:underline">futures</a>{" "}
            and <a className="font-bold hover:underline">off-chain staking</a> are subject to certain geographic
            limitations and eligibility criteria.
          </p>

          <p>
            Reward rates are subject to change and compliance with Kraken&apos;s terms and conditions. These materials
            are for general information purposes only and are not investment advice or a recommendation or solicitation
            to buy, sell, stake or hold any cryptoasset or to engage in any specific trading strategy. Some crypto
            products and markets are unregulated, and you may not be protected by government compensation and/or
            regulatory protection schemes. The unpredictable nature of the cryptoasset markets can lead to loss of
            funds. Tax may be payable on any return and/or on any increase in the value of your cryptoassets and you
            should seek independent advice on your taxation position. For more information, please see our{" "}
            <a className="font-bold hover:underline">Terms of Service</a> .
          </p>

          <p>
            Trading futures, derivatives and other instruments using leverage involves an element of risk and may not be
            suitable for everyone. Read our risk <a className="font-bold hover:underline">disclosure</a> to learn more.
          </p>
        </div>
      </section>
    </main>
  )
}
