'use client';

import config from 'config';
import { TreeNode } from 'lib/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useCallback, useMemo } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from 'ui/breadcrumb';

interface BreadcrumbPath {
    name: string;
    path: string;
}

const rootBreadcrumb = config.rootBreadcrumb;

const Breadcrumbs = ({ tree }: { tree: TreeNode[] }) => {
    const pathname = usePathname();

    const findPathInTree = useCallback(
        (nodes: TreeNode[], targetPath: string, currentPath: BreadcrumbPath[] = []): BreadcrumbPath[] => {
            for (const node of nodes) {
                if (node.type === 'file' && node.slug === targetPath) {
                    return [...currentPath, { name: node.name, path: node.slug }];
                } else if (node.type === 'folder' && node.nodes) {
                    const newPath = [...currentPath, { name: node.name, path: node.nodes[0]?.slug || '' }];
                    const result = findPathInTree(node.nodes, targetPath, newPath);
                    if (result.length) return result;
                }
            }
            return [];
        },
        [],
    );

    const breadcrumbPath = useMemo(() => {
        return findPathInTree(tree, pathname);
    }, [pathname, tree, findPathInTree]);

    return (
        <Breadcrumb className='not-prose text mb-8 mt-16 flex w-full lg:mb-2 lg:mt-4'>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href={'/'}>{rootBreadcrumb}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbPath.map((item, index) => (
                    <Fragment key={index}>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem
                            className={index === breadcrumbPath.length - 1 ? 'text-base-950 dark:text-base-50' : ''}
                        >
                            <BreadcrumbLink asChild>
                                <Link href={item.path}>{item.name}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default Breadcrumbs;
