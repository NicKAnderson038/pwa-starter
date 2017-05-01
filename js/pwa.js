if ('serviceWorker' in navigator) {

  /*
  Defer service worker registration
  https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration
  */
  window.addEventListener('load', function () {
    navigator
      .serviceWorker
      .register('/service-worker.js')
      .then(function () {
        //success
      }).catch(function (error) {
        console.log('Could not register service worker', error);
      });
  });
}

// var angular = require('angular');
// var ngModule = angular.module('app',[]);
// console.log(ngModule);