(function() {
  "use strict";
  var App = angular.module("Plugins");
  App.service("TerminalPluginService", ["$http", "toastr", "CatchHttpError", "$q", function($http, toastr, CatchHttpError, $q) {
    this.get = function() {
      return $http.get("/terminal-plugin").catch(CatchHttpError)
    };
    this.runCommand = function(command) {
      return $http.post("/terminal-plugin/run-command", {
        command: command
      }).catch(CatchHttpError)
    };
    this.abortCommands = function() {
      return $http.post("/terminal-plugin/abort-commands").catch(CatchHttpError)
    }
  }])
})();