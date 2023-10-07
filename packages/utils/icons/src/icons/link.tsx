import { WrapperIcon } from "../wrapper-icon";
import {IconSvgProps} from '../types'

export const LinkIcon = ({...props}: IconSvgProps)  => (
    <WrapperIcon
    fill="none"
    shapeRendering="geometricPrecision"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    {...props}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
    </WrapperIcon>
)