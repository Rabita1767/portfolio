import React, { FC, ReactNode } from "react";
import "./text.scss";
interface IProps {
    className: string,
    children: ReactNode
}
const Text: FC<IProps> = ({ className, children }) => {
    return (
        <p className={className}>
            {children}
        </p>
    );
};

export default Text;
