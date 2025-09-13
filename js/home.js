

document.getElementById('money-add-btn').addEventListener('click', function (e) {

    e.preventDefault();


    const pinNum = document.getElementById('add-input-pin').value;
    const amountInput = parseFloat(document.getElementById('add-amount-input').value);
    const currentBalance = document.getElementById('available-balance').innerText;

   
    if (pinNum === '1234') {

           const balanceNow = amountInput + parseFloat(currentBalance) ;

            document.getElementById('available-balance').innerText = balanceNow;
            

    }
    else {
        alert('Invalid pin')
    }

})