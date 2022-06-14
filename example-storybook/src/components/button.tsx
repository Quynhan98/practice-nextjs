import PropTypes from "prop-types"
import { MouseEventHandler, ReactNode } from "react";

export interface Props {
    label: ReactNode;
    backgroundColor: string;
    size: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ label, backgroundColor = "red", size = "md", handleClick }: Props): JSX.Element {
    let scale: number = 1

    if (size === "sm") scale = 0.75;
    if (size === "lg") scale = 1.5;

    const style = {
        backgroundColor,
        padding: `${scale * 1}rem ${scale * 1.5}rem`,
        border: "none",
    }

    return (
        <button onClick={handleClick} style={style}>
            {label}
        </button>
    )
}

Button.prototype = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    handleClick: PropTypes.func,
}
