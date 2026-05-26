import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'font-sans font-medium tracking-wide',
    'rounded-md border border-transparent',
    'transition-all duration-150 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'select-none cursor-pointer no-underline',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/85 hover:text-primary-foreground active:scale-95',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground active:scale-95',
        outline:
          'border-border bg-transparent hover:bg-accent hover:text-accent-foreground active:scale-95',
        ghost: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground active:scale-95',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/85 hover:text-destructive-foreground active:scale-95',
        link: 'text-primary underline underline-offset-4 hover:text-primary/80 p-0 h-auto',
        sakura: 'bg-sakura text-sumi hover:bg-sakura/85 hover:text-sumi active:scale-95',
        matcha: 'bg-matcha text-sumi hover:bg-matcha/85 hover:text-sumi active:scale-95',
        sora: 'bg-sora text-sumi hover:bg-sora/85 hover:text-sumi active:scale-95',
        fuji: 'bg-fuji text-sumi hover:bg-fuji/85 hover:text-sumi active:scale-95',
      },
      size: {
        xs: 'h-7 px-2.5 text-xs',
        sm: 'h-8 px-3 text-sm',
        default: 'h-10 px-5 text-sm',
        lg: 'h-12 px-7 text-base',
        xl: 'h-14 px-9 text-lg',
        icon: 'h-10 w-10 p-0',
        'icon-sm': 'h-8 w-8 p-0',
        'icon-lg': 'h-12 w-12 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    const isDisabled = disabled ?? loading

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...(asChild ? {} : { disabled: isDisabled })}
        aria-disabled={isDisabled || undefined}
        {...props}
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : leftIcon}
        <Slottable>{children}</Slottable>
        {!loading && rightIcon}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
