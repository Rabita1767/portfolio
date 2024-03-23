import React from 'react';

interface ImageProps {
    src: string;
    className?: string; // className is optional
    alt?: string; // alt text is optional for accessibility
}

const Image: React.FC<ImageProps> = ({ src, className, alt }) => {
    return (
        <img
            src={src}
            className={className}
            alt={alt || ''}
        />
    );
};

export default Image;
