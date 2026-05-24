import * as React from 'react'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { toggleVariants } from '../toggle'

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: 'default',
  variant: 'default',
})

const ToggleGroupRoot = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn('flex items-center justify-center gap-1', className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))
ToggleGroupRoot.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({ variant: variant ?? context.variant, size: size ?? context.size }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export interface ToggleOption {
  value: string
  /** Visible text. Optional for icon-only toggles (provide `ariaLabel`). */
  label?: React.ReactNode
  icon?: React.ReactNode
  ariaLabel?: string
  disabled?: boolean
}

export type ToggleGroupProps = VariantProps<typeof toggleVariants> & {
  options: ToggleOption[]
  disabled?: boolean
  className?: string
} & (
    | {
        type: 'single'
        value?: string
        defaultValue?: string
        onValueChange?: (value: string) => void
      }
    | {
        type: 'multiple'
        value?: string[]
        defaultValue?: string[]
        onValueChange?: (value: string[]) => void
      }
  )

const ToggleGroup = ({
  options,
  className,
  variant,
  size,
  ...rootProps
}: ToggleGroupProps) => (
  <ToggleGroupRoot
    variant={variant}
    size={size}
    className={className}
    {...(rootProps as React.ComponentPropsWithoutRef<typeof ToggleGroupRoot>)}
  >
    {options.map((opt) => (
      <ToggleGroupItem
        key={opt.value}
        value={opt.value}
        disabled={opt.disabled}
        aria-label={
          opt.ariaLabel ?? (typeof opt.label === 'string' ? opt.label : undefined)
        }
      >
        {opt.icon}
        {opt.label}
      </ToggleGroupItem>
    ))}
  </ToggleGroupRoot>
)
ToggleGroup.displayName = 'ToggleGroup'

export { ToggleGroup }
