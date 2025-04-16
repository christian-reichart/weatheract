import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="flex items-center justify-center p-4 md:p-6 lg:p-8">
      <Logo className="h-6 w-auto md:h-8 lg:h-12" />
    </header>
  )
}