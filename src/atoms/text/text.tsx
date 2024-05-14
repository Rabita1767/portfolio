import { FC, ReactNode } from "react";
import "./text.scss";
interface IProps {
    className?: string,
    children: ReactNode,
    onClick?: () => void;
}
const Text: FC<IProps> = ({ className, children, onClick }) => {
    return (
        <p className={className} onClick={onClick}>
            {children}
        </p>
    );
};

export default Text;
