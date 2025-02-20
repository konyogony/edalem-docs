import { FiArrowUpRight } from 'icons/fi';
import { cn } from 'lib/utils';
import React, { ReactElement } from 'react';

export interface CardItemProps {
    title: string;
    href?: string;
    newTab?: boolean;
    full?: boolean;
}

export const CardItem = ({
    title,
    href,
    children,
    full = false,
    newTab = false,
}: React.PropsWithChildren<CardItemProps>) => {
    return href ? (
        <a
            href={href}
            className={cn(
                'not-prose group relative my-2 flex flex-col items-start gap-2 rounded-md border border-black/15 px-6 py-3 text-sm font-normal text-base-800 transition-all duration-150 hover:text-base-900 hover:shadow-md dark:border-white/15 dark:text-base-400 dark:hover:text-base-300',
                full ? 'w-full' : 'w-1/2',
            )}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noreferrer noopener' : undefined}
        >
            <span className='text-xl font-semibold text-base-950 transition-all duration-150 group-hover:text-accent-600 dark:text-base-100'>
                {title}
            </span>
            <div>{children}</div>
            <FiArrowUpRight
                size={18}
                className='absolute right-2 top-2 text-base-950 transition-all duration-150 group-hover:text-accent-600 dark:text-base-100'
            />
        </a>
    ) : (
        <div
            className={cn(
                'not-prose relative my-2 flex flex-col items-start gap-2 rounded-md border border-black/15 px-6 py-3 text-sm font-normal text-base-800 hover:shadow-md dark:border-white/15 dark:text-base-400',
                full ? 'w-full' : 'w-1/2',
            )}
        >
            <span className='text-xl font-semibold text-base-900 transition-all duration-150 dark:text-base-100'>
                {title}
            </span>
            <div>{children}</div>
        </div>
    );
};

export interface CardGroupProps {
    cols: number;
    title?: string;
    children: ReactElement<CardItemProps> | ReactElement<CardItemProps>[];
}

export const CardGroup = ({ cols, children, title }: CardGroupProps) => {
    const modifiedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement<CardItemProps>(child)) {
            return React.cloneElement(child, {
                ...child.props,
                full: true,
            });
        }
        return child;
    });
    return (
        <>
            {title && <h2 className='text-2xl font-bold text-base-900 dark:text-base-100'>{title}</h2>}
            <div
                style={{
                    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                }}
                className='grid w-full gap-4'
            >
                {modifiedChildren}
            </div>
        </>
    );
};
