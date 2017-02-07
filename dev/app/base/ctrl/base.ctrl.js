/**
 * @namespace act.Base
 */
define([], function() {

  angular
    .module('act.Base')
    .controller('AppBaseController', controller);

  controller.$inject = ['logger', 'Rest'];

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
  function controller(logger, Rest) {

    var ViewModel = this;
    var log = logger.log().child('AppBaseController');

    ViewModel.message = 'Hello World!';
    ViewModel.triggerApi = triggerApi;

    log.info('Hello World!');

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
      var httpResource = Rest.resource('').get('hello');

      httpResource()
        .then(function(res) {
          log.info('API Response', res.data);
        })
        .catch(function(err) {
          log.error('API Error', err);
        });
    }
  }

});
