type NavLinkChild = { title: string; href: string; children?: never }
type NavLinkParent = { title: string; href?: never; children: NavLinkChild[] }
export type NavLink = NavLinkChild | NavLinkParent
