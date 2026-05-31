import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Mail, Search, Eye, EyeOff } from 'lucide-react'
import { Input } from './input'

const meta = {
  title: 'Primitives/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A styled text input with optional icon slots and error state.',
      },
    },
  },
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean', description: 'Renders the error border and ring.' },
    errorText: { control: 'text', description: 'Message rendered below the input in destructive color.' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'url', 'tel'],
    },
  },
  args: {
    placeholder: 'Type something…',
    disabled: false,
    error: false,
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLeftIcon: Story = {
  name: 'With Left Icon',
  args: {
    leftIcon: <Mail className="h-4 w-4" />,
    placeholder: 'you@example.com',
    type: 'email',
  },
}

export const WithSearch: Story = {
  name: 'Search',
  args: {
    leftIcon: <Search className="h-4 w-4" />,
    placeholder: 'Search…',
    type: 'search',
  },
}

export const ErrorState: Story = {
  name: 'Error State',
  args: {
    error: true,
    defaultValue: 'bad-email',
    placeholder: 'you@example.com',
    type: 'email',
  },
}

export const WithErrorText: Story = {
  name: 'With Error Text',
  args: {
    error: true,
    errorText: 'Please enter a valid email address.',
    defaultValue: 'bad-email',
    placeholder: 'you@example.com',
    type: 'email',
  },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'Read-only value' },
}

export const PasswordToggle: Story = {
  name: 'Password (with toggle)',
  render: (args) => {
    const [show, setShow] = React.useState(false)
    return (
      <Input
        {...args}
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
        rightIcon={
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="pointer-events-auto text-muted-foreground hover:text-foreground transition-colors"
            aria-label={show ? 'Hide password' : 'Show password'}
          >
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        }
      />
    )
  },
}

export const Playground: Story = {
  name: 'Playground',
  args: {
    placeholder: 'Playground input',
    type: 'text',
    disabled: false,
    error: false,
  },
}
