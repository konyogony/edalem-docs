import { DoxiumConfig } from 'lib/types';

export default {
    style: {
        colorScheme: 'light',
        baseColor: 'zinc',
        accentColor: 'indigo',
        shikiTheme: 'vitesse-light',
    },
    alias: {
        components: '@/components/doxium',
        lib: '@/lib',
    },
    useDocs: false,
    baseUrl: 'app/docs',
    rootTitle: 'Documentation',
    rootBreadcrumb: 'Docs',
    navLinks: {
        Home: '/',
        Edalem: 'https://edalem.net',
    }, // { 'name': 'link', 'name2': 'link2' }
    socials: {
        githubRepo: 'https://github.com/konyogony/edalem-docs',
        twitter: '',
        discord: '',
    },
    sidebarLinks: {}, // { 'name': 'link', 'name2': 'link2' }
    misc: {
        toggleFolders: false, // Experimental feature
        separate: false,
        appName: 'Edalem',
        showAppNameInTitle: true,
        scollHeightBreakpoint: 300,
        extensions: ['ts', 'tsx', 'jsx', 'rs', 'html', 'txt', 'mdx', 'bash', 'sh', 'js', 'css', 'json'], // Just default values
    },
    authors: {
        rasputinpavel: 'https://github.com/rasputinpavel',
    }, // { name: 'link?', name2: 'link2?' }
} as DoxiumConfig;
