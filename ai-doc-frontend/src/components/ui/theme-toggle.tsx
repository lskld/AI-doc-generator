"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 z-50 inline-flex items-center justify-center rounded-md p-2.5 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-neutral-800 dark:text-neutral-100" />
      ) : (
        <MoonIcon className="h-5 w-5 text-neutral-800 dark:text-neutral-100" />
      )}
    </button>
  )
}
