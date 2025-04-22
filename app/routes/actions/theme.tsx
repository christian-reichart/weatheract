import { data, type ActionFunctionArgs } from "react-router"
import * as cookie from "cookie" 
import { z } from "zod"

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const theme = formData.get("theme")
  const parsedTheme = z.literal('light').or(z.literal('dark')).or(z.literal('system')).safeParse(theme)
  if (!parsedTheme.success) return null

  const responseInit = {
    headers: { 'set-cookie': setTheme(parsedTheme.data) },
  };
  return data({ theme: parsedTheme.data }, responseInit)
}

export const themeCookieName = 'theme_setting'
export type Theme = 'light' | 'dark'

export function setTheme(theme: Theme | 'system') {
  if (theme === 'system') {
    return cookie.serialize(themeCookieName, '', { path: '/', maxAge: -1 })
  } else {
    return cookie.serialize(themeCookieName, theme, { path: '/', maxAge: 31536000 })
  }
}