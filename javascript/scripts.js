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
  
$("#expense-form").submit(function(e) {
    e.preventDefault();
    if (budget != undefined) {
        var expenseTitle = $("#expense-title").val();
        var expenseAmount = parseInt($("#expense-amount").val());
    }
});

var newExpense = new Expense(expenseTitle, expenseAmount);

if (newExpense.amount < balance) {
    expenses.push(newExpense);

    $("#expense-summary").append(
        "<tr id='expense-" +
        expenses.length +
        "'>" +
        "<td>" +
        newExpense.title +
        "</td>" +
        "<td>" +
        "<p>" +
        '<i class="fas fa-dollar-sign"></i>' +
        "<span id='val-" +
        expenses.length +
        "'>" +
        newExpense.amount +
        " " +
        "</span>" +
        "</p>" +
        "</td>" +
        "<td>" +
        '<i class="fas fa-trash-alt red" id="del-' +
        expenses.length +
        '"></i>' +
        "</td>" +
        "</tr>"
    );
    totalExpenses = 0;

        for (let i = 0; i < expenses.length; i++) {
          totalExpenses += expenses[i].amount;
        }
        balance = budget - totalExpenses;

        $("#balance-amount").empty();
        $("#balance-amount").append(balance);
        $("#expenses-amount").empty();
        $("#expenses-amount").append(totalExpenses);
      }else{
        alert("You can't incur a deficit!!");
      }
    }
    