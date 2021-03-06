/**
 * @namespace act.Base
 */
define([
  'app-bootstrap',

  // load all services

  // // load all directives
], function() {

  angular
    .module('act.Base')

  // Config blocks
  .config(RouterConfig)
  .config(loggerConfig)
  .config(restConfig);

  // Run blocks

  // /////////////////////////////////////

  /*=====================================
  =            Config Blocks            =
  =====================================*/

  RouterConfig.$inject = ['APP_BASE_PATH', '$stateProvider', '$urlRouterProvider',
    '$locationProvider', 'lazyProvider'];

  /**
   * Configure the act.Base module's routes
   *
   * @public
   *
   * @memberof   act.Base
   *
   * @author     snehilmodani
   *
   * @class
   * @param      {String}  APP_BASE_PATH       App Base path
   * @param      {Object}  $stateProvider      ui-router's stateProvider which is used to create
   *                                           application states/routes
   * @param      {Object}  $urlRouterProvider  ui-router's urlRouterProvider which watches the
   *                                           angular's $location for changes
   * @param      {Object}  $locationProvider   angular's location provider
   * @param      {Object}  lazyProvider        Provider instance of act.lazy used to lazy load
   *                                           modules
   */
  function RouterConfig(APP_BASE_PATH, $stateProvider, $urlRouterProvider, $locationProvider,
    lazyProvider) {

    var BASE_DIR_CTRL = APP_BASE_PATH + 'app/base/ctrl/';
    var BASE_DIR_TPL = APP_BASE_PATH + 'app/base/tpl/';

    lazyProvider.configure('act.Base');

    // enable HTML5 Mode
    $locationProvider.html5Mode(true);

    $urlRouterProvider
      .otherwise(routeOtherwiseConfig);

    $stateProvider
      .state('app', {
        url: '/',
        // abstract: true,
        templateUrl: BASE_DIR_TPL + 'base.tpl.html',
        controller: 'AppBaseController',
        controllerAs: 'ViewModel',
        resolve: {
          services: ['lazy',
            function(lazy) {
              return lazy.load(BASE_DIR_CTRL + 'base.ctrl.js');
            }
          ],
          session: [function() {
            return true;
          }]
        }
      })
      .state('error', {
        url: '/error',
        templateUrl: BASE_DIR_TPL + 'error.tpl.html',
        controller: 'ErrorController',
        controllerAs: 'ViewModel',
        resolve: {
          services: ['lazy',
            function(lazy) {
              return lazy.load(BASE_DIR_CTRL + 'error.ctrl.js');
            }
          ]
        }
      });

    // //////////////////////////////////////////////////////

    routeOtherwiseConfig.$inject = ['$injector'];

    /**
     * Handle navigation when the target route is not found
     *
     * @public
     *
     * @memberof   act.Base
     *
     * @author     snehilmodani
     *
     * @param      {Object}  $injector  Angular's $injector service (dependency injection)
     */
    function routeOtherwiseConfig($injector) {

      var $state = $injector.get('$state');

      $state.go('app');
    }
  }

  loggerConfig.$inject = ['loggerProvider', 'APP_NAME', 'APP_LOGGING_ENABLED', 'APP_LOGGING_LEVEL'];

  /**
   * Configure the logging in app
   *
   * @public
   *
   * @memberof   act.Base
   *
   * @author     shoaibmerchant
   *
   * @param      {Object}   loggerProvider       act-log logger
   * @param      {String}   APP_NAME             app name
   * @param      {Boolean}  APP_LOGGING_ENABLED  The app logging enabled or not
   * @param      {String}   APP_LOGGING_LEVEL    Default app logging level
   */
  function loggerConfig(loggerProvider, APP_NAME, APP_LOGGING_ENABLED, APP_LOGGING_LEVEL) {
    loggerProvider.init(APP_NAME, APP_LOGGING_LEVEL, APP_LOGGING_ENABLED);
  }

  restConfig.$inject = ['RestProvider', 'APP_REST_URL'];

  /**
   * Configure the act-rest service
   *
   * @public
   *
   * @memberof   act.Base
   *
   * @author     shoaibmerchant
   *
   * @param      {Object}  RestProvider  act-rest provider
   * @param      {String}  APP_REST_URL  API Url
   */
  function restConfig(RestProvider, APP_REST_URL) {
    RestProvider.init(APP_REST_URL);
  }

  /*=====  End of Config Blocks  ======*/

  /*==================================
  =            Run Blocks            =
  ==================================*/

  /*=====  End of Run Blocks  ======*/

});
