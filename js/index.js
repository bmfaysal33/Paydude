

document.getElementById('login').addEventListener('click', function (event) {
    event.preventDefault();

    const numInput = document.getElementById('number-btn').value;
    const pinInput = document.getElementById('pin-btn').value;

    const converNum = parseInt(numInput);
    const converPin = parseInt(pinInput);

    // console.log(typeof converNum, typeof converPin);
    
  
        if ( converNum === 1234 && converPin === 1234) {
            // alert('Password Correct ✅✅✅')
            window.location.href= 'home.html'

        }
        else{
           
        alert('Invalid pin')
    
        }
    

    console.log('Button clicked')

})