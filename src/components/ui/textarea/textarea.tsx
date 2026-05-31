import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  errorText?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, errorText, ...props }, ref) => {
    const errorId = React.useId()
    const describedBy = errorText
      ? [props['aria-describedby'], errorId].filter(Boolean).join(' ')
      : props['aria-describedby']

    const field = (
      <textarea
        ref={ref}
        aria-invalid={errorText ? true : props['aria-invalid']}
        aria-describedby={describedBy}
        className={cn(
          'flex min-h-[100px] w-full rounded-md border bg-background px-3 py-2.5',
          'font-sans text-sm text-foreground',
          'placeholder:text-muted-foreground',
          'resize-none transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error
            ? 'border-destructive focus-visible:ring-destructive/50'
            : 'border-input hover:border-ring/50',
          className,
        )}
        {...props}
      />
    )

    if (!errorText) return field

    return (
      <div className="flex flex-col gap-1.5">
        {field}
        <p id={errorId} className="font-sans text-xs leading-tight text-destructive">
          {errorText}
        </p>
      </div>
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
