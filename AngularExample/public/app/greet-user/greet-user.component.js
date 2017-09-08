(function() {
  "use strict";

  angular.module("greet", []).component("greet", {
    controller: "GreetUserController",
    templateUrl: "/app/greet-user/greet-user.html"
  });
})();