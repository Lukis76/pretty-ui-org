import { tv, VariantProps } from '@pretty-ui-org/theme'

export const tooltipVariants = tv({
  base: [
    'absolute',
    '-z-50',
    'group-hover:z-50',
    'group-hover:opacity-100',
    'fg-neutral-200',
    'font-medium',
    'text-center',
    'origin-bottom',
    'max-w-40',
  ],
  variants: {
    variant: {
      solid: 'bg-neutral-800/90',
      bordered: 'bg-bordered',
      light: 'bg-light',
      flat: 'bg-flat',
      faded: 'bg-faded',
      shadow: 'bg-shadow',
      ghost: 'bg-ghost',
    },
    // gap: {
    //   xs: 'p-unit-2',
    //   sm: 'p-unit-4',
    //   md: 'p-unit-6',
    //   lg: 'p-unit-8',
    // },
    position: {
      top: 'top-0 left-1/2 -translate-x-1/2 -translate-y-[110%] origin-bottom group-hover:animate-tooltip-top',
      left: 'top-1/2 left-0 -translate-x-[110%] -translate-y-1/2 origin-right group-hover:animate-tooltip-left',
      right:
        'bottom-1/2 right-0 tanslate-x-[110%] translate-y-1/2 origin-left group-hover:animate-tooltip-right',
      botton:
        'bottom-0 left-1/2 -translate-x-1/2 translate-y-[110%] origin-top group-hover:animate-tooltip-bottom',
      topLeft: '',
      topRight: '',
      bottonLeft: '',
      bottonRight: '',
    },
    size: {
      xs: 'p-unit-2',
      sm: 'p-unit-4',
      md: 'p-unit-6',
      lg: 'p-unit-8',
    },
    radius: {
      none: 'rounded-none',
      xs: 'rounded-unit-2',
      sm: 'rounded-unit-4',
      md: 'rounded-unit-6',
      lg: 'rounded-unit-8',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    size: 'xs',
    radius: 'sm',
    variant: 'solid',
    position: 'top',
  },
})

export type TooltipVariantProps = VariantProps<typeof tooltipVariants>
