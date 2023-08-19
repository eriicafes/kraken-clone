import localFont from "next/font/local"

export const celias = localFont({
  src: [
    {
      path: "./Celias-Thin.woff2",
      weight: "100",
    },
    {
      path: "./Celias-Light.woff2",
      weight: "300",
    },
    {
      path: "./Celias.woff2",
      weight: "400",
    },
    {
      path: "./Celias-Medium.woff2",
      weight: "500",
    },
    {
      path: "./Celias-Bold.woff2",
      weight: "700",
    },
    {
      path: "./Celias-Black.woff2",
      weight: "900",
    },
  ],
  display: "swap",
})
