userService.$inject = ['tokenService', '$http', 'apiUrl'];

export default function userService(token, $http, apiUrl) {

    const current = token.get();

    if(current){
        $http
            .get(`${apiUrl}/auth/verify`)
            .catch(() => token.remove());
    };

    function credential(endpoint) {
        return (credentials) => {
            return $http.post(`${apiUrl}/users/${endpoint}`, credentials)
                .then(result => {
                    token.set(result.data.token);
                })
                .catch(err => {
                    throw err.data;
                });
        };
    };

    return {
        isAuthenticated() {
            return !!token.get();
        },
        logout() {
            token.remove();
        },
        signin: credential('signin'),
        signup: credential('signup'),
        isValid() {
            return $http.post(`${apiUrl}/users/validate`, {})
                .then(res => res.data);
        },
        upgrade(user) {
            return $http.put(`${apiUrl}/users/upgrade`, user)
                .then(res => res.data);
        },
        removeId(id) {
            return $http.delete(`${apiUrl}/users/${id}`)
                .then(res => res.data);
        },
        remove(user) {
            // TODO: test this out
            // delete normally doesn't take any additional arguments but it
            // does take a configuration object which apparent takes data
            // as a field to be sent...
            return $http.delete(`${apiUrl}/users`, {data: user})
                .then(res => res.data);
        } 
    };
};