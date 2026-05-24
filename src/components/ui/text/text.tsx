import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

const textVariants = cva('font-sans', {
  variants: {
    size: {
      xs:   'text-xs',
      sm:   'text-sm',
      base: 'text-base',
      lg:   'text-lg',
      xl:   'text-xl',
    },
    variant: {
      default: 'text-foreground',
      muted:   'text-muted-foreground',
      subtle:  'text-muted-foreground/70',
      lead:    'text-muted-foreground leading-relaxed',
    },
    weight: {
      normal:   'font-normal',
      medium:   'font-medium',
      semibold: 'font-semibold',
      bold:     'font-bold',
    },
  },
  defaultVariants: {
    size: 'base',
    variant: 'default',
    weight: 'normal',
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean
  as?: 'p' | 'span' | 'div' | 'label' | 'small'
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, variant, weight, asChild, as = 'p', children, ...props }, ref) => {
    const Tag: React.ElementType = asChild ? Slot : as
    return (
      <Tag ref={ref} className={cn(textVariants({ size, variant, weight }), className)} {...props}>
        {children}
      </Tag>
    )
  },
)
Text.displayName = 'Text'

export { Text, textVariants }
