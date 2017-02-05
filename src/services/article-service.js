articleService.$inject = ['$http', 'apiUrl'];

export default function articleService($http, apiUrl) {
    return {
        getAll() {
            return $http.get(`${apiUrl}/articles/all`)
                .then(res => res.data.articles);
        },
        add(article) {
            return $http.post(`${apiUrl}/articles`, article)
                .then(res => res.data);
        },
        update(id, updates) {
            return $http.put(`${apiUrl}/articles/${id}`, updates)
                .then(res => res.data);
        },
        remove(id) {
            return $http.delete(`${apiUrl}/articles/${id}`)
                .then(res => res.data);
        }
    };
};