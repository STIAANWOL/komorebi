import * as React from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../button'

const PaginationNav = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)
PaginationNav.displayName = 'PaginationNav'

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
  ),
)
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />,
)
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
} & React.ComponentProps<'a'>

function PaginationLink({ className, isActive, ...props }: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        buttonVariants({ variant: isActive ? 'outline' : 'ghost', size: 'icon' }),
        isActive && 'border-primary/50 bg-primary/10 text-primary font-semibold',
        className,
      )}
      {...props}
    />
  )
}
PaginationLink.displayName = 'PaginationLink'

function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={cn('w-auto gap-1 px-2.5', className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Prev</span>
    </PaginationLink>
  )
}
PaginationPrevious.displayName = 'PaginationPrevious'

function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      className={cn('w-auto gap-1 px-2.5', className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  )
}
PaginationNext.displayName = 'PaginationNext'

function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden="true"
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}
PaginationEllipsis.displayName = 'PaginationEllipsis'

const range = (start: number, end: number) =>
  Array.from({ length: Math.max(end - start + 1, 0) }, (_, i) => start + i)

/** Compute the visible page sequence with ellipses (MUI-style). */
function getPageItems(
  page: number,
  pageCount: number,
  siblingCount: number,
  boundaryCount: number,
): Array<number | 'ellipsis'> {
  const startPages = range(1, Math.min(boundaryCount, pageCount))
  const endPages = range(Math.max(pageCount - boundaryCount + 1, boundaryCount + 1), pageCount)

  const siblingsStart = Math.max(
    Math.min(page - siblingCount, pageCount - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2,
  )
  const siblingsEnd = Math.min(
    Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
    endPages.length > 0 ? endPages[0]! - 2 : pageCount - 1,
  )

  return [
    ...startPages,
    ...(siblingsStart > boundaryCount + 2
      ? (['ellipsis'] as const)
      : boundaryCount + 1 < pageCount - boundaryCount
        ? [boundaryCount + 1]
        : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < pageCount - boundaryCount - 1
      ? (['ellipsis'] as const)
      : pageCount - boundaryCount > boundaryCount
        ? [pageCount - boundaryCount]
        : []),
    ...endPages,
  ]
}

export interface PaginationProps {
  page: number
  pageCount: number
  onPageChange?: (page: number) => void
  siblingCount?: number
  boundaryCount?: number
  className?: string
}

const Pagination = ({
  page,
  pageCount,
  onPageChange,
  siblingCount = 1,
  boundaryCount = 1,
  className,
}: PaginationProps) => {
  const items = getPageItems(page, pageCount, siblingCount, boundaryCount)
  const go = (target: number) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (target >= 1 && target <= pageCount && target !== page) onPageChange?.(target)
  }
  return (
    <PaginationNav className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={go(page - 1)}
            aria-disabled={page <= 1}
            className={cn(page <= 1 && 'pointer-events-none opacity-50')}
          />
        </PaginationItem>
        {items.map((item, i) => (
          <PaginationItem key={i}>
            {item === 'ellipsis' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink href="#" isActive={item === page} onClick={go(item)}>
                {item}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={go(page + 1)}
            aria-disabled={page >= pageCount}
            className={cn(page >= pageCount && 'pointer-events-none opacity-50')}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationNav>
  )
}
Pagination.displayName = 'Pagination'

export { Pagination }
