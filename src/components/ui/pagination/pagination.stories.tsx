import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Pagination } from './pagination'

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A prop-driven pagination. Pass `page` and `pageCount`; the page sequence and ellipses are computed for you.',
      },
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { page: 2, pageCount: 10 },
}

export const ManyPages: Story = {
  name: 'Many Pages',
  args: { page: 6, pageCount: 20, siblingCount: 1, boundaryCount: 1 },
}

export const Controlled: Story = {
  name: 'Controlled (clickable)',
  args: { page: 1, pageCount: 8 },
  render: () => {
    const [page, setPage] = React.useState(1)
    const pageCount = 8
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-muted-foreground">
          Page {page} of {pageCount}
        </p>
        <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
      </div>
    )
  },
}
