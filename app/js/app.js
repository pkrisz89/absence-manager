var app = angular.module("BookAnAbsence",[]); // MAIN APP

app.directive('ngReallyClick', [function() {   // asking for confirmation when the user want to perform a risky action (eg. delete)
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    }
}]);
 

app.controller('AbsenceController', ['$scope', function($abs){
	
$abs.add = function () {

                    // ADDS A NEW ROW TO THE LIST.
                    $abs.list.push({ name: $abs.name, from: $abs.from, to: $abs.to, type: $abs.type, notes: $abs.notes });

                    // CLEARS THE FORM FIELDS.
                    $abs.name = '';
                    $abs.from = '';
					$abs.to   = '';
					$abs.type = '';
					$abs.notes = '';
					
				
            }

$abs.delete = function() {
    $abs.list.splice(this.$index, 1);
}
 
  
 /* $abs.confirm = function(index) { // CONFIRM BUTTON
   
  } 

/*	$scope.list = [
 {
	name: "Kris Pinter",
	from: "10/03/2016",
	to: "15/03/2016",
	type: "Holiday",
	notes: "Prebooked Holiday"
 },
 {
	name: "John Doe",
	from: "01/04/2016",
	to: "02/04/2016",
	type: "Sickness",
	notes: "High fever" 
 },
 {
	name: "Proud Mary",
	from: "01/05/2016",
	to: "11/04/2016",
	type: "Holiday",
	notes: "Wedding in Las Vegas"  
	 
 }];*/
	
  }]);
  
app.controller('PanelController', ['$scope', function($scope) {
	$scope.tab = 1; // sets the default tab
	$scope.selectTab = function(setTab){
		$scope.tab = setTab;
	};
	$scope.isSelected = function(checkTab){
		return $scope.tab === checkTab;
		
	};

  }]);
  

  


 
    