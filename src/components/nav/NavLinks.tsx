import { NavLink } from "@/types/link"
import Link from "next/link"
import { Fragment } from "react"

type NavLinksProps = {
  links: NavLink[]
  popover: string | undefined
  popoverRef: (node: HTMLElement | null) => void
  setPopover: (popover: string | undefined) => void
}

export function NavLinks({ links, popover, popoverRef, setPopover }: NavLinksProps) {
  return (
    <ul className="hidden items-center gap-x-8 text-[13px] font-bold lg:flex">
      {links.map((link) => (
        <Fragment key={link.title}>
          {link.href ? (
            <li>
              <Link
                className="underline decoration-transparent decoration-2 underline-offset-8 transition-colors duration-200 hover:decoration-white"
                href={link.href}
              >
                {link.title}
              </Link>
            </li>
          ) : (
            <li
              onMouseEnter={() => setPopover(link.title)}
              onMouseLeave={() => setPopover(undefined)}
              className="group relative"
            >
              <button className="underline decoration-transparent decoration-2 underline-offset-8 outline-none transition-colors duration-200 group-hover:decoration-white">
                {link.title}
              </button>
              {popover === link.title && (
                <ul
                  ref={popoverRef}
                  className="absolute left-0 top-0 flex max-h-72 w-96 flex-col flex-wrap gap-y-2 pb-8 pt-12 text-base"
                >
                  {link.children?.map((sublink) => (
                    <li key={sublink.title}>
                      <Link className="block font-bold text-white/70 hover:text-white/50" href={sublink.href}>
                        {sublink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  )
}

type NavLinksOverlayProps = {
  popover: string | undefined
  popoverSize: { width: number; height: number }
}

export function NavLinksOverlay({ popover, popoverSize }: NavLinksOverlayProps) {
  if (!popover) return null

  return (
    <div className="absolute inset-0 -z-40 hidden h-screen  pt-[100px] lg:block">
      <div style={{ height: popoverSize.height - 32 }} className="bg-product-main absolute inset-x-0 top-[100px] " />
      <div className="absolute inset-0 top-[100px] -z-10 bg-black/70" />
    </div>
  )
}
