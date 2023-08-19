"use client"

import { Logo } from "@/components/icons"
import { MobileNavLinks, NavLinks, NavLinksOverlay, NavMenuIcon } from "@/components/nav"
import { Button } from "@/components/ui"
import { useElementSize } from "@/hooks/use-element-size"
import { NavLink } from "@/types/link"
import { Dialog } from "@headlessui/react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export function Header({ navLinks }: { navLinks: NavLink[] }) {
  const [navOpen, setNavOpen] = useState(false)
  const [popover, setPopover] = useState<string>()
  const [popoverRef, popoverSize] = useElementSize<HTMLElement>()

  return (
    <header className="bg-product-main relative z-20 flex items-center px-8 py-5 text-white lg:px-10 lg:py-8">
      {/* logo */}
      <Link href="/" className="mr-12 inline-flex cursor-pointer items-baseline gap-[2px]">
        <Logo className="relative -bottom-[2px] h-7 w-7 fill-white" />
        <span className="text-3xl font-medium">Kraken</span>
      </Link>

      <nav className="flex flex-1 items-center justify-end gap-x-16 lg:justify-between">
        {/* nav links */}
        <NavLinks links={navLinks} popover={popover} setPopover={setPopover} popoverRef={popoverRef} />

        {/* nav cta */}
        <ul className="hidden items-center gap-x-4 lg:flex">
          <li>
            <Link href="/signin">
              <Button rounded sm bold variant="light-outline">
                Sign in
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <Button rounded sm bold variant="light">
                Create account
              </Button>
            </Link>
          </li>
        </ul>

        {/* nav mobile menu icon */}
        <div className="lg:hidden">
          <NavMenuIcon open={navOpen} toggle={() => setNavOpen(!navOpen)} />
        </div>
      </nav>

      {/* nav links overlay */}
      <NavLinksOverlay popover={popover} popoverSize={popoverSize} />

      {/* mobile nav */}
      <Dialog open={navOpen} onClose={() => {}} className="lg:hidden" static>
        <Dialog.Panel
          as={motion.div}
          className={`${navOpen ? "" : "hidden"} bg-product-main absolute inset-0 z-10 h-screen pt-[72px] text-white`}
          initial={{ opacity: 0 }}
          animate={{ opacity: navOpen ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        >
          <div className="flex h-full flex-col justify-between">
            <div className="overflow-scroll">
              {/* mobile nav links */}
              <MobileNavLinks links={navLinks} />
            </div>
            <div className="flex gap-2 bg-white p-8">
              <Link
                href="/signin"
                className="border-product-main text-product-main w-full rounded-full border-2 bg-transparent py-2 text-center text-[11px] font-bold"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="border-product-main bg-product-main w-full rounded-full border-2 py-2 text-center text-[11px] font-bold text-white"
              >
                Create account
              </Link>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
