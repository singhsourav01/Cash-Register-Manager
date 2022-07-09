const billAmount = document.querySelector("#bill-amount");

const cashGiven = document.querySelector("#cash-given");

const button = document.querySelector(".btn");

const message = document.querySelector('#error-message');
hideMessage();

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

const noOfNotes = document.querySelectorAll('.no-of-notes');

button.addEventListener('click', e=>{
    e.preventDefault();
    hideMessage();
    if(billAmount.value && cashGiven !== undefined){
        if(cashGiven.value > billAmount.value){
            let amountToBeReturn = [cashGiven.value - billAmount.value] ;
            showMessage(`Remaining money to return ${amountToBeReturn}Rs`);
            calculateChange(amountToBeReturn);
        }
        else if(cashGiven.value === billAmount.value){
            showMessage(`Thanks for visiting`)
        }
        else{
            showMessage('Give our Remaining Money??')
            console.log(`cashgiven ${cashGiven.value} ${billAmount.value}`)
        }
    } else{        
        showMessage('Enter valid Amount');
    }

})

function showMessage(msg){
    message.style.display = 'block';
    message.innerText = msg;    
}

function hideMessage(){
    message.style.display = 'none';
}

function calculateChange(amountToBeReturn){
    console.log('oo');
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturn / availableNotes[i]);
        amountToBeReturn %=  availableNotes[i];
        noOfNotes[i].innerHTML = numberOfNotes;
    }

}
