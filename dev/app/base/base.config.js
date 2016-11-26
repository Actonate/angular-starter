/**
 * @namespace titan.Base
 */
define([
  'app-bootstrap',

  // load all services
  // 'app/services/config.service',

  // // load all directives
  // 'app/dir/google-signin.dir'
], function() {

  angular
    .module('titan.Base')

  // Config blocks
  .config(RouterConfig)

  // Run blocks
  .run(RouterChangeEventsRun);

  // /////////////////////////////////////

  /*=====================================
  =            Config Blocks            =
  =====================================*/

  RouterConfig.$inject = ['APP_BASE_PATH', '$stateProvider', '$urlRouterProvider', 'lazyProvider'];

  /**
   * Configure the titan.Base module's routes
   *
   * @public
   *
   * @memberof   titan.Base
   *
   * @author     snehilmodani
   *
   * @class
   * @param      {String}  APP_BASE_PATH       App Base path
   * @param      {Object}  $stateProvider      ui-router's stateProvider which is used to create
   *                                           application states/routes
   * @param      {Object}  $urlRouterProvider  ui-router's urlRouterProvider which watches the
   *                                           angular's $location for changes
   * @param      {Object}  lazyProvider        Provider instance of act.lazy used to lazy load
   *                                           modules
   */
  function RouterConfig(APP_BASE_PATH, $stateProvider, $urlRouterProvider, lazyProvider) {

    var BASE_DIR_CTRL = APP_BASE_PATH + 'app/base/ctrl/';
    var BASE_DIR_TPL = APP_BASE_PATH + 'app/base/tpl/';


    lazyProvider.configure('titan.Base');

    $urlRouterProvider
      .otherwise(routeOtherwiseConfig);
    console.log('here:RouterConfig');

    $stateProvider
      .state('app', {
        url: '/app',
        // abstract: true,
        templateUrl: BASE_DIR_TPL + 'base.tpl.html',
        controller: 'AppBaseController',
        controllerAs: 'ViewModel',
        resolve: {
          services: ['lazy',
            function(lazy) {
              console.log('here');
              return lazy.load(BASE_DIR_CTRL + 'base.ctrl.js');
            }
          ],
          session: [function() {
            console.log('here');
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
              console.log('here');
              return lazy.load(BASE_DIR_CTRL + 'error.ctrl.js');
            }
          ]
        }
      });

    // $urlRouterProvider.deferIntercept();

    // //////////////////////////////////////////////////////

    routeOtherwiseConfig.$inject = ['$injector'];

    /**
     * Handle navigation when the target route is not found
     *
     * @public
     *
     * @memberof   titan.Base
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

  /*=====  End of Config Blocks  ======*/

  /*==================================
  =            Run Blocks            =
  ==================================*/

  RouterChangeEventsRun.$inject = ['$urlRouter'];

  /**
   * Configure Router Change Events
   *
   * @public
   *
   * @memberof   titan.Base
   *
   * @author     snehilmodani
   *
   * @class
   * @param      {Object}  $urlRouter       Angular UI Router
   */
  function RouterChangeEventsRun($urlRouter) {

    // $urlRouter.sync();
    // $urlRouter.listen();
  }

  /*=====  End of Run Blocks  ======*/

});
