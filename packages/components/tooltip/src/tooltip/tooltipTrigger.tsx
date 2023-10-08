import * as React from 'react'
import { tooltipVariants, TooltipVariantProps } from './variants'

export interface TooltipTriggerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TooltipVariantProps {}

const TooltipTrigger = React.forwardRef<HTMLDivElement, TooltipTriggerProps>(
  ({ className, variant, size, radius, position, ...props }, ref) => {
    const Comp = 'div'
    return (
      <Comp
        className={tooltipVariants({
          variant,
          size,
          radius,
          position,
          className,
        })}
        ref={ref}
        {...props}
      />
    )
  }
)
TooltipTrigger.displayName = 'PrettyUI.TooltipTrigger'

export { TooltipTrigger }
