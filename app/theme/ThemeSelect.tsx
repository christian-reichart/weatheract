import { useTheme, type ThemeSetting, type ThemeValue } from "./ThemeContext"

export function ThemeSelect() {
  const { theme, setThemeSetting } = useTheme()
  const selectedValue = theme.activeSetting

  return (
    <select
      className="text-primary bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-signal focus:border-signal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-signal dark:focus:border"
      defaultValue={selectedValue}
      onChange={event => setThemeSetting(event.target.value as ThemeSetting)}
    >
      <option value="system" >System</option>
      <option value="light" >Hell</option>
      <option value="dark" >Dunkel</option>
    </select>
  )
}