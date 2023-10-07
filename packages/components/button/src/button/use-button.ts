// /**
//  * Part of this code is taken from @chakra-ui/system ❤️
//  */

// export type As<Props = any> = React.ElementType<Props>;

// /**
//  * Extract the props of a React element or component
//  */
// export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
//   as?: As;
// };

// export type HTMLNextUIProps<T extends As = "div", OmitKeys extends keyof any = never> = Omit<
//   PropsOf<T>,
//   "ref" | "color" | "slot" | OmitKeys
// > & {
//   as?: As;
// };

// import {useMemo, type MutableRefObject, type ReactNode, type Ref, type RefObject, useCallback, useRef} from "react";

// export type ReactRef<T> = RefObject<T> | MutableRefObject<T> | Ref<T>;
// interface Props extends HTMLNextUIProps<"button"> {
//   /**
//    * Ref to the DOM node.
//    */
//   ref?: ReactRef<HTMLButtonElement | null>;
//   /**
//    * Whether the button should display a ripple effect on press.
//    * @default false
//    */
//   disableRipple?: boolean;
//   /**
//    * The button start content.
//    */
//   startContent?: ReactNode;
//   /**
//    * The button end content.
//    */
//   endContent?: ReactNode;
//   /**
//    * Spinner to display when loading.
//    * @see https://nextui.org/components/spinner
//    */
//   spinner?: ReactNode;
//   /**
//    * The spinner placement.
//    * @default "start"
//    */
//   spinnerPlacement?: "start" | "end";
//   /**
//    * Whether the button should display a loading spinner.
//    * @default false
//    */
//   isLoading?: boolean;
//   /**
//    * The native button click event handler.
//    * use `onPress` instead.
//    */
//   onClick?: MouseEventHandler<HTMLButtonElement>;
// }
// import { tv, VariantProps } from '@pretty-ui-org/theme'

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

// // export type UseButtonProps = Props &
// //   Omit<AriaButtonProps, keyof ButtonVariantProps> &
// //   Omit<ButtonVariantProps, "isInGroup">;

//   export function useDOMRef<T extends HTMLElement = HTMLElement>(
//     ref?: RefObject<T | null> | Ref<T | null>,
//   ) {
//     const domRef = useRef<T>(null);
  
//     // useImperativeHandle(ref, () => domRef.current);
  
//     return domRef;
//   }



//   export function useButton(props) {

  
//     const {
//       ref,
//       as,
//       children,
//       className,
//       spinner,
//       fullWidth =  false,
//       size = "md",
//       variant ="solid",
//       radius = 'md',
//       isLoading = false,
//       spinnerPlacement = "start",
//       ...otherProps
//     } = props;
  
//     const Component = as || "button";
  
//     const domRef = useDOMRef(ref);
  

  
  
//     const styles = useMemo(
//       () =>
//         button({
//           size,
//           variant,
//           radius,
//           fullWidth,
//           className,
//         }),
//       [
//         size,
//         variant,
//         radius,
//         fullWidth,
//         className,
//       ],
//     );
  
  
  
  
 
  
  
 
  
  
//     return {
//       Component,
//       children,
//       domRef,
//       spinner,
//       styles,

//       // getButtonProps,
//     };
//   }