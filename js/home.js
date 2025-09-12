

document.getElementById('money-add-btn').addEventListener('click', function(e){

e.preventDefault();

 const addInputPin = document.getElementById('add-input-pin');
 const amountInput = document.getElementById('add-amount-input');

 const pinNum = addInputPin.value;
const inputAmount = amountInput.value;

if(pinNum === '1234'){
     const currentBalance = document.getElementById('available-balance');
     const balanceNow = parseFloat(currentBalance) + parseFloat(inputAmount);
     currentBalance.innerText = balanceNow;

 }
 else {
    alert('Invalid pin')
 }

})