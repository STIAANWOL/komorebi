import { Toaster as Sonner } from 'sonner'
import { cn } from '@/lib/utils'

type ToasterProps = React.ComponentProps<typeof Sonner>

export function Toaster({ className, ...props }: ToasterProps) {
  return (
    <Sonner
      className={cn('font-sans', className)}
      toastOptions={{
        classNames: {
          toast: [
            'group font-sans text-sm rounded-lg border shadow-md',
            'bg-popover text-popover-foreground border-border',
            'data-[type=success]:border-matcha/50 data-[type=success]:bg-matcha/10',
            'data-[type=error]:border-destructive/50 data-[type=error]:bg-destructive/10',
            'data-[type=warning]:border-aki/50 data-[type=warning]:bg-aki/10',
            'data-[type=info]:border-sora/50 data-[type=info]:bg-sora/10',
          ].join(' '),
          title: 'font-serif font-semibold text-sm',
          description: 'text-muted-foreground text-xs',
          actionButton: 'bg-primary text-primary-foreground text-xs rounded-md px-2 py-1',
          cancelButton: 'bg-muted text-muted-foreground text-xs rounded-md px-2 py-1',
          closeButton: 'text-muted-foreground hover:text-foreground',
        },
      }}
      {...props}
    />
  )
}
