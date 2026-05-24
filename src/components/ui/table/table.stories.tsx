import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../badge'
import { Table } from './table'
import type { TableColumn } from './table'

interface Invoice {
  id: string
  status: string
  amount: string
  method: string
  date: string
}

const invoices: Invoice[] = [
  { id: 'INV-001', status: 'paid', amount: 'R12 500', method: 'Credit card', date: '2026-04-01' },
  { id: 'INV-002', status: 'pending', amount: 'R8 200', method: 'EFT', date: '2026-04-15' },
  { id: 'INV-003', status: 'overdue', amount: 'R4 750', method: 'PayFast', date: '2026-03-20' },
  { id: 'INV-004', status: 'paid', amount: 'R21 000', method: 'Credit card', date: '2026-04-22' },
  { id: 'INV-005', status: 'pending', amount: 'R6 400', method: 'EFT', date: '2026-05-01' },
]

const statusVariant = (s: string) =>
  s === 'paid' ? 'success' : s === 'pending' ? 'warning' : 'destructive'

const columns: Array<TableColumn<Invoice>> = [
  {
    key: 'id',
    header: 'Invoice',
    render: (r) => <span className="font-mono text-xs">{r.id}</span>,
  },
  {
    key: 'status',
    header: 'Status',
    render: (r) => (
      <Badge variant={statusVariant(r.status)} className="capitalize">
        {r.status}
      </Badge>
    ),
  },
  { key: 'method', header: 'Method' },
  {
    key: 'date',
    header: 'Date',
    render: (r) => <span className="text-muted-foreground">{r.date}</span>,
  },
  {
    key: 'amount',
    header: 'Amount',
    align: 'right',
    render: (r) => <span className="font-medium">{r.amount}</span>,
  },
]

const meta = {
  title: 'Data/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A prop-driven data table. Pass `columns` and `data`; cells default to `row[key]` or use a `render` function.',
      },
    },
  },
  args: { columns: [], data: [] },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table<Invoice>
      className="w-[640px]"
      caption="A list of recent invoices."
      columns={columns}
      data={invoices}
    />
  ),
}

export const Minimal: Story = {
  name: 'Minimal (no caption)',
  render: () => (
    <Table
      className="w-96"
      columns={[
        {
          key: 'name',
          header: 'Name',
          render: (r) => <span className="font-medium">{r.name}</span>,
        },
        { key: 'role', header: 'Role' },
        {
          key: 'status',
          header: 'Status',
          render: (r) => (
            <Badge variant={r.status === 'Active' ? 'success' : 'warning'}>{r.status}</Badge>
          ),
        },
      ]}
      data={[
        { name: 'Stiaan Wolfaardt', role: 'Founder', status: 'Active' },
        { name: 'Amara Dube', role: 'Designer', status: 'Active' },
        { name: 'Luca Ferreira', role: 'Engineer', status: 'Away' },
      ]}
    />
  ),
}
