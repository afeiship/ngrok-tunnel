(function () {
  'use strict';

  angular
    .module('ionicWechatApp')
    .service('ApiService', ApiService);

  var APISERVER = '';

  /** @ngInject */
  function ApiService($http) {
    //base methods:
    this.REQUEST = function (inMethod, inName, inOptions) {
      return $http(
        angular.extend({
          method: inMethod,
          dataType: 'json',
          url: _getUrl(inName)
        }, inOptions)
      );
    };

    this.GET = function (inName, inOptions) {
      var url = _getUrl(inName);
      return $http.get(url, inOptions);
    };

    this.POST = function (inName, inOptions) {
      var url = _getUrl(inName);
      return $http.post(url, inOptions.data || {}, inOptions);
    };


    function _getUrl(inName) {
      return APISERVER + inName;
    }
  }

})();
