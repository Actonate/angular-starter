/**
 * @namespace titan.Auth
 */
define([
  'app-bootstrap'
], function() {

  angular
    .module('titan.Base')
    .controller('ToastController', controller);

  controller.$inject = ['$mdToast'];

  return controller;

  // //////////////////////////////////////////////////////

  /**
   * Auth Base Controller
   *
   * @public
   *
   * @memberof   titan.Base
   *
   * @author     shoaibmerchant
   *
   * @param      {Objet}  $mdToast  Angular Material Toast Service
   */
  function controller($mdToast) {
    var ViewModel = this;

    ViewModel.closeToast = closeToast;

    // //////////////////////////////////////////////////////

    /**
     * Close the toast
     *
     * @public
     *
     * @memberof   titan.Base.ToastController
     *
     * @author     shoaibmerchant
     */
    function closeToast() {
      $mdToast.hide();
    }
  }

});

