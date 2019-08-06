//console.log("Hello from app.js")

 let checkBalance = 0;
       document.getElementById("checkdep").addEventListener("click", function(event) {
       checkBalance += parseInt(document.querySelector('#newinput').value);
       console.log(checkBalance)
       document.getElementsByClassName('checkbalance')[0].innerHTML = checkBalance
    if (checkBalance === 0) {
        document.getElementById('checking').style.backgroundColor = 'red';
    } 
});
        document.getElementById("takem").addEventListener("click", function(event) {
        checkBalance -= parseInt(document.querySelector('#newinput').value);
        console.log(checkBalance)
        document.getElementsByClassName('checkbalance')[0].innerHTML = checkBalance
        if (checkBalance === 0) {
            document.getElementById('checking').style.backgroundColor = 'red';
        } 
    }); 
       
   let saveBalance = 0
         document.getElementById("savedep").addEventListener("click", function(event) {
         saveBalance += parseInt(document.querySelector('#newin').value);
         console.log(saveBalance)
         document.getElementsByClassName('savebalance')[0].innerHTML = saveBalance
     });
     
         document.getElementById("takeout").addEventListener("click", function(event) {
         saveBalance -= parseInt(document.querySelector('#newin').value);
         console.log(saveBalance)
         document.getElementsByClassName('savebalance')[0].innerHTML = saveBalance
      }); 

      