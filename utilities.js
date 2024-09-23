
document.getElementById('historyBtn').addEventListener('click', function(){
    showFlipById('historyBtn');
});

document.getElementById('donationBtn').addEventListener('click', function(){
    showFlipById('donationBtn');
});

function cashOut(money) {
   const yourTotalBlance = document.getElementById('yourBlance');
   yourTotalBlance.innerText = parseFloat(yourTotalBlance.innerText) - money;
}


function inputValidationById(money) {
    if(isNaN(money) || money ==='')
    {
        alert("Invalid Donation amount");
        return 0;
    }
    else {

        return parseFloat(money);
    }
}

