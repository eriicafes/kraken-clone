import { NavLink } from "@/types/link"
import { Menu } from "@headlessui/react"
import Link from "next/link"
import { Fragment } from "react"
import { NavChevronIcon } from "./NavChevronIcon"

type Props = {
  links: NavLink[]
}

export function MobileNavLinks({ links }: Props) {
  return (
    <ul className="space-y-6 px-8 pb-24 pt-12 text-3xl font-bold">
      {links.map((link) => (
        <Fragment key={link.title}>
          {link.href ? (
            <li>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ) : (
            <Menu as="li">
              <Menu.Button className="flex w-full items-center justify-between outline-none">
                {({ open }) => (
                  <>
                    <span>{link.title}</span>
                    <NavChevronIcon open={open} />
                  </>
                )}
              </Menu.Button>
              <Menu.Items as="ul" className="space-y-2 py-6 text-xl outline-none">
                {link.children?.map((sublink) => (
                  <Menu.Item key={sublink.title} as="li">
                    <Link href={sublink.href}>{sublink.title}</Link>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          )}
        </Fragment>
      ))}
    </ul>
  )
}
