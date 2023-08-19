import { Button } from "@/components/ui"
import Link from "next/link"

export default function NotFound() {
  return (
    <section className="px-8 pb-32 pt-24 text-product-main md:px-20">
      <div className="mx-auto max-w-5xl">
        <h3 className="mb-4 text-lg font-bold">404</h3>
        <h2 className="max-w-2xl text-3xl font-bold leading-tight lg:text-[40px] lg:font-black">Page Not Found</h2>
        <div className="mt-8">
          <Link href="/">
            <Button rounded bold variant="main">
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
