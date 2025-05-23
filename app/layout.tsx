import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "a FastAPI notes app",
  description: "FastAPI + Sqlite + WebSocket",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      // className="dark bg-zinc-950 prose prose-invert mx-auto py-24 max-w-5xl px-4"
      className="dark bg-zinc-950 prose prose-invert py-24 max-w-5xl px-4"
    >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
