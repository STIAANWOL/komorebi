import * as React from 'react'
import { cn } from '@/lib/utils'

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {}

function Code({ className, ...props }: CodeProps) {
  return (
    <code
      className={cn(
        'relative rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.85em] font-medium text-foreground',
        className,
      )}
      {...props}
    />
  )
}
Code.displayName = 'Code'

function CodeBlock({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className={cn(
        'overflow-x-auto rounded-xl border bg-muted p-4',
        'font-mono text-sm leading-relaxed text-foreground',
        className,
      )}
      {...props}
    />
  )
}
CodeBlock.displayName = 'CodeBlock'

export { Code, CodeBlock }
