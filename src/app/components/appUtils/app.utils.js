(function () {
  'use strict';


  angular
    .module('ionicWechatApp')
    .factory('utils', utils);

  function utils() {
    return {
      toTimer: toTimer
    };


    function toTimer(inStartTime, inEndTime) {
      //todo:Must be not a nagative number:
      var start = +new Date();
      var end = +new Date(inEndTime);
      return Math.abs(moment.utc(end - start).unix());
    }
  }

})();
