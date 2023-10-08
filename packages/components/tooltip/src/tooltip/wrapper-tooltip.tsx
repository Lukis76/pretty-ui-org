import * as React from 'react'
import { TooltipVariantProps } from './variants'

export interface WrapperTooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TooltipVariantProps {}

const WrapperTooltip = React.forwardRef<HTMLDivElement, WrapperTooltipProps>(
  ({ className, variant, size, radius, position, ...props }, ref) => {
    const Comp = 'div'
    const classname = className
      ? className.concat(' relative')
      : 'relative group '
    return <Comp ref={ref} className={classname} {...props} />
  }
)
WrapperTooltip.displayName = 'PrettyUI.TooltipProvider'

export { WrapperTooltip }
