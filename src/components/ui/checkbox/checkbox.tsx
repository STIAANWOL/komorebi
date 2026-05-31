import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Label } from '../label'

export interface CheckboxProps extends React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> {
  indeterminate?: boolean
  error?: boolean
  errorText?: string
  label?: React.ReactNode
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, indeterminate, checked, error, errorText, label, id, ...props }, ref) => {
    const generatedId = React.useId()
    const errorId = React.useId()
    const resolvedId = id ?? (label || errorText ? generatedId : undefined)

    const control = (
      <CheckboxPrimitive.Root
        ref={ref}
        id={resolvedId}
        checked={indeterminate ? 'indeterminate' : checked}
        aria-invalid={errorText ? true : props['aria-invalid']}
        aria-describedby={errorText ? errorId : props['aria-describedby']}
        className={cn(
          'peer h-4 w-4 shrink-0 cursor-pointer rounded-sm border',
          'ring-offset-background transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground',
          'data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:text-primary-foreground',
          error
            ? 'border-destructive focus-visible:ring-destructive/50'
            : 'border-input',
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
          {indeterminate ? <Minus className="h-3 w-3" /> : <Check className="h-3 w-3" />}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )

    if (!label && !errorText) return control

    return (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          {control}
          {label && <Label htmlFor={resolvedId}>{label}</Label>}
        </div>
        {errorText && (
          <p id={errorId} className="font-sans text-xs leading-tight text-destructive">
            {errorText}
          </p>
        )}
      </div>
    )
  },
)
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
