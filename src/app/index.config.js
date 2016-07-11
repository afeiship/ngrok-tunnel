(function () {
  'use strict';

  angular
    .module('<%= projectName %>')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, localStorageServiceProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-center';
    toastrConfig.preventDuplicates = false;
    toastrConfig.preventOpenDuplicates = true;
    toastrConfig.progressBar = false;

    //localstorage config:
    localStorageServiceProvider
      .setPrefix('dacang')
      .setStorageType('localStorage')
      .setNotify(true, true);

    //localStorageService.set('key','value')/localStorageService.get('key')

  }

})();
