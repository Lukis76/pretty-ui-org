import { ReactNode } from "react";
import {IconSvgProps} from "./types";

interface WrapperIconProps extends IconSvgProps {
    children: ReactNode
}

export const WrapperIcon = ({children, ...props}: WrapperIconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    {children}
  </svg>
);
