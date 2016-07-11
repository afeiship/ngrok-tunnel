(function () {
  'use strict';

  angular
    .module('<%= projectName %>', [
      'ngAnimate',
      'ionic',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ui.router',
      'toastr',
      'timer',
      'LocalStorageModule',
      'nx.widget'
    ]);

})();
