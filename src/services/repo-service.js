githubService.$inject = ['$http', 'apiUrl'];

export default function githubService($http, apiUrl) {
    return {
        getAll() {
            return $http.get(`${apiUrl}/repos`)
                .then(res => JSON.parse(res.data.repos));
        },
    };
};