import React from 'react';
import "./button.scss"
interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, className, onClick, children }) => {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
