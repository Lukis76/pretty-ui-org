import { WrapperIcon } from "../wrapper-icon";
import {IconSvgProps} from '../types'



export const ArrowRightIcon = ({strokeWidth = 1.5, ...props}: IconSvgProps) => (
    <WrapperIcon
    fill="none"
    {...props}>
        <path
          d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={strokeWidth}
        />
        <path
          d="M4.08325 14H23.7183"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={strokeWidth}
        />
    </WrapperIcon>
)