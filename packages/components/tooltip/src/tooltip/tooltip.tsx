import { FC } from 'react'
import { TooltipVariantProps } from './variants'
import { WrapperTooltip } from './wrapper-tooltip'
import { TooltipContent } from './tooltipContent'

export interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TooltipVariantProps {
  label: string
  classNames?: Partial<Record<'content' | 'wrapper', string>>
}

const Tooltip: FC<TooltipProps> = ({
  children,
  label,
  classNames,
  ...props
}) => {
  return (
    <WrapperTooltip className={classNames?.wrapper}>
      <TooltipContent className={classNames?.content} {...props}>
        {label}
      </TooltipContent>
      {children}
    </WrapperTooltip>
  )
}

Tooltip.displayName = 'PrettyUI.Tooltip'

export { Tooltip }
