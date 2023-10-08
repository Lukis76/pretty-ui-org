import * as React from 'react'
import { tooltipVariants, TooltipVariantProps } from './variants'

export interface TooltipProviderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TooltipVariantProps {}

const TooltipProvider = React.forwardRef<HTMLDivElement, TooltipProviderProps>(
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
TooltipProvider.displayName = 'PrettyUI.TooltipProvider'

export { TooltipProvider }
