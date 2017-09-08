(function() {
  "use strict";

  angular.module("greet").controller("GreetUserController", GreetUserController);

  function GreetUserController() {
    let vm = this;
    vm.name = "Jimmy";
  }
})();