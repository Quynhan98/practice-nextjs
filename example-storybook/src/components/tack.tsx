import PropTypes from "prop-types";
import { HTMLAttributes, ReactNode } from "react";

export interface Props {
    children: ReactNode;
    spacing: number;
    direction: string;
    wrap: boolean;
    numberOfChildren?: number;
}

export function Stack({ children, spacing = 2, direction = "row", wrap = false }: Props): JSX.Element {
    const style = {
        display: 'flex',
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? 'wrap' : 'nowrap' as 'wrap' | 'nowrap',
        flexDirection: direction as 'row' | 'column'
    }

    return (
        <div
            style={style}>
            {children}
        </div>)
}

Stack.prototype = {
    spacing: PropTypes.number,
    wrap: PropTypes.bool,
    direction: PropTypes.oneOf(["row", "column"])
}