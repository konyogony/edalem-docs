import { default as NextImage } from 'next/image';

// Is this the correct way to do this?
export interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

const Image = ({ src, alt, width, height }: ImageProps) => {
    return <NextImage src={src} alt={alt} width={width} height={height} />;
};

export default Image;
