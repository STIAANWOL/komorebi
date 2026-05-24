import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Popover } from '@/components/ui/popover'

export interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  id?: string
}

function DatePicker({
  value,
  onChange,
  placeholder = 'Pick a date',
  disabled,
  className,
  id,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  function handleSelect(date: Date | undefined) {
    onChange?.(date)
    setOpen(false)
  }

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      align="start"
      className="w-auto p-0"
      trigger={
        <Button
          id={id}
          variant="outline"
          disabled={disabled}
          className={cn(
            'w-64 justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            className,
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, 'PPP') : placeholder}
        </Button>
      }
    >
      <DayPicker
        mode="single"
        selected={value}
        onSelect={handleSelect}
        className="p-3 font-sans"
        classNames={{
          months: 'flex flex-col',
          month: 'space-y-4',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'font-serif text-sm font-medium',
          nav: 'space-x-1 flex items-center',
          nav_button: cn(
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
            'inline-flex items-center justify-center rounded-md border border-input',
            'transition-colors hover:bg-accent cursor-pointer',
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse space-y-1',
          head_row: 'flex',
          head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
          row: 'flex w-full mt-2',
          cell: 'h-9 w-9 text-center text-sm relative focus-within:relative focus-within:z-20',
          day: cn(
            'h-9 w-9 p-0 font-normal cursor-pointer select-none',
            'inline-flex items-center justify-center rounded-md text-sm transition-colors',
            'hover:bg-accent hover:text-accent-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            'disabled:pointer-events-none disabled:opacity-50',
            'aria-selected:opacity-100',
          ),
          day_selected:
            '!bg-primary !text-primary-foreground hover:!bg-primary hover:!text-primary-foreground focus-visible:!bg-primary focus-visible:!text-primary-foreground',
          day_today: 'ring-1 ring-inset ring-primary/50 font-semibold text-primary',
          day_outside: 'text-muted-foreground opacity-50',
          day_disabled: 'text-muted-foreground opacity-50 cursor-not-allowed',
          day_hidden: 'invisible',
        }}
      />
    </Popover>
  )
}

export { DatePicker }
