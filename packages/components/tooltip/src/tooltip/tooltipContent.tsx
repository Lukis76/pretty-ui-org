import * as React from 'react'
import { tooltipVariants, TooltipVariantProps } from './variants'

export interface TooltipContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TooltipVariantProps {}

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
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
TooltipContent.displayName = 'PrettyUI.TooltipContent'

export { TooltipContent }
