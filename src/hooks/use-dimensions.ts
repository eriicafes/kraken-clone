import { useIsomorphicLayoutEffect } from "framer-motion"
import { RefObject, useMemo, useState } from "react"

type Dimensions = {
  x: number
  y: number
  width: number
  height: number
  scrollWidth: number
  scrollHeight: number
}

const getDimensions = (el: HTMLElement): Dimensions => {
  const { width, height, x, y } = el.getBoundingClientRect()

  return {
    x,
    y,
    width,
    height,
    scrollWidth: el.scrollWidth,
    scrollHeight: el.scrollHeight,
  }
}

export function useDimensions<T extends HTMLElement>(ref: RefObject<T>) {
  const [dimensions, setDimensions] = useState<Dimensions>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    scrollWidth: 0,
    scrollHeight: 0,
  })

  useIsomorphicLayoutEffect(() => {
    const resize = () => {
      if (!ref.current) return
      setDimensions(getDimensions(ref.current))
    }
    resize()

    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  const memoedDimensions = useMemo(() => dimensions, [dimensions])

  return memoedDimensions
}
