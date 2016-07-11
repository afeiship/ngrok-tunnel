(function () {
  'use strict';

  angular
    .module('<%= projectName %>')
    .service('ApiService', ApiService);

  var extend = angular.extend;

  /** @ngInject */
  function ApiService($http, APISERVER) {
    //base methods:
    this.REQUEST = function (inMethod, inName, inOptions) {
      return $http(
        extend({
          method: inMethod,
          dataType: 'json',
          url: _getUrl(inName)
        }, inOptions)
      );
    };

    this.GET = function (inName, inOptions) {
      var params = inOptions.data || inOptions.params || {};
      return this.REQUEST(
        'GET', inName,
        extend(inOptions, {
          params: params
        })
      );
    };

    this.POST = function (inName, inOptions) {
      return this.REQUEST('POST', inName, inOptions);
    };


    function _getUrl(inName) {
      return APISERVER + inName;
    }
  }

})();
