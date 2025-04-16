import { twMerge } from "tailwind-merge"

export function Card({ children, className, ...other }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={twMerge("bg-white rounded-lg shadow-lg dark:bg-primary p-4", className)} {...other}>
      {children}
    </div>
  );
}