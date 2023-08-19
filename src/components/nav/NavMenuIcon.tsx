import { motion } from "framer-motion"

type Props = {
  open: boolean
  toggle: () => void
}

export function NavMenuIcon({ open, toggle }: Props) {
  return (
    <div onClick={toggle} className="relative h-[17px] w-[23px]">
      <motion.span
        className="absolute h-[3px] w-full bg-white"
        initial={{ y: 0 }}
        animate={{
          y: open ? 7 : 0,
          rotate: open ? 45 : 0,
        }}
        transition={{
          delay: open ? 0.3 : 0,
        }}
      />
      <motion.span
        className="absolute h-[3px] w-full bg-white"
        initial={{ y: 7 }}
        animate={{
          y: open ? 7 : 7,
          rotate: open ? -45 : 0,
        }}
        transition={{
          delay: open ? 0.3 : 0,
        }}
      />
      <motion.span
        className="absolute h-[3px] w-full bg-white"
        initial={{ y: 14 }}
        animate={{
          y: open ? 0 : 14,
          opacity: open ? 0 : 1,
        }}
        transition={{
          type: "tween",
        }}
      />
    </div>
  )
}
