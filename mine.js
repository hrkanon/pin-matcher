function generatePin(){
    const pin = Math.round(Math.random() * 10000);
    const pinText = pin + "";
    if(pinText.length == 4){
        document.getElementById("display-pin").value = pin;
    }
    else{
        generatePin();
    }
}

document.getElementById('key-pad').addEventListener('click', function(event){
    if(isNaN(event.target.innerText)){
        if(event.target.innerText == "C"){
          document.getElementById('typed-numbers').value = "";  
        }
    }
    else{
    const typedPin = event.target.innerText;
    document.getElementById('typed-numbers').value = typedPin;
    }
})

function verifyPin(){
    
}