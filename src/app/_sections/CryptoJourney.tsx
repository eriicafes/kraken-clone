import assetsGirl from "@/assets/images/illustration-assets-girl.webp"
import { Button } from "@/components/ui"
import Image from "next/image"
import Link from "next/link"

export function CryptoJourney() {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-16 xl:px-0 xl:pt-32">
      <div className="flex flex-col items-center gap-2 xl:flex-row">
        <div className="mb-14 text-center xl:w-3/5 xl:text-start">
          <h2 className="text-product-main text-2xl font-medium tracking-wide md:text-[32px] lg:text-[38px]">
            Start your crypto journey
          </h2>
          <h3 className="mt-4 text-xl md:text-3xl">
            Kraken makes it easy to get started. Sign up today to{" "}
            <span className="font-bold">buy and sell 100+ cryptocurrencies.</span>
          </h3>

          <div className="mt-8 flex justify-center xl:justify-start">
            <Link href="/signup">
              <Button rounded variant="main">
                Get started with Kraken
              </Button>
            </Link>
          </div>
        </div>

        <div className="h-80 xl:h-auto xl:w-2/5">
          <Image className="h-full w-full object-cover object-center" src={assetsGirl} alt="assets girl" />
        </div>
      </div>
    </section>
  )
}
