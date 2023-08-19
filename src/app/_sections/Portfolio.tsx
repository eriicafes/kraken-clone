"use client"

import { Button } from "@/components/ui"
import dynamic from "next/dynamic"
import Link from "next/link"

const MotionPills = dynamic(() => import("../../containers/MotionPills").then((mod) => mod.MotionPills))

export function Portfolio() {
  return (
    <section className="bg-[url('/images/bg-home-portfolio.jpeg')] bg-cover bg-center py-20">
      <div className="text-center">
        <h2 className="mb-14 pt-2 text-[32px] font-medium tracking-wide text-product-main lg:text-[38px]">
          Build your crypto portfolio
        </h2>
      </div>

      <MotionPills width={160} height={52} gapX={28} gapY={36} />

      <div className="mt-10 flex justify-center">
        <Link href="/signup">
          <Button rounded variant="main">
            Buy crypto
          </Button>
        </Link>
      </div>
    </section>
  )
}
