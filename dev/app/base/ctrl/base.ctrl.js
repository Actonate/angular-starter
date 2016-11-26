/**
 * @namespace titan.Base
 */
define([], function() {

  angular
    .module('titan.Base')
    .controller('AppBaseController', controller);

  controller.$inject = [];

  return controller;

  // //////////////////////////////////////////////////////

  /**
   * Application Base Controller (Lowest level of Scope)
   *
   * @public
   *
   * @memberof   titan.Base
   *
   * @author     snehilmodani
   *
   */
  function controller() {

    // var ViewModel = this;

    console.log('Ctrl: Hello World!');
  }

});
