import { Crypto } from "@/components/icons"
import { tokens } from "@/data/tokens"
import { useDimensions } from "@/hooks/use-dimensions"
import { animate, motion, useIsomorphicLayoutEffect, useMotionValue } from "framer-motion"
import { useRef, useState } from "react"

const rows = [
  {
    items: [
      tokens.DOT,
      tokens.DOGE,
      tokens.USDC,
      tokens.UNI,
      tokens.BTC,
      tokens.ETH,
      tokens.ADA,
      tokens.USDT,
      tokens.XRP,
      tokens.SOL,
    ],
    duration: 100,
    offset: 32,
  },
  {
    items: [
      tokens.FIL,
      tokens.TRX,
      tokens.XLM,
      tokens.LINK,
      tokens.LTC,
      tokens.BCH,
      tokens.ALGO,
      tokens.WBTC,
      tokens.XMR,
      tokens.MATIC,
    ],
    duration: 90,
    offset: 72,
  },
  {
    items: [
      tokens.GRT,
      tokens.AXS,
      tokens.KSM,
      tokens.ETC,
      tokens.WAVES,
      tokens.ATOM,
      tokens.DAI,
      tokens.XTZ,
      tokens.AAVE,
      tokens.EOS,
    ],
    duration: 95,
    offset: 32,
  },
  {
    items: [
      tokens.SNX,
      tokens.MANA,
      tokens.ICX,
      tokens.ENJ,
      tokens.MKR,
      tokens.COMP,
      tokens.DASH,
      tokens.CHZ,
      tokens.SUSHI,
      tokens.ZEC,
    ],
    duration: 110,
    offset: -12,
  },
]

type MotionPillsProps = {
  width: number
  height: number
  gapX: number
  gapY: number
}

export function MotionPills({ height, gapX, gapY }: MotionPillsProps) {
  const [playing, setPlaying] = useState(true)

  return (
    <div
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
      style={{ rowGap: gapY }}
      className="mask-left-right flex flex-col overflow-hidden"
    >
      {rows.map((row, i) => (
        <MotionPillsRow key={i} row={row} height={height} gap={gapX} playing={playing} />
      ))}
    </div>
  )
}

type MotionPillsRowProps = {
  row: (typeof rows)[number]
  height: number
  gap: number
  playing: boolean
}

function MotionPillsRow({ row, height, gap, playing }: MotionPillsRowProps) {
  const ref = useRef<HTMLDivElement>(null)
  const dimensions = useDimensions(ref)

  return (
    <div ref={ref} style={{ height, columnGap: gap }} className="flex flex-row items-center">
      {row.items.map(({ name, symbol }, i) => (
        <MotionPill
          key={symbol}
          title={name}
          symbol={symbol}
          index={i}
          height={height}
          gap={gap}
          offset={row.offset}
          length={row.items.length}
          duration={row.duration}
          containerWidth={dimensions.width}
          playing={playing}
          containerX={dimensions.x}
          containerScrollWidth={dimensions.scrollWidth}
        />
      ))}
    </div>
  )
}

type MotionPillProps = {
  title: string
  symbol: string
  index: number
  height: number
  gap: number
  offset?: number
  length: number
  duration: number
  containerWidth: number
  playing: boolean
  containerX: number
  containerScrollWidth: number
}

function MotionPill({
  title,
  symbol,
  index,
  height,
  gap,
  offset = 0,
  length,
  duration,
  containerWidth,
  playing,
  containerX,
  containerScrollWidth,
}: MotionPillProps) {
  const x = useMotionValue(offset)
  const ref = useRef<HTMLDivElement>(null)
  const dimensions = useDimensions(ref)

  useIsomorphicLayoutEffect(() => {
    if (containerWidth === 0 || !playing || playing) return

    const distanceToContainerEnd = containerX + containerWidth - dimensions.x + 0
    const overflowContainerWidth = containerScrollWidth - containerWidth
    const overflowContainerX = containerX - overflowContainerWidth

    const start = -(dimensions.x - overflowContainerX)
    const iter = (duration / containerWidth) * 1000
    const initial = x.get()
    let i = initial

    const interval = setInterval(() => {
      if (i >= distanceToContainerEnd) {
        const excess = i - distanceToContainerEnd
        i = start + excess + gap
        x.set(i)
      }
      animate(x, i, { ease: "linear" })
      i++
    }, iter)

    return () => clearInterval(interval)
  }, [
    x,
    containerWidth,
    playing,
    offset,
    gap,
    index,
    length,
    containerX,
    containerWidth,
    containerScrollWidth,
    dimensions,
  ])

  return (
    <motion.div
      ref={ref}
      className="text-product-main flex shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-white px-6 py-2 text-xl font-bold transition-opacity duration-300 hover:opacity-70"
      style={{ height, x }}
    >
      <Crypto symbol={symbol} className="text-2xl"></Crypto>
      <span>{title}</span>
    </motion.div>
  )
}
