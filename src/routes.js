routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'app',
        url: '/',
        data: {public: true},
        views: {
            main: {
                component: 'welcome'
            }
        }
    });
    
    $urlRouterProvider.otherwise('/');
};