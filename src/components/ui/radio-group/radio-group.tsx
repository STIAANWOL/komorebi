import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Option } from '@/lib/types'

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn('grid gap-2', className)}
    {...props}
  />
))
RadioGroupRoot.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      'aspect-square h-4 w-4 cursor-pointer rounded-full border border-input',
      'ring-offset-background transition-colors duration-150',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:border-primary data-[state=checked]:bg-primary',
      className,
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <Circle className="h-2.5 w-2.5 fill-primary-foreground text-primary-foreground" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
))
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export interface RadioGroupProps {
  options: Option[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  orientation?: 'vertical' | 'horizontal'
  disabled?: boolean
  name?: string
  className?: string
}

const RadioGroup = ({
  options,
  orientation = 'vertical',
  className,
  ...props
}: RadioGroupProps) => {
  const groupId = React.useId()
  return (
    <RadioGroupRoot
      orientation={orientation}
      className={cn(
        orientation === 'horizontal' ? 'flex flex-wrap gap-4' : 'grid gap-2',
        className,
      )}
      {...props}
    >
      {options.map((opt) => {
        const itemId = `${groupId}-${opt.value}`
        return (
          <div key={opt.value} className="flex items-center gap-2">
            <RadioGroupItem id={itemId} value={opt.value} disabled={opt.disabled} />
            <label
              htmlFor={itemId}
              className={cn(
                'text-sm font-medium leading-none text-foreground',
                opt.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
              )}
            >
              {opt.label}
            </label>
          </div>
        )
      })}
    </RadioGroupRoot>
  )
}
RadioGroup.displayName = 'RadioGroup'

export { RadioGroup }
