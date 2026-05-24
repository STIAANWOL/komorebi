import type { Meta, StoryObj } from '@storybook/react'
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react'
import { Alert } from './alert'

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A prop-driven alert. Pass `variant`, `icon`, `title`, and `description`.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'destructive'],
    },
  },
  args: {
    variant: 'default',
    title: 'Heads up',
    description: 'You can add components to your app using the CLI.',
    className: 'w-96',
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex w-96 flex-col gap-3">
      <Alert title="Default" description="A neutral informational message." />
      <Alert
        variant="info"
        icon={<Info className="h-4 w-4" />}
        title="Info"
        description="Your data syncs every 5 minutes automatically."
      />
      <Alert
        variant="success"
        icon={<CheckCircle2 className="h-4 w-4" />}
        title="Success"
        description="Your changes have been saved successfully."
      />
      <Alert
        variant="warning"
        icon={<TriangleAlert className="h-4 w-4" />}
        title="Warning"
        description="Your subscription expires in 3 days."
      />
      <Alert
        variant="destructive"
        icon={<AlertCircle className="h-4 w-4" />}
        title="Error"
        description="Failed to connect. Please check your credentials."
      />
    </div>
  ),
}

export const WithoutTitle: Story = {
  name: 'Description Only',
  args: {
    variant: 'info',
    title: undefined,
    icon: <Info className="h-4 w-4" />,
    description: 'Your profile is 80% complete. Add a bio to reach 100%.',
  },
}
