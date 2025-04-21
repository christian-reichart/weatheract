import { useTheme, type ThemeSetting, type ThemeValue } from "./ThemeContext"

export function ThemeSelect() {
  const { theme, setThemeSetting } = useTheme()
  const selectedValue = theme.activeSetting

  return (
    <select
      className="text-primary bg-secondary text-sm rounded-lg block w-full p-2.5 dark:bg-primary-light dark:text-secondary focus:outline-2 focus:outline-offset-0 focus:outline-signal shadow-md"
      defaultValue={selectedValue}
      onChange={event => setThemeSetting(event.target.value as ThemeSetting)}
    >
      <option value="system" >System</option>
      <option value="light" >Hell</option>
      <option value="dark" >Dunkel</option>
    </select>
  )
}