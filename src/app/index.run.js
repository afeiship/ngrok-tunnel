(function () {
  'use strict';

  angular
    .module('ionicWechatApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, $timeout, $ionicLoading) {


    $rootScope.busy = false;
    $rootScope.delayNoBusy = delayNoBusy;

    function delayNoBusy(inSeconds) {
      var milliseconds = (inSeconds || 1) * 1000;
      $timeout(function () {
        $rootScope.busy = false;
      }, milliseconds);
    }

    $rootScope.$watch('busy', function (inValue) {
      if (inValue) {
        $ionicLoading.show({
          template: '<ion-spinner icon="ios"></ion-spinner>'
        });
      } else {
        $ionicLoading.hide();
      }
    });


    $log.debug('runBlock end');


  }

})();
