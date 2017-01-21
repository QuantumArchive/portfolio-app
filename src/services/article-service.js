articleService.$inject = ['$http', 'apiUrl'];

export default function articleService($http, apiUrl) {
    return {
        getAll() {
            return $http.get(`${apiUrl}/users/all`)
                .then(res => res.data);
        },
        add(article) {
            return $http.post(`${apiUrl}/users`, article)
                .then(res => res.data);
        },
        update(id, updates) {
            return $http.put(`${apiUrl}/users/${id}`, updates)
                .then(res => res.data);
        },
        remove(id) {
            return $http.delete(`${apiUrl}/users/${id}`)
                .then(res => res.data);
        }
    };
};