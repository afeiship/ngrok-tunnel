(function () {
  'use strict';

  angular
    .module('ionicWechatApp')
    .service('ApiService', ApiService);

  var APISERVER = '';

  /** @ngInject */
  function ApiService() {
    //base methods:
    this.REQUEST = function (inMethod, inName, inOptions) {
      return $http(
        angular.extend({
          method: inMethod,
          dataType: 'json',
          url: APISERVER + inName,
          headers: headers
        }, inOptions)
      );
    };

    this.GET = function (inName, inOptions) {
      return this.REQUEST('GET', inName, inOptions);
    };

    this.POST = function (inName, inOptions) {
      return this.REQUEST('POST', inName, inOptions);
    };
  }

})();
