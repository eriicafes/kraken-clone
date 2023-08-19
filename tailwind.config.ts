import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        product: {
          main: "#5741d9",
          lightmain: "#2824b6",
          deep: "#5841d8",
          deeper: "#1e045d",
          lightblue: "#0385e6",
          lightpink: "#dca3c8",
          darkpurple: "#43196f",
          alt: "#eeecfb",
          light: "#fafaff",
          dark: "#191b27",
          darkish: "#202333",
          gray: "#fbfbfb",
          darkgreen: "#3b9b4a",
          lightgreen: "#67C570",
          red: "#FB7273",
        },
      },
      fontFamily: {
        celias: ["var(--font-celias)", ...fontFamily.sans],
      },
      backgroundPosition: {
        full: "100% 100%",
      },
      backgroundImage: {
        darkglow: `
        radial-gradient(circle at center top, 
          rgb(49, 35, 76) 10%, 
          rgb(49, 35, 76) 0%, 
          transparent 50%, 
          transparent 100%
          ),
        linear-gradient(rgb(25, 27, 39), rgb(25, 27, 39))
        `,
      },
    },
  },
  plugins: [],
}
export default config
