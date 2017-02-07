/**
 * @namespace act
 */
define([
  // Base Config & Req
  'app-bootstrap',

  // Modules Configs
  'app/base/base.config'
], function() {

  angular.module('act', [
    'act.Base',
    'act.Globals',

    // All V2 Modules
    'act.Main',

    // All 3rd party modules
    'ngMaterial',
    'ngAnimate',
    'ngAria'
  ]);

  // /////////////////////////////////////

  /*=====================================
  =            Config Blocks            =
  =====================================*/

  /*=====  End of Config Blocks  ======*/

});
