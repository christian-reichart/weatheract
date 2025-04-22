import { useHints } from "~/theme/ClientHintCheck"
import { useRequestInfo } from "~/theme/useRequestInfo"

export function useTheme() {
  const hints = useHints()
  const requestInfo = useRequestInfo()
  return requestInfo?.userPrefs.theme ?? hints?.theme ?? 'light'
}

