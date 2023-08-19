import chevron from "@/assets/images/chevron.png"
import clsx from "clsx"
import Image from "next/image"

type Props = {
  open: boolean
}

export function NavChevronIcon({ open }: Props) {
  return (
    <div
      className={clsx("relative h-7 w-7 transform-gpu duration-300", {
        "rotate-180": open,
      })}
    >
      <div className="absolute inset-0 -z-10 m-0 h-6 w-6 bg-white/50"></div>
      <Image loading="eager" width={26} height={26} src={chevron} alt="chevron" />
    </div>
  )
}
