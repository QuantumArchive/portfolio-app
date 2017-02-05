import template from './projects.html';
import styles from './projects.scss';

export default {
    template,
    bindings: {
        projects: '<'
    },
    controller
};

controller.$inject = ['articleService', '$sce'];

function controller(articles, $sce) {
    this.styles = styles;
    this.loading = true;
    this.$onInit = () => {
        articles.getAll()
            .then(data => {
                this.projects = data;
                this.loading = false;
            });
    };

    this.trust = (value) => {
        return $sce.trustAsHtml(value);
    };
};