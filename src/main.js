import angular from 'angular';
import './scss/main.scss';
// picks up index.js from components and services folder
import components from './components';
import services from './services';

// bring in 3rd party modules
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import satellizer from 'satellizer';
import material from 'angular-material';
import 'angular-material/angular-material.css';
import animate from 'angular-animate';
import aria from 'angular-aria';

// need this for old $stateChanged events,
// however, we need to manually grab the module 
// from angular (see below) as it is not 
// exported from this import 
import 'angular-ui-router/release/stateEvents';

import resource from 'angular-resource';

import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';


const app = angular.module('myApp', [
    components,
    services,
    animate,
    material,
    aria,
    uiRouter,
    defaultRoute,
    angular.module('ui.router.state.events').name,
    resource,
    dialog,
    satellizer
]);