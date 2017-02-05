import template from './me.html';
import styles from './me.scss';

export default {
    template,
    controller
};

function controller() {
    this.styles = styles;
};