import template from './app-header.html';
import styles from './app-header.scss';

export default {
    template,
    controller
};

function controller() {
    this.styles = styles;
};