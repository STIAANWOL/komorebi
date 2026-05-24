import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { SearchInput } from './search-input'

const meta = {
  title: 'Composite/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { placeholder: 'Search…', disabled: false },
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('')
    return <SearchInput {...args} value={value} onChange={setValue} className="w-72" />
  },
}

export const WithValue: Story = {
  name: 'With Value (clearable)',
  render: (args) => {
    const [value, setValue] = React.useState('Komorebi')
    return <SearchInput {...args} value={value} onChange={setValue} className="w-72" />
  },
}

export const FilterList: Story = {
  name: 'Live Filter List',
  parameters: { controls: { disable: true } },
  render: () => {
    const items = ['Sakura', 'Matcha', 'Sora', 'Fuji', 'Aki', 'Sumi', 'Shiro', 'Kiri']
    const [search, setSearch] = React.useState('')
    const filtered = items.filter((i) => i.toLowerCase().includes(search.toLowerCase()))
    return (
      <div className="flex flex-col gap-3 w-64">
        <SearchInput value={search} onChange={setSearch} placeholder="Filter colours…" />
        <ul className="flex flex-col gap-1">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <li
                key={item}
                className="px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors cursor-default"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-sm text-muted-foreground">No results</li>
          )}
        </ul>
      </div>
    )
  },
}
