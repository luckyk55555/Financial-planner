// Default currency symbol
let currencySymbol = '$';

// Update currency symbols when user selects a different currency
function updateCurrencySymbol() {
    const currency = document.getElementById("currency").value;

    switch (currency) {
        case 'USD':
            currencySymbol = '$';
            break;
        case 'EUR':
            currencySymbol = '€';
            break;
        case 'GBP':
            currencySymbol = '£';
            break;
        case 'JPY':
            currencySymbol = '¥';
            break;
        default:
            currencySymbol = '$';
    }

    // Update the currency symbols in the HTML
    document.getElementById("incomeCurrencySymbol").textContent = currencySymbol;
    document.getElementById("expensesCurrencySymbol").textContent = currencySymbol;
    document.getElementById("goalCurrencySymbol").textContent = currencySymbol;
    document.getElementById("savedCurrencySymbol").textContent = currencySymbol;
}

// Income and Expense Calculator
function calculateBalance() {
    var income = parseFloat(document.getElementById("income").value) || 0;
    var expenses = parseFloat(document.getElementById("expenses").value) || 0;
    var balance = income - expenses;
    document.getElementById("balanceResult").textContent = "Your Balance is: " + currencySymbol + balance.toFixed(2);
}

// Savings Progress Bar
function updateProgress() {
    var goal = parseFloat(document.getElementById("goal").value) || 0;
    var saved = parseFloat(document.getElementById("saved").value) || 0;
    var progress = (goal > 0) ? (saved / goal) * 100 : 0;

    document.getElementById("savingsProgress").value = progress;
    document.getElementById("progressText").textContent = "You have saved " + progress.toFixed(2) + "% of your goal.";
}

// Initialize the currency symbols on page load
updateCurrencySymbol();