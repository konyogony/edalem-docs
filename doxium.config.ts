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
    },
    socials: {
        githubRepo: 'https://github.com/konyogony/edalem-docs',
        twitter: '',
        discord: '',
    },
    sidebarLinks: {
        'Visit our website': 'https://edalem.net',
    },
    misc: {
        toggleFolders: false, // Experimental feature
        separate: false,
        appName: 'Edalem',
        showAppNameInTitle: true,
        scollHeightBreakpoint: 300,
        breadcrumbSeparator: 'slash',
        showEditInGithub: false,
        linkUnderline: true,
        extensions: ['ts', 'tsx', 'jsx', 'rs', 'html', 'txt', 'mdx', 'bash', 'sh', 'js', 'css', 'json'],
        navbarImage: {
            large: {
                dark: '/navbarImage.png',
                light: '/navbarImage.png',
            },
            small: {
                dark: '/favicon.ico',
                light: '/favicon.ico',
            },
        },
    },
    authors: {
        // rasputinpavel: 'https://github.com/rasputinpavel',
        // konyogony: 'https://github.com/konyogony',
    },
} as DoxiumConfig satisfies DoxiumConfig;
