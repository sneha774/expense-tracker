(function () {
	var app = angular.module("expenseApp", ["categoryModule", "expenseModule"]);

	/*** CONTROLLERS ***/
	app.controller("NavController", function ($scope, $location) {

		$scope.isActive = function (tab) {
			return $location.hash() == tab;
		}
	});

	app.controller("DataEntryController", function ($scope, CategoryService, ExpenseService) {
		// DATA
		$scope.expense = {};

		// METHODS
		var init = function () {
			$scope.expenseList = ExpenseService.getAllExpenses();
			$scope.categoryList = CategoryService.getCategories();
		};

		$scope.expense = {
			item: "Chocolate",
			amount: 1.34,
			purchaseDate: new Date(),
			category: "Grocery"
		};

		$scope.addExpense = function() {
			$scope.expenseList.push($scope.expense);
			ExpenseService.addExpense($scope.expense);
			$scope.expense = {
				purchaseDate: new Date(),
				category: "Grocery"
			};
		};

		$scope.removeExpense = function (index) {
			$scope.expenseList.splice(index, 1);
		};

		$scope.getCurrentMonthExpenses = function() {

		}

		init();
	});

	app.controller("ReportsController", function() {

	});

})();