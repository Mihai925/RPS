describe('RPSController', function() {
  beforeEach(module('RPSApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.gameOver', function() {
    it('is set to true if game is over', function() {
      var $scope = {};
      var controller = $controller('RPSController', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.battle({value: 'R', label: 'Rock'});
      expect($scope.gameOver).toEqual(true);
    });
  });

  describe('$scope.playerChoice', function() {
    it('is set to the value chosen by the player', function() {
      var $scope = {};
      var controller = $controller('RPSController', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.battle({value: 'R', label: 'Rock'});
      expect($scope.playerChoice).toEqual({value: 'R', label: 'Rock'});
    });
  });

  describe('$scope.computerChoice', function() {
    it('is set to a valid value when the game runs', function() {
      var $scope = {};
      var controller = $controller('RPSController', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.battle({value: 'R', label: 'Rock'});
      expect($scope.weapons).toContain($scope.computerChoice);
    });
  });

  describe('$scope.outcome', function() {
    it('is not invalid when the player has a valid move', function() {
      var $scope = {};
      var controller = $controller('RPSController', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.battle({value: 'R', label: 'Rock'});
      expect($scope.outcome).not.toEqual("INVALID");
    });
  });

  describe('$scope.outcome', function() {
    it('is invalid when the player has an invalid move', function() {
      var $scope = {};
      var controller = $controller('RPSController', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.battle({value: 'Q', label: 'Rock'});
      expect($scope.outcome).toEqual("INVALID");
    });
  });
});