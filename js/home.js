
// Background Green Function 



                    //  Reusable functions -Starts Here 


// Getting Value 
function getFloatValue(id) {
    const getValue = parseFloat(document.getElementById(id).value);
    return getValue;
}

// For Toggling Feature 

function toggleForm(id) {

    const formsClass = document.getElementsByClassName("feature-forms");

    for (const forms of formsClass) {
        forms.style.display = 'none';
        document.getElementById(id).style.display ='block';
    }

}

// Make cards Active

    function activeBtn(id){
         const cards = document.getElementsByClassName('card-btn')
    for(const card of cards){
        card.classList.remove('bg-blue-200', 'border-2', 'border-blue-500');
        card.classList.add('bg-white');
    }
     document.getElementById(id).classList.remove('bg-white');
    document.getElementById(id).classList.add('bg-blue-200', 'border-2', 'border-blue-500');
    }


                    //  Reusable functions -Ends Here 

const transcationData = []

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

        const data = {
            name: 'Add Money',
            date: new Date().toLocaleTimeString()
        }

        transcationData.push(data);
    }

})



// Cashout Feature 


document.getElementById('cashout-login-btn').addEventListener('click', function (e) {

    e.preventDefault();

    const cashoutAmount = getFloatValue("cashout-amount");

    const CashoutpinNum = document.getElementById('cashout-pin').value;

    const currentBalance = document.getElementById('available-balance').innerText;

    if (CashoutpinNum !== '1234') {

        alert('Invalid pin')

    }


    else {
        const totalWithdraw = parseFloat(currentBalance) - cashoutAmount;

        if (totalWithdraw < 0 || currentBalance < totalWithdraw) {
            alert('Insufficient balance')
            return;
        }
        else {
            document.getElementById('available-balance').innerText = totalWithdraw;
            
        const data = {
            name: 'Cash Out',
            date: new Date().toLocaleTimeString()
        }

        transcationData.push(data);

        console.log(transcationData)
        }
    }

})


// Transaction section 

document.getElementById('transactions-card').addEventListener('click', function(e){
e.preventDefault();

const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerHTML = "";
    
for ( const data of transcationData ){
    const div = document.createElement('div');
    div.innerHTML =`
      <div class="p-2 bg-white rounded-xl flex flex-row items-center my-4">
        <div class="p-3 mr-3 rounded-full bg-[#f4f5f7]">
          <img src="assets/wallet1.png" alt="" />
        </div>
        <div>
          <h1>${data.name}</h1>
          <p>${data.date}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical ml-35 text-2xl cursor-pointer "></i>
      </div>
    `
    transactionContainer.appendChild(div)
}




})

// Toggling Feature 


// Show Add money form ---- Old Method
document.getElementById('add-card').addEventListener('click', function (e) {
    e.preventDefault();

    toggleForm('add-section');
    activeBtn('add-card');
    
})


// Show Cashout Form 

document.getElementById('cashout-card').addEventListener('click', function (e) {
    e.preventDefault();

    toggleForm('cashout-section');

   
    activeBtn('cashout-card');
   


})


// Show Transfer Form

document.getElementById('transfer-card').addEventListener('click', function (e) {
    e.preventDefault();

    toggleForm('transfer-section');
    activeBtn('transfer-card');
})

// Show Get Bonus Form

document.getElementById('bonus-card').addEventListener('click', function (e) {
    e.preventDefault();

    toggleForm('bonus-section');
    activeBtn('bonus-card');
})

// Show Pay bill Form

document.getElementById('pay-bill-card').addEventListener('click', function (e) {
    e.preventDefault();

    toggleForm('pay-bill-section');
    activeBtn('pay-bill-card');
})


// Show Transactions Form

document.getElementById("transactions-card").addEventListener('click', function (e) {

    e.preventDefault();
    
    toggleForm("transactions-section");
    activeBtn("transactions-card");
})










