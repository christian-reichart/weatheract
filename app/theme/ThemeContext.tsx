import { createContext, useContext, useEffect, useState } from "react"

type Theme = 'light' | 'dark'

const ThemeContext = createContext({ theme: 'light', setTheme: (theme: Theme) => {} })

const isBrowser = typeof window !== 'undefined'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const getInitialTheme = (): Theme => {
    if (isBrowser) {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  }

  const [theme, setTheme] = useState<Theme>(getInitialTheme())

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
