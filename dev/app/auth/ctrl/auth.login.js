/**
 * @namespace act.Base
 */
define([], function() {

  angular
    .module('act.Base')
    .controller('AppBaseController', controller);

  controller.$inject = ['logger', 'Rest', '$state', 'SessionService','AuthService'];

  return controller;

  // //////////////////////////////////////////////////////

  /**
   * Application Base Controller (Lowest level of Scope)
   *
   * @public
   *
   * @memberof   act.Base
   *
   * @author     snehilmodani
   *
   * @param      {Object}  logger  act-log logger
   * @param      {Object}  Rest    act-rest REST Client
   */
  function controller(logger, Rest, $state, SessionService,AuthService) {

    var ViewModel = this;
    var log;
    log = logger.log().child('AppBaseController');
      

    ViewModel.message = 'manoj';
    ViewModel.triggerApi = triggerApi;
    

    // ///////////////////////////////////////////////////////

    /**
     * Send a test API call
     *
     * @public
     *
     * @memberof   act.Base.AppBaseController
     *
     * @author     shoaibmerchant
     */
    function triggerApi() {

      log.info("logout successfull");
      var data = ViewModel.project;
      AuthService.login(data);

       
        //SessionService.setLoggedIn();
     
      
    }
  }

});
