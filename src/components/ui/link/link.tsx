import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const linkVariants = cva(
  [
    'inline-flex items-center gap-1',
    'font-sans rounded-sm',
    'transition-colors duration-150 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'cursor-pointer',
  ],
  {
    variants: {
      tone: {
        default: 'text-primary underline underline-offset-4 hover:text-primary/80',
        muted: 'text-muted-foreground underline underline-offset-4 hover:text-foreground',
        subtle:
          'text-muted-foreground no-underline underline-offset-4 hover:text-foreground hover:underline',
      },
    },
    defaultVariants: {
      tone: 'default',
    },
  },
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
  asChild?: boolean
  /** Force the external treatment (target/rel + icon). Auto-detected from an http(s) href when omitted. */
  external?: boolean
  /** Show the trailing ↗ icon. Defaults to true when the link is external. */
  showExternalIcon?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { className, tone, asChild = false, external, showExternalIcon, href, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'a'
    const isExternal = external ?? (typeof href === 'string' && /^https?:\/\//i.test(href))
    const showIcon = showExternalIcon ?? isExternal

    return (
      <Comp
        ref={ref}
        href={href}
        className={cn(linkVariants({ tone }), className)}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        <Slottable>{children}</Slottable>
        {showIcon && <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
      </Comp>
    )
  },
)
Link.displayName = 'Link'

export { Link, linkVariants }
