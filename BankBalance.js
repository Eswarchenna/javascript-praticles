
let Amount=0

function creditAmount() {
    let Amount = Number(document.getElementById("Amount").value);

    if (amount > 0) {
        balance += amount;
        document.getElementById("balance").innerText = balance;
        document.getElementById("message").innerText =
            "₹" + amount + " credited successfully.";
    } else {
        document.getElementById("message").innerText =
            "Please enter a valid amount.";
    }
}

function debitAmount() {
    let amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {
        document.getElementById("message").innerText =
            "Please enter a valid amount.";
        return;
    }

    if (amount > balance) {
        document.getElementById("message").innerText =
            "Insufficient balance.";
        return;
    }

    balance -= amount;
    document.getElementById("balance").innerText = balance;

    document.getElementById("message").innerText =
        "₹" + amount + " debited successfully.";
}