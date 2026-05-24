import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  [
    'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5',
    'font-sans text-xs font-medium',
    'transition-colors duration-150',
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  ],
  {
    variants: {
      variant: {
        default:
          'border-primary/30 bg-primary/15 text-primary hover:bg-primary/25',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive/15 text-destructive hover:bg-destructive/25',
        outline:
          'border-border text-foreground hover:bg-muted',
        success:
          'border-transparent bg-matcha text-sumi hover:bg-matcha/85',
        warning:
          'border-transparent bg-aki text-sumi hover:bg-aki/85',
        info:
          'border-transparent bg-sora text-sumi hover:bg-sora/85',
        sakura:
          'border-transparent bg-sakura text-sumi hover:bg-sakura/85',
        fuji:
          'border-transparent bg-fuji text-sumi hover:bg-fuji/85',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

function Badge({ className, variant, asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : 'span'
  return <Comp className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
