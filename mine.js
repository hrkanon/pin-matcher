function generatePin(){
    const pin = Math.round(Math.random() * 10000);
    const pinText = pin + "";
    if(pinText.length == 4){
        document.getElementById("display-pin").value = pin;
        return pin;
    }
    else{
        generatePin();
    }
}


document.getElementById("key-pad").addEventListener('click', function(event){
    const number = event.target.innerText;
    let typedNumber = document.getElementById("typed-numbers");
    if(isNaN(number)){
        if(number == "C"){
            typedNumber.value = "";
        }
    }
    else{
        const previousNumber = typedNumber.value;
        const newNumber = previousNumber + number;
        typedNumber.value = newNumber;
    }
})



function verifyPin(){
// const generatedPin = generatePin();
const displayPin = document.getElementById("display-pin").value
const typedNumber = document.getElementById("typed-numbers").value;
const notifyFail = document.getElementById("notify-fail");
const notifySuccess = document.getElementById("notify-success");
 if(displayPin == typedNumber ){
    notifySuccess.style.display = "block";
     notifyFail.style.display = "none";
 }
 else{
     notifySuccess.style.display = "none";
     notifyFail.style.display = "block";
 }
}