import { tv, VariantProps } from '@pretty-ui-org/theme'

export const tooltipVariants = tv({
  base: ['grid', 'place-content-center', 'box-border'],
  variants: {
    variant: {
      solid: 'bg-solid',
      bordered: 'bg-bordered',
      light: 'bg-light',
      flat: 'bg-flat',
      faded: 'bg-faded',
      shadow: 'bg-shadow',
      ghost: 'bg-ghost',
    },
    gap: {
      xs: 'p-unit-2',
      sm: 'p-unit-4',
      md: 'p-unit-6',
      lg: 'p-unit-8',
    },
    position: {
      top: '',
      left: '',
      right: '',
      botton: '',
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
    variant: 'flat',
  },
})

export type TooltipVariantProps = VariantProps<typeof tooltipVariants>
