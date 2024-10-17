function calculateProfit() {
    const investment = parseFloat(document.getElementById('investment').value);
    const buyPrice = parseFloat(document.getElementById('buyPrice').value);
    const sellPrice = parseFloat(document.getElementById('sellPrice').value);
    const feePercent = parseFloat(document.getElementById('fee').value);
    const currency = document.getElementById('currency').value;

    if (isNaN(investment) || isNaN(buyPrice) || isNaN(sellPrice)) {
        document.getElementById('result').textContent = 'Please enter valid numbers!';
        return;
    }

    // Calculate crypto amount and fee deduction
    const cryptoAmount = investment / buyPrice;
    const grossProfit = cryptoAmount * sellPrice;
    const feeAmount = (grossProfit - investment) * (feePercent / 100);
    const netProfit = grossProfit - investment - feeAmount;

    // Calculate percentage profit/loss
    const percentageProfit = ((netProfit / investment) * 100).toFixed(2);

    if (netProfit > 0) {
        document.getElementById('result').textContent = `Profit: ${currency}${netProfit.toFixed(2)} (${percentageProfit}%)`;
    } else if (netProfit < 0) {
        document.getElementById('result').textContent = `Loss: ${currency}${Math.abs(netProfit).toFixed(2)} (${percentageProfit}%)`;
    } else {
        document.getElementById('result').textContent = 'No profit, no loss.';
    }
}

// Reset function to clear inputs
function resetCalculator() {
    document.getElementById('investment').value = '';
    document.getElementById('buyPrice').value = '';
    document.getElementById('sellPrice').value = '';
    document.getElementById('fee').value = '0';
    document.getElementById('currency').value = '$';
    document.getElementById('result').textContent = '';
}

// Toggle theme function for dark/light mode
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
