import { createContext, useContext, useEffect, useState } from "react"

export type Theme = {
  activeTheme: ThemeValue
  activeSetting: ThemeSetting
}
export type ThemeValue = 'light' | 'dark'
export type ThemeSetting = 'light' | 'dark' | 'system'

const ThemeContext = createContext({ theme: { activeTheme: 'light', activeSetting: 'system' }, setThemeSetting: (themeSetting: ThemeSetting) => {} })

const isBrowser = typeof window !== 'undefined'

export function ThemeProvider({ children }: { children: React.ReactNode }) {

  const getSystemTheme = (): ThemeValue => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const getInitialTheme = (): Theme => {
    if (isBrowser) {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return { activeTheme: saved, activeSetting: saved }
      return { activeSetting: 'system', activeTheme: getSystemTheme() }
    }
    return { activeSetting: 'system', activeTheme: 'light' }
  }

  const [theme, setTheme] = useState<Theme>(getInitialTheme())

  const setThemeSetting = (themeSetting: ThemeSetting) => {
    setTheme({ activeSetting: themeSetting, activeTheme: themeSetting === 'system' ? getSystemTheme() : themeSetting })
  }

  useEffect(() => {
    if (theme.activeSetting === 'system') {
      localStorage.removeItem('theme')
      document.documentElement.classList.toggle('dark', theme.activeTheme === 'dark')
    } else {
      localStorage.setItem('theme', theme.activeSetting)
      document.documentElement.classList.toggle('dark', theme.activeSetting === 'dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setThemeSetting }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
