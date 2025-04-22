import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router"

import type { Route } from "./+types/root"
import "./app.css";
import { Header } from "./components/layout/Header"
import { twMerge } from "tailwind-merge"
import { ClientHintCheck, getHints } from "./theme/ClientHintCheck"
import { useTheme } from "./theme/useTheme"
import * as cookie from 'cookie'
import { themeCookieName } from "./routes/actions/theme";

export function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get('cookie')
  const parsed = cookieHeader
    ? cookie.parse(cookieHeader)[themeCookieName]
    : 'light'
  const theme = (parsed === 'light' || parsed === 'dark') ? parsed : null
  return {
    requestInfo: {
      hints: getHints(request),
      userPrefs: {
        theme,
      }
    },
  }
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Outfit:wght@100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Outfit:wght@100..900&display=swap",
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const theme = useTheme()
  return (
    <html lang="de" className={theme}>
      <head>
        <ClientHintCheck />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-family-plain bg-secondary text-primary dark:bg-primary dark:text-secondary">
        <Header />
        <main className="px-4 container mx-auto">
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
      <Outlet />
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
