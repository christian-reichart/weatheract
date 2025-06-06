// Mainly build with https://www.mattstobbs.com/remix-dark-mode-2024/

import { getHintUtils } from '@epic-web/client-hints'
import { clientHint as colourSchemeHint } from '@epic-web/client-hints/color-scheme'
import { useRequestInfo } from './useRequestInfo'
 
const hintsUtils = getHintUtils({ theme: colourSchemeHint })

export const { getHints } = hintsUtils

/**
 * @returns inline script element that checks for client hints and sets cookies
 * if they are not set then reloads the page if any cookie was set to an
 * inaccurate value.
 */
export function ClientHintCheck() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: hintsUtils.getClientHintCheckScript(),
      }}
    />
  )
}

/**
 * @returns an object with the client hints and their values
 */
export function useHints() {
  const requestInfo = useRequestInfo()
  return requestInfo?.hints
}

