import type { ReactNode } from 'react'

/** A single selectable option used by Select, RadioGroup, ToggleGroup, etc. */
export interface Option {
  value: string
  label: ReactNode
  disabled?: boolean
}

/** A group of options (e.g. a labelled section inside a Select). */
export interface OptionGroup {
  group: string
  items: Option[]
}

/**
 * An entry in a DropdownMenu / ContextMenu. A discriminated union so a single
 * `items` array can model the full range of menu entries.
 */
export type MenuItem =
  | {
      type: 'item'
      label: ReactNode
      icon?: ReactNode
      shortcut?: string
      disabled?: boolean
      onSelect?: () => void
    }
  | {
      type: 'checkbox'
      label: ReactNode
      checked: boolean
      onCheckedChange: (checked: boolean) => void
      disabled?: boolean
    }
  | {
      type: 'radio-group'
      value: string
      onValueChange: (value: string) => void
      options: Option[]
    }
  | { type: 'label'; label: ReactNode }
  | { type: 'separator' }
  | {
      type: 'submenu'
      label: ReactNode
      icon?: ReactNode
      disabled?: boolean
      items: MenuItem[]
    }
