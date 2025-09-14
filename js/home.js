
// Background Green Function 

function makeGreen() {
    
}




// Add Money Feature 

document.getElementById('money-add-btn').addEventListener('click', function (e) {

    e.preventDefault();


    const pinNum = document.getElementById('add-input-pin').value;
    const amountInput = parseFloat(document.getElementById('add-amount-input').value);
    const currentBalance = document.getElementById('available-balance').innerText;


    if (pinNum !== '1234') {

        alert('Invalid pin')


    }
    else {
        const balanceNow = amountInput + parseFloat(currentBalance);

        document.getElementById('available-balance').innerText = balanceNow;
    }

})



// Cashout Feature 


document.getElementById('cashout-login-btn').addEventListener('click', function (e) {

    e.preventDefault();

    const cashoutAmount = parseFloat(document.getElementById('cashout-amount').value);

    const CashoutpinNum = document.getElementById('cashout-pin').value;

    const currentBalance = document.getElementById('available-balance').innerText;

    if (CashoutpinNum !== '1234') {

        alert('Invalid pin')

        // console.log()


    }


    else {
        const totalWithdraw = parseFloat(currentBalance) - cashoutAmount;

        if (totalWithdraw < 0) {
            alert('Insufficient balance')
            return;
        }
        else {
            document.getElementById('available-balance').innerText = totalWithdraw;
        }
    }

})



