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

  // End of Constants -----------------------------------------------------------------------------

  // // Angular Modules Registration

  // App Module Definitions Starts here -----------------------------------------------------------

  // Base for All v2 Modules

  angular.module('titan.Base', [
    // 3rd party
    'ui.router',
    // titan modules
    'titan.Globals',
    'act.lazy',
  ]);

  // All v2 Modules
  angular.module('titan.Main', ['titan.Base']);

});
