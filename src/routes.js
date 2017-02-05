routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'app',
        url: '/',
        data: { public: true },
        views: {
            main: {
                component: 'welcome'
            }
        }
    });

    $stateProvider.state({
        name: 'welcome',
        url: '/',
        data: { public: true },
        views: {
            main: {
                component: 'welcome'
            }
        }
    });

    $stateProvider.state({
        name: 'projects',
        url: '/projects',
        data: { public: true },
        views: {
            main: {
                component: 'projects'
            }
        } 
    });

    $stateProvider.state({
        name: 'repos',
        url: '/repos',
        data: { public: true },
        views: {
            main: {
                component: 'repos'
            }
        }
    });

    $stateProvider.state({
        name: 'about',
        url: '/about',
        abstract: true,
        default: '.me',
        data: { public: true },
        views: {
            main: {
                component: 'about'
            }
        }
    });

    $stateProvider.state({
        name: 'about.me',
        url: '/me',
        component: 'me'
    });

    $stateProvider.state({
        name: 'about.history',
        url: '/history',
        component: 'history'
    });
    
    $urlRouterProvider.otherwise('/');
};