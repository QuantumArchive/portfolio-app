import template from './repos.html';
import styles from './repos.scss';

export default {
    template,
    bindings: {
        repos: '<'
    },
    controller
};

controller.$inject = ['repoService'];

function controller(repoService) {
    this.styles = styles;
    this.loading = true;
    this.$onInit = () => {
        repoService.getAll()
            .then(data => {
                this.repos = data;
                this.loading = false;
            });
    };
};