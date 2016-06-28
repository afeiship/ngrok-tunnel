(function () {
  'use strict';

  angular
    .module('ionicWechatApp')
    .directive('statsCode', statsCode);

  /** @ngInject */
  function statsCode($rootScope, $timeout, utils) {
    return {
      restrict: 'E',
      replace:true,
      templateUrl: 'app/components/stats-code/tmpl.html'
    };
  }

})();
