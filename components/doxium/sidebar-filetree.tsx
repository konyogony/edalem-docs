import config from 'config';
import { DocLink, Filetree } from 'doxium/filetree-navigation';
import { TreeNode } from 'lib/types';

const separate = config.misc.separate;
const rootTitle = config.rootTitle;

interface SidebarProps {
    tree: TreeNode[];
}

const Sidebar = ({ tree }: SidebarProps) => {
    return (
        <div className='sticky top-24 hidden h-full w-fit min-w-[15vh] flex-shrink-0 flex-col items-start lg:flex'>
            <DocLink name={rootTitle} isFirstNode={true} isRootTitle={true} />
            <Filetree tree={tree} separate={separate} />
        </div>
    );
};

export default Sidebar;
