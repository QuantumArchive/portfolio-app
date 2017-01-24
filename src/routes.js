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
        data: { public: true },
        views: {
            main: {
                component: 'about'
            }
        }
    });
    
    $urlRouterProvider.otherwise('/');
};