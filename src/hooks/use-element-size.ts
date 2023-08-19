import { useIsomorphicLayoutEffect } from "framer-motion"
import { useCallback, useRef, useState } from "react"

export function useElementSize<T extends HTMLElement>() {
  const elemRef = useRef<T>()
  const [size, setSize] = useState({ width: 0, height: 0 })

  const ref = useCallback((el: T | null) => {
    if (el) {
      const { width, height } = el.getBoundingClientRect()
      setSize({ width, height })
      elemRef.current = el
    }
  }, [])

  const handleResize = useCallback(() => {
    if (elemRef.current) {
      const { width, height } = elemRef.current.getBoundingClientRect()
      setSize({ width, height })
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  return [ref, size] as const
}
