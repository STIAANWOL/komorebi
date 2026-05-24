import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

const headingVariants = cva('font-serif font-semibold leading-tight tracking-tight', {
  variants: {
    level: {
      1: 'text-4xl md:text-5xl',
      2: 'text-3xl md:text-4xl',
      3: 'text-2xl md:text-3xl',
      4: 'text-xl md:text-2xl',
      5: 'text-lg md:text-xl',
      6: 'text-base md:text-lg',
    },
    muted: {
      true: 'text-muted-foreground',
      false: 'text-foreground',
    },
  },
  defaultVariants: {
    level: 2,
    muted: false,
  },
})

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  asChild?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, muted, asChild, as, children, ...props }, ref) => {
    const lvl = level ?? 2
    const Tag: React.ElementType = asChild ? Slot : (as ?? (`h${lvl}` as const))
    return (
      <Tag ref={ref} className={cn(headingVariants({ level: lvl, muted }), className)} {...props}>
        {children}
      </Tag>
    )
  },
)
Heading.displayName = 'Heading'

export { Heading, headingVariants }
