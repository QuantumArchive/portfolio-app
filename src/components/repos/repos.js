import template from './repos.html';
import styles from './repos.scss';

export default {
    template,
    bindings: {
        repos: '<'
    },
    controller
};

function controller() {
    this.styles = styles;
};