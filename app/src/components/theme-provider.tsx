import * as React from "react"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: string
  storageKey?: string
  enableSystem?: boolean
}

type Theme = "dark" | "light" | "system"

interface ThemeProviderContext {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeProviderContext = React.createContext<ThemeProviderContext | null>(null)

export function useTheme() {
  const context = React.useContext(ThemeProviderContext)
  if (context === null) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const root = window.document.documentElement

    // Init from storage
    const storedTheme = localStorage.getItem(storageKey) as Theme | null
    if (storedTheme) {
      setTheme(storedTheme)
      return
    }
  }, [])

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    let resolvedTheme: "light" | "dark"

    if (theme === "system" && enableSystem) {
      resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    } else {
      resolvedTheme = theme === "system" ? "light" : theme as "light" | "dark"
    }

    root.classList.add(resolvedTheme)
  }, [theme, enableSystem])

  const setThemeFunc = React.useCallback((newTheme: Theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, newTheme)
    }
    setTheme(newTheme)
  }, [storageKey])

  const contextValue = React.useMemo(() => ({
    theme,
    setTheme: setThemeFunc
  }), [theme, setThemeFunc])

  return (
    <ThemeProviderContext.Provider value={contextValue} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

