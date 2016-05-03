(function() {
  'use strict';

  angular
    .module('ionicWechatApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
