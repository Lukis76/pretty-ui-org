import * as React from 'react'
import { TooltipVariantProps } from './variants'
import { TooltipProvider } from './tooltipProvider'
import { TooltipContent } from './tooltipContent'
import { TooltipTrigger } from './tooltipTrigger'

export interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TooltipVariantProps {
  label: string
  classNames?: Partial<Record<'content' | 'trigger' | 'root', string>>
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, label, classNames }) => {
    return (
      <TooltipProvider className={classNames?.root || ''}>
        <TooltipContent className={classNames?.content || ''}>
          {label}
        </TooltipContent>
        <TooltipTrigger className={classNames?.trigger || ''}>
          {children}
        </TooltipTrigger>
      </TooltipProvider>
    )
  }
)
Tooltip.displayName = 'PrettyUI.Tooltip'

export { Tooltip }
