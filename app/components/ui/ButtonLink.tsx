import { Link, type LinkProps } from "react-router";
import { twMerge } from "tailwind-merge";

export function ButtonLink(props: LinkProps & { children: React.ReactNode }) {
  const { className, children } = props
  return (
    <Link className={twMerge('bg-white dark:bg-primary shadow py-2 px-4 rounded-md', className)} {...props}>
      {children}
    </Link>
  )
}