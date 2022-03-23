(function() {
  "use strict";
  var App = angular.module("Plugins").config(function($stateProvider) {
    $stateProvider.state("plugins.terminal", {
      templateUrl: "/public/plugins/terminal/views/index.html",
      controller: "TerminalPluginCtrl",
      url: "/terminal",
      title: "Terminal",
      sidebarMeta: {
        order: 1
      }
    })
  })
})();