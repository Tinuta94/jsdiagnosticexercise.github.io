//console.log("Hello from app.js")

 let checkBalance = 0;

    document.getElementById("checkdep").addEventListener("click", function(event) {

        checkBalance += parseInt(document.querySelector('#newinput').value);
       console.log(checkBalance)
       document.getElementsByClassName('checkbalance')[0].innerHTML = checkBalance
    });
    
       document.getElementById("takem").addEventListener("click", function(event) {
        checkBalance -= parseInt(document.querySelector('#newinput').value);
        console.log(checkBalance)
        document.getElementsByClassName('checkbalance')[0].innerHTML = checkBalance
     }); 
       
      