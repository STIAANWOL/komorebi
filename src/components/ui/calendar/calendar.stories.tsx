import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import type { DateRange as DayPickerDateRange } from 'react-day-picker'
import { Calendar } from './calendar'

const meta = {
  title: 'Data/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <div className="rounded-xl border p-3">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </div>
    )
  },
}

export const DateRange: Story = {
  name: 'Date Range',
  render: () => {
    const [range, setRange] = React.useState<DayPickerDateRange | undefined>()
    return (
      <div className="rounded-xl border p-3">
        <Calendar
          mode="range"
          selected={range}
          onSelect={(r) => setRange(r ?? undefined)}
          numberOfMonths={2}
        />
      </div>
    )
  },
}

export const Multiple: Story = {
  name: 'Multiple Selection',
  render: () => {
    const [dates, setDates] = React.useState<Date[] | undefined>([])
    return (
      <div className="rounded-xl border p-3">
        <Calendar mode="multiple" selected={dates} onSelect={setDates} />
      </div>
    )
  },
}
