import { twMerge } from "tailwind-merge"
import { Card } from "./Card"

export const Dialog = ({ children, open, onClose, ...other }: { open: boolean, onClose: () => void, children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  if (!open) return null
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/50 z-5" onClick={onClose}>
      <Card onClick={e => e.stopPropagation()} {...other}>
        {children}
      </Card>
    </div>
  )
}