import * as React from 'react'
import { tv, VariantProps } from '@pretty-ui-org/theme'
import '@pretty-ui-org/styles'

const buttonVariants = tv({
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
    fullWidth: {
      true: 'w-full',
    },
    isDisabled: {
      true: 'opacity-disabled pointer-events-none',
    },
  },
  defaultVariants: {
    size: 'sm',
    radius: 'sm',
    variant: 'solid',
    fullWidth: false,
    isDisabled: false,
  },
})

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const Comp = 'button'
    return (
      <Comp
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    )
  }
)
Button.displayName = 'PrettyUI.Button'

export { Button }
