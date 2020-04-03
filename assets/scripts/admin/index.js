(function () {
  'use strict';
  var App = angular.module('Plugins')
  .config(function($stateProvider) {
    $stateProvider
    .state('plugins.terminal', {
      templateUrl : "/plugins/terminal/views/index.html",
      controller: 'TerminalPluginCtrl',
      url: '/terminal',
      title: 'Terminal',
      sidebarMeta: {
        order: 1,
      },
    });
  });
})();
