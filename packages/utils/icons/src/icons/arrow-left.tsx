import { WrapperIcon } from "../wrapper-icon";
import {IconSvgProps} from '../types'



export const ArrowLeftIcon = ({strokeWidth = 1.5, ...props}: IconSvgProps) => (
    <WrapperIcon
    fill="none"
     {...props}>
        <path
          d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={strokeWidth}
        />
        <path
          d="M20.5 12H3.67004"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={strokeWidth}
        />
    </WrapperIcon>
)