import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default:
          'bg-background border-border text-foreground',
        info:
          'bg-sora/20 border-sora/50 text-foreground [&>svg]:text-sora',
        success:
          'bg-matcha/20 border-matcha/50 text-foreground [&>svg]:text-matcha',
        warning:
          'bg-aki/20 border-aki/50 text-foreground [&>svg]:text-aki',
        destructive:
          'bg-destructive/10 border-destructive/30 text-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

interface AlertRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const AlertRoot = React.forwardRef<HTMLDivElement, AlertRootProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
  ),
)
AlertRoot.displayName = 'AlertRoot'

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('font-serif font-semibold leading-none tracking-tight mb-1', className)}
      {...props}
    />
  ),
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm leading-relaxed', className)} {...props} />
  ),
)
AlertDescription.displayName = 'AlertDescription'

export interface AlertProps extends VariantProps<typeof alertVariants> {
  /** A single icon element (rendered to the left). */
  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  /** Extra body content, rendered after the description. */
  children?: React.ReactNode
  className?: string
}

const Alert = ({ variant, icon, title, description, children, className }: AlertProps) => (
  <AlertRoot variant={variant} className={className}>
    {icon}
    {title ? <AlertTitle>{title}</AlertTitle> : null}
    {description ? <AlertDescription>{description}</AlertDescription> : null}
    {children}
  </AlertRoot>
)
Alert.displayName = 'Alert'

export { Alert }
