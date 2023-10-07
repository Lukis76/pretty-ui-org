import { WrapperIcon } from "../wrapper-icon";
import {IconSvgProps} from '../types'

export const SelectorIcon = ({...props}: IconSvgProps)  => (
    <WrapperIcon
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    {...props}>
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M8 9l4 -4l4 4" />
    <path d="M16 15l-4 4l-4 -4" />
    </WrapperIcon>
)