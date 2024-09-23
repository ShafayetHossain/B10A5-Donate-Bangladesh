
document.getElementById('historyBtn').addEventListener('click', function(){
    showFlipById('historyBtn');
});

document.getElementById('donationBtn').addEventListener('click', function(){
    showFlipById('donationBtn');
});

document.getElementById('noakhaliDonateBtn').addEventListener('click', function(){


    const inputElement =  document.getElementById('noakhaliDonateInput');
    const banceElement =  document.getElementById('noakhaliBlance');
    showAddMoney(inputElement, banceElement);
});

document.getElementById('feniiDonateBtn').addEventListener('click', function(){


    const inputElement =  document.getElementById('feniDonateInput');
    const banceElement =  document.getElementById('feniBlance');
    showAddMoney(inputElement, banceElement);
});

document.getElementById('injuredDonateBtn').addEventListener('click', function(){


    const inputElement =  document.getElementById('injuredDonateInput');
    const banceElement =  document.getElementById('injuredBlance');
    showAddMoney(inputElement, banceElement);
});

