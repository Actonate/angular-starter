/**
 * @namespace titan
 */
define([
  // Base Config & Req
  'templates', 'app-bootstrap',

  // V2 Modules Configs
  'app/base/base.config'
], function() {

  angular.module('titan', [
    'titan.Base',

    // 'titan.Cache',

    // All V2 Modules
    'titan.Globals'
  ]);

  // /////////////////////////////////////

  /*=====================================
  =            Config Blocks            =
  =====================================*/

  /*=====  End of Config Blocks  ======*/

});
