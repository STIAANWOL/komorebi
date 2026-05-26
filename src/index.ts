// Komorebi — prop-driven component library. Public API: one component per
// concept, configured entirely through props. Internal Radix-style sub-parts
// are intentionally not exported.

// Utilities
export { cn } from '@/lib/utils'

// Shared data types (for typing the props you pass to components)
export type { Option, OptionGroup, MenuItem } from '@/lib/types'

// Primitives
export { Button } from '@/components/ui/button'
export type { ButtonProps } from '@/components/ui/button'

export { Input } from '@/components/ui/input'
export type { InputProps } from '@/components/ui/input'

export { Label } from '@/components/ui/label'
export type { LabelProps } from '@/components/ui/label'

export { Textarea } from '@/components/ui/textarea'
export type { TextareaProps } from '@/components/ui/textarea'

export { Select } from '@/components/ui/select'
export type { SelectProps } from '@/components/ui/select'

export { Checkbox } from '@/components/ui/checkbox'
export type { CheckboxProps } from '@/components/ui/checkbox'

export { RadioGroup } from '@/components/ui/radio-group'
export type { RadioGroupProps } from '@/components/ui/radio-group'

export { Switch } from '@/components/ui/switch'
export type { SwitchProps } from '@/components/ui/switch'

export { Slider } from '@/components/ui/slider'
export type { SliderProps } from '@/components/ui/slider'

export { Toggle } from '@/components/ui/toggle'
export type { ToggleProps } from '@/components/ui/toggle'

export { ToggleGroup } from '@/components/ui/toggle-group'
export type { ToggleGroupProps, ToggleOption } from '@/components/ui/toggle-group'

export { Avatar } from '@/components/ui/avatar'
export type { AvatarProps } from '@/components/ui/avatar'

// Feedback
export { Badge } from '@/components/ui/badge'
export type { BadgeProps } from '@/components/ui/badge'

export { Alert } from '@/components/ui/alert'
export type { AlertProps } from '@/components/ui/alert'

export { Progress } from '@/components/ui/progress'
export type { ProgressProps } from '@/components/ui/progress'

export { Skeleton } from '@/components/ui/skeleton'

export { Toaster, toast } from '@/components/ui/toast'

// Overlays
export { Dialog } from '@/components/ui/dialog'
export type { DialogProps } from '@/components/ui/dialog'

export { Sheet } from '@/components/ui/sheet'
export type { SheetProps } from '@/components/ui/sheet'

export { Popover } from '@/components/ui/popover'
export type { PopoverProps } from '@/components/ui/popover'

export { Tooltip } from '@/components/ui/tooltip'
export type { TooltipProps } from '@/components/ui/tooltip'

export { DropdownMenu } from '@/components/ui/dropdown-menu'
export type { DropdownMenuProps } from '@/components/ui/dropdown-menu'

export { ContextMenu } from '@/components/ui/context-menu'
export type { ContextMenuProps } from '@/components/ui/context-menu'

export { Command } from '@/components/ui/command'
export type { CommandProps, CommandGroupData, CommandOption } from '@/components/ui/command'

// Layout
export { Separator } from '@/components/ui/separator'

export { Card } from '@/components/ui/card'
export type { CardProps } from '@/components/ui/card'

export { ScrollArea } from '@/components/ui/scroll-area'

export { Tabs } from '@/components/ui/tabs'
export type { TabsProps, TabItem } from '@/components/ui/tabs'

export { Accordion } from '@/components/ui/accordion'
export type { AccordionProps, AccordionItemData } from '@/components/ui/accordion'

// Navigation
export { Link } from '@/components/ui/link'
export type { LinkProps } from '@/components/ui/link'

export { Breadcrumb } from '@/components/ui/breadcrumb'
export type { BreadcrumbProps, BreadcrumbEntry } from '@/components/ui/breadcrumb'

export { Pagination } from '@/components/ui/pagination'
export type { PaginationProps } from '@/components/ui/pagination'

// Data
export { Table } from '@/components/ui/table'
export type { TableProps, TableColumn } from '@/components/ui/table'

export { Calendar } from '@/components/ui/calendar'
export type { CalendarProps } from '@/components/ui/calendar'

// Typography
export { Heading } from '@/components/ui/heading'
export type { HeadingProps } from '@/components/ui/heading'

export { Text } from '@/components/ui/text'
export type { TextProps } from '@/components/ui/text'

export { Code, CodeBlock } from '@/components/ui/code'
export type { CodeProps } from '@/components/ui/code'

// Composite
export { DatePicker } from '@/components/composite/date-picker'
export type { DatePickerProps } from '@/components/composite/date-picker'

export { ConfirmDialog } from '@/components/composite/confirm-dialog'
export type { ConfirmDialogProps } from '@/components/composite/confirm-dialog'

export { SearchInput } from '@/components/composite/search-input'
export type { SearchInputProps } from '@/components/composite/search-input'
