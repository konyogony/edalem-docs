'use client';

import config from 'config';
import { Heading } from 'lib/types';
import { cn } from 'lib/utils';
import { useCallback, useEffect, useMemo, useState } from 'react';

const linkUnderline = config.misc.linkUnderline;

const TOC = ({ headings }: { headings: Heading[] }) => {
    const [activeHeading, setActiveHeading] = useState('');

    const updateHeadings = useCallback(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveHeading(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-10% 0px -80% 0px',
                threshold: 0,
            },
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [headings]);

    useEffect(() => {
        const cleanup = updateHeadings();
        return () => cleanup();
    }, [headings, updateHeadings]);

    const memoizedHeadings = useMemo(() => {
        return headings.map((heading) => (
            <a
                href={`#${heading.id}`}
                className={cn(
                    'max-w-48 py-[4.5px] text-sm transition-all duration-200',
                    linkUnderline ? 'hover:underline' : 'hover:text-base-900 dark:hover:text-base-50',
                    activeHeading === heading.id
                        ? 'font-semibold text-accent-500'
                        : 'font-normal text-base-700/80 dark:text-base-400',
                    heading.level === 1 && 'font-semibold',
                )}
                style={{
                    paddingLeft: `${(heading.level - 1) * 10}px`,
                }}
                key={heading.id}
            >
                {heading.text}
            </a>
        ));
    }, [headings, activeHeading]);

    return memoizedHeadings;
};

export default TOC;
