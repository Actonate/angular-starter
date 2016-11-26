define(['act-lazy'], function() {

  // Titan Globals Constants -----------------------------------------------------------------------

  var titanGlobals = angular.module('titan.Globals', []);

  /**
   * App Base Path
   */
  // @if NODE_ENV=='PRODUCTION'
  titanGlobals.constant('APP_BASE_PATH', '/' + '/* @echo buildPath */' + '/');
  // @endif

  // @if NODE_ENV=='DEVELOPMENT' || NODE_ENV == 'LOCAL'
  titanGlobals.constant('APP_BASE_PATH', '');
  // @endif

  /**
   *  System Constants
   */
  // Constants Configurations go here

  /**
   * Application Constants From JSON
   */
  // for (var outerKey in appConfig) {
  //   for (var innerKey in appConfig[outerKey]) {
  //     titanGlobals.constant(innerKey, appConfig[outerKey][innerKey]);
  //   }
  // }

  // End of Constants ------------------------------------------------------------------------------

  // // Angular Modules Registration

  // Base Directives, Filters, Modals

  angular.module('titan.Directives', ['titan.Globals']);

  angular.module('titan.Filters', ['titan.Globals']);

  angular.module('titan.Dialogs', ['titan.Globals']);

  // REST

  // angular.module('titan.Rest.mocks', []);

  // angular.module('titan.Rest', ['titan.Rest.mocks']);

  // V2 Starts here --------------------------------------------------------------------------------

  // Base for All v2 Modules

  angular.module('titan.Base', [
    // 3rd party
    // 'angulartics',
    // 'angulartics.google.analytics',
    'ui.router',
    // titan modules
    'titan.Globals',
    // 'titan.Directives', 'titan.Filters', 'titan.Dialogs',

    // act common modules
    // 'act.acl',
    'act.lazy',
    // 'act.log', 'act.localeLoader',
    // 'act.rest', 'act.translate'
  ]);

  // All v2 Modules
  angular.module('titan.Main', ['titan.Base']);

});
