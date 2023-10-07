// import { ReactNode, forwardRef, useMemo } from 'react'
import { tv, VariantProps } from '@pretty-ui-org/theme'
// import { ReactRef, useButton } from './use-button'
// import { mergeProps } from 'react-aria'

// const button = tv({
//   base: ['grid', 'place-content-center', 'box-border'],
//   variants: {
//     variant: {
//       solid: 'bg-solid',
//       bordered: 'bg-bordered',
//       light: 'bg-light',
//       flat: 'bg-flat',
//       faded: 'bg-faded',
//       shadow: 'bg-shadow',
//       ghost: 'bg-ghost',
//     },
//     size: {
//       sm: 'p-2',
//       md: 'p-4',
//       lg: 'p-6',
//     },
//     radius: {
//       none: 'rounded-[0.5rem]',
//       sm: 'rounded-[1rem]',
//       md: 'rounded-[1.5rem]',
//       lg: 'rounded-[2rem]',
//       full: 'rounded-[999rem]',
//     },
//     fullWidth: {
//       true: 'w-full',
//     },
//     isDisabled: {
//       true: 'opacity-disabled pointer-events-none',
//     },
//   },
//   defaultVariants: {
//     size: 'md',
//     variant: 'solid',
//     fullWidth: false,
//     isDisabled: false,
//   },
// })

// type ButtonVariantProps = VariantProps<typeof button>

// interface ButtonProps {
//   children?: ReactNode
//   className: string
// }

// type HTMLPrettyUIButton = ButtonProps & ButtonVariantProps

// const Button = forwardRef<'button', HTMLPrettyUIButton>((props, ref) => {
//   const {
//     variant = 'solid',
//     fullWidth = false,
//     isDisabled = false,
//     radius = 'md',
//     size = 'md',
//     // className,
//     children,
//   } = props

//   const btnStyles = useMemo(
//     () =>
//       button({
//         size,
//         variant,
//         radius,
//         fullWidth,
//         // className,
//       }),
//     [
//       size,
//       variant,
//       radius,
//       fullWidth,
//       // className,
//     ]
//   )

//   const initProps = { ...props }
//   const endProps = { className: btnStyles }

//   const getProps = {
//     ...mergeProps(initProps, endProps),
//   }

//   return <button {...getProps}>{children}</button>
// })

// Button.displayName = 'PrettyUI.Button'

// export default Button

import * as React from 'react'
// import { Slot } from "@radix-ui/react-slot"
// import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/utils"

// const buttonVariants = cva(
//   "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const Comp = 'button'
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
