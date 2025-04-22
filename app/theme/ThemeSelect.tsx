import { useFetcher } from "react-router"
import { useRequestInfo } from "~/theme/useRequestInfo"

export function ThemeSelect() {
  const userPreference = useRequestInfo()?.userPrefs.theme
  const fetcher = useFetcher()
  const defaultVal = userPreference ?? 'system'

  return (
    <fetcher.Form method="post" action="/actions/theme" className="w-full">
      <select
        name="theme"
        className="text-primary bg-secondary text-sm rounded-lg block w-full p-2.5 dark:bg-primary-light dark:text-secondary focus:outline-2 focus:outline-offset-0 focus:outline-signal shadow-md"
        defaultValue={defaultVal}
        onChange={(event) => fetcher.submit(event.currentTarget.form)}
      >
        <option value="system" >System</option>
        <option value="light" >Hell</option>
        <option value="dark" >Dunkel</option>
      </select>
    </fetcher.Form>
  )
}