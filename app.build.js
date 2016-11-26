/*
    RequireJS Configuration, one file to rule them all.
*/

var TITAN_CORE_PATH = 'node_modules/@storedock/titan-core/src/lib/';
var BOWER_COMPONENTS_PATH = 'packages/';

requirejs.config({
  urlArgs: 'ver=\'0.0.1\'',
  // @if NODE_ENV=='PRODUCTION'
  baseUrl: '/* @echo buildPath */',
  // @endif
  waitSeconds: 0,
  paths: {
    'angular': 'packages/' + 'angular/angular.min',
    'angular-animate': 'packages/' + 'angular-animate/angular-animate.min',
    'angular-ui-router': 'packages/' + 'angular-ui-router/release/angular-ui-router.min',
    'oclazyload': 'packages/' + 'oclazyload/dist/ocLazyLoad.require.min',

    // Common Modules
    'act-lazy': 'common/act-lazy/main',

    // Application Modules
    'app-bootstrap': 'app/app-bootstrap',

    'templates': 'app/templates',
    'main': 'app/main'
  },
  shim: {
    'angular': {
      deps: [],
      exports: 'angular'
    },
    'angular-animate': ['angular'],
    'oclazyload': ['angular'],

    // ACT Modules
    'act-lazy': ['oclazyload'],


    // Application Modules
    'app-bootstrap': ['angular-ui-router'],
    'templates': ['angular'],


    // Main Module
    'main': [
      // 3rd party
      'angular',
    ]
  }
});

require([
    'main'
  ],
  function() {

    angular.bootstrap(document, ['titan'], {
      strictDi: true
    });
  }
);
