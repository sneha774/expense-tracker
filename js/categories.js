
var categoryModule = angular.module("categoryModule", []);

/*** SERVICES ***/
categoryModule.service("CategoryService", function () {
	var categories = [];
	this.saveCategories = function (categories) {
		localStorage.setItem("categories", JSON.stringify(categories));
	};
	this.getCategories = function () {
		return JSON.parse(localStorage.getItem("categories"));
	};
	this.addCategory = function (category) {
		categories.push(category);
		this.saveCategories(categories);
	};
	this.deleteCategory = function (index) {
		categories.splice(index, 1);
	};
	this.editCategory = function (index, newName) {
		categories[index] = newName;
		this.saveCategories(categories);
	};

	this.init = function () {
		categories = [
			"Grocery",
			"Resturant",
			"Nihira related",
			"Shopping",
			"Phone",
			"Car",
			"Internet",
			"Excel",
			"Gas",
			"Medical insurance",
			"Car insurance",
			"Miscellaneous",
			"Daycare",
			"Rent",
			"Montly house payment"
		];
		this.saveCategories(categories);
	};
	this.init();
});

/*** CONTROLLERS ***/
categoryModule.controller("CategoryController", function ($scope, CategoryService) {
	$scope.categories = CategoryService.getCategories();
	$scope.editMode = [];
	for (var idx in $scope.categories) {
		$scope.editMode.push(false);
	}

	$scope.goEditMode = function (index) {
		$scope.editMode[index] = true;
	};

	$scope.editCategory = function (index, newName) {
		$scope.editMode[index] = false;
		$scope.categories[index] = newName;
		CategoryService.editCategory(index, newName);
	};

	$scope.deleteCategory = function (index) {
		$scope.categories.splice(index, 1);
		CategoryService.deleteCategory(index);
	};

	$scope.addNewCategory = function () {
		$scope.categories.push($scope.newCategory);
		CategoryService.addCategory($scope.newCategory);
		$scope.newCategory = "";
	}
});