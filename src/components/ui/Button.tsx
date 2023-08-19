import clsx from "clsx"
import { ComponentPropsWithoutRef, ReactNode } from "react"
import { Spinner } from "../icons"

type Props = {
  children: ReactNode
  loading?: boolean
  className?: string
  full?: boolean
  rounded?: boolean
  bold?: boolean
  sm?: boolean
  variant?: "main" | "light" | "main-outline" | "light-outline"
  noFade?: boolean
  noPadding?: boolean
  noBorder?: boolean
  noRadius?: boolean
} & ComponentPropsWithoutRef<"button">

export function Button({
  children,
  loading,
  className,
  full,
  rounded,
  bold,
  sm,
  variant,
  noFade,
  noPadding,
  noBorder,
  noRadius,
  ...props
}: Props) {
  return (
    <button
      disabled={loading}
      {...props}
      className={clsx([
        "flex items-center justify-center transition duration-300",
        !noFade && "hover:opacity-70",
        !noBorder && "border-2 ",
        full && "w-full",
        bold ? "font-bold" : "font-medium",
        rounded ? "rounded-full" : noRadius ? "" : "rounded-sm",
        sm ? "px-3 py-2 text-[11px]" : noPadding ? "" : "px-8 py-3",
        variant === "main" && "border-product-main bg-product-main text-white",
        variant === "main-outline" && "border-product-main text-product-main bg-transparent",
        variant === "light" && "text-product-main border-white bg-white",
        variant === "light-outline" && "border-white bg-transparent text-white",
        className,
      ])}
    >
      {loading ? <Spinner className="h-6 w-6" /> : children}
    </button>
  )
}
