// Retrieve expenses from local storage or initialize an empty array
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Function to add an expense
function addExpense(event) {
  event.preventDefault();

  // Get expense details from the form
  const expenseId = document.getElementById('expenseId').value;
  const expenseName = document.getElementById('expenseName').value;
  const expenseDescription = document.getElementById('expenseDescription').value;
  const expenseCategory = document.getElementById('expenseCategory').value;

  // Create a new expense object
  const expense = {
    id: expenseId,
    name: expenseName,
    description: expenseDescription,
    category: expenseCategory
  };

  // Add the expense to the expenses array
  expenses.push(expense);

  // Save the expenses array to local storage
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // Add the expense to the display
  displayExpense(expense);

  // Clear the form fields
  document.getElementById('expenseId').value = '';
  document.getElementById('expenseName').value = '';
  document.getElementById('expenseDescription').value = '';
  document.getElementById('expenseCategory').value = '';
}

// Function to display an expense
function displayExpense(expense) {
  const expenseList = document.getElementById('expenseList');

  // Create a new expense element
  const expenseElement = document.createElement('div');
  expenseElement.innerHTML = `
    <p>ID: ${expense.id}</p>
    <p>Name: ${expense.name}</p>
    <p>Description: ${expense.description}</p>
    <p>Category: ${expense.category}</p>
    <button onclick="deleteExpense('${expense.id}')">Delete</button>
    <hr>
  `;

  // Append the expense element to the expense list
  expenseList.appendChild(expenseElement);
}

// Function to delete an expense
function deleteExpense(expenseId) {
  // Remove the expense from the expenses array
  expenses = expenses.filter(expense => expense.id !== expenseId);

  // Save the updated expenses array to local storage
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // Refresh the display
  displayExpenses();
}

// Function to display all expenses
function displayExpenses() {
  const expenseList = document.getElementById('expenseList');

  // Clear the expense list
  expenseList.innerHTML = '';

  // Iterate through each expense and display it
  expenses.forEach(expense => {
    displayExpense(expense);
  });
}

// Add event listener for form submission
document.getElementById('expenseForm').addEventListener('submit', addExpense);

// Display the existing expenses on page load
displayExpenses();
