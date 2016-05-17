/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('ionicWechatApp')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APISERVER', 'http://www.api.com/v1');

})();
