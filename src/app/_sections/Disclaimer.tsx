import { ReactNode } from "react"

type Props = {
  title: string
  children: ReactNode
}

export function Disclaimer({ title, children }: Props) {
  return (
    <section className="px-8 py-24 md:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="bg-product-gray border px-12 py-10 text-sm">
          <h4 className="mb-4 font-bold">{title}</h4>
          <div className="leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  )
}
