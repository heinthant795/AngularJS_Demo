var app = angular.module('SampleApp',[]);

app.controller('Shearer', ['$scope',function($scope)
{
    $scope.name = 'Alan Shearer(Newcastle United-Retired)';
    $scope.age = 49;
    $scope.goals = 260;
}])

app.controller('Wazza', ['$scope',function($scope)
{
    $scope.name = 'Wayne Rooney(Derby County)';
    $scope.age = 34;
    $scope.goals = 208;
}])

app.controller('AndyCole', ['$scope',function($scope)
{
    $scope.name = 'Andrew Cole(Manchester United-Retired)';
    $scope.age = 48;
    $scope.goals = 187;
}])

app.controller('Messi', ['$scope',function($scope)
{
    $scope.name = 'Lionel Messi(FC Barcelona)';
    $scope.age = 32;
    $scope.goals = 438;
}])

app.controller('Cris', ['$scope',function($scope)
{
    $scope.name = 'Cristiano Ronaldo(Real Madrid)';
    $scope.age = 35;
    $scope.goals = 311;
}])

app.controller('Zarra', ['$scope',function($scope)
{
    $scope.name = 'Telmo Zarra(Athlectic Bilbao-Retired)';
    $scope.age = '85(Deceased)';
    $scope.goals = 251;
}])

app.controller('Piola', ['$scope',function($scope)
{
    $scope.name = 'Silvio Piola(Juventus)';
    $scope.age = '83(Deceased)';
    $scope.goals = 274;
}])

app.controller('Totti', ['$scope',function($scope)
{
    $scope.name = 'Francesco Totti(FC Roma-Retired)';
    $scope.age = 43;
    $scope.goals = 250;
}])

app.controller('Gunnar', ['$scope',function($scope)
{
    $scope.name = 'Gunnar Nordahl(AC Milan)';
    $scope.age = '73(Deceased)';
    $scope.goals = 225;
}])

app.controller('Muller', ['$scope',function($scope)
{
    $scope.name = 'Gerd Muller(FC Bayern Munchen-Retired)';
    $scope.age = 74;
    $scope.goals = 365;
}])

app.controller('Fischer', ['$scope',function($scope)
{
    $scope.name = 'Klaus Fischer(FC Schalke 04-Retired)';
    $scope.age = 70;
    $scope.goals = 268;
}])

app.controller('Lewy', ['$scope',function($scope)
{
    $scope.name = 'Robert Lewandowski(FC Bayern Munchen)';
    $scope.age = 31;
    $scope.goals = 227;
}])