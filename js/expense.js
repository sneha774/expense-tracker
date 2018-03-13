var expenseModule = angular.module("expenseModule", []);

/*** SERVICES ***/
expenseModule.service("ExpenseService", function () {
	var expenselist;

	this.getAllExpenses = function() {
		expenselist = JSON.parse(localStorage.getItem("expenseList")) || [];
		return expenselist;
	};
	this.saveAllExpenses = function() {
		localStorage.setItem("expenseList", JSON.stringify(expenselist));
	};
	this.addExpense = function (expense) {
		expenselist.push(expense);
		this.saveAllExpenses();
	};
});
/*** CONTROLLERS ***/

