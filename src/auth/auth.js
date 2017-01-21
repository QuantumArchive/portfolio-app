auth.$inject = ['$rootScope', 'userService', 'ngDialog', '$state'];

export default function auth($rootScope, userService, ngDialog, $state) {

    // this is an angular-ui-router thing in which the event $stateChangeStart is placed on $rootScope
    $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {

        if (!(toState.data && toState.data.public) && !userService.isAuthenticated()) {
            
            // stop ui-router from making the state change...how fast does it intercept though?
            
            event.preventDefault();

            // throw up a dialog using ngDialog
            const dialog = ngDialog.open({
                template: '<user-auth success="success"></user-auth>',
                // plain: true === template, plain: false(default) === templateUrl
                plain: true,
                controller: ['$scope', function($scope) {
                    $scope.success = function() {
                        dialog.close();
                        return $state.go(toState.name, toParams);
                    };
                }]
            });
        };
    });
};