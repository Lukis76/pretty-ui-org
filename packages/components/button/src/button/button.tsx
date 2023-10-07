import { ReactNode, forwardRef, useMemo } from 'react'
import { tv, VariantProps } from '@pretty-ui-org/theme'

const buttomStyles = tv({
  base: ['grid', 'place-content-center', 'box-border'],
  variants: {
    variant: {
      solid: 'bg-green',
      bordered: 'bg-red',
      light: 'bg-blue',
      flat: 'bg-orange',
      faded: 'bg-yellow',
      shadow: 'bg-indigo',
      ghost: 'bg-purple',
    },
    size: {
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
    },
    radius: {
      none: 'rounded-[0.5rem]',
      sm: 'rounded-[1rem]',
      md: 'rounded-[1.5rem]',
      lg: 'rounded-[2rem]',
      full: 'rounded-[999rem]',
    },
    fullWidth: {
      true: 'w-full',
    },
    isDisabled: {
      true: 'opacity-disabled pointer-events-none',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    fullWidth: false,
    isDisabled: false,
  },
})

type ButtonVariantProps = VariantProps<typeof buttomStyles>

interface ButtonProps {
  children?: ReactNode
}

type HTMLPrettyUIButton = ButtonProps & ButtonVariantProps

const Button = forwardRef<'button', HTMLPrettyUIButton>((props, ref) => {
  const {
    variant = 'solid',
    fullWidth = false,
    isDisabled = false,
    radius = 'md',
    size = 'md',
  } = props

  const styles = useMemo(
    () => buttomStyles({ variant, fullWidth, isDisabled, radius, size }),
    [variant, fullWidth, isDisabled, radius, size]
  )

  return (
    <button className={styles} {...props}>
      {props.children}
    </button>
  )
})

Button.displayName = 'PrettyUI.Button'

export default Button











const Test = () => {
  return (
    <Button >
      tamalindo
    </Button>
  )
}
