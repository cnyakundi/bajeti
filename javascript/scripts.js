$(document).ready(function () {
    function Expense(title, amount) {
        this.title = title;
        this.amount = amount;
    }
  
    var totalExpenses;
  
    var expenses;
  
    var budget;
  
    var balance;
})

$("#budget-form").submit(function (e) {
    e.preventDefault();
    var budgetEntered = parseInt($("#budget").val());
    expenses = [];
    budget = budgetEntered;
    balance = budget;
    $("#balance-amount").empty();
    $("#balance-amount").append(balance);
    $("#budget-amount").empty();
    $("#budget-amount").append(budget);
    $("#expenses-amount").empty();
    $("#expenses-amount").append(0);
    $("#budget").val("");
  });