
document.getElementById('historyBtn').addEventListener('click', function(){
    showFlipById('historyBtn');
    showFlipSectionById('historySection');
});

document.getElementById('donationBtn').addEventListener('click', function(){
    showFlipById('donationBtn');
    showFlipSectionById('donateSection');
});

document.getElementById('noakhaliDonateBtn').addEventListener('click', function(){


    const inputElement =  document.getElementById('noakhaliDonateInput');
    const banceElement =  document.getElementById('noakhaliBlance');
    const historyHeading =  document.getElementById('noakhaliHeading');
    showAddMoney(inputElement, banceElement, historyHeading);
});

document.getElementById('feniiDonateBtn').addEventListener('click', function(){


    const inputElement =  document.getElementById('feniDonateInput');
    const banceElement =  document.getElementById('feniBlance');
    const historyHeading =  document.getElementById('feniHeading');
    showAddMoney(inputElement, banceElement, historyHeading);
});

document.getElementById('injuredDonateBtn').addEventListener('click', function(){


    const inputElement =  document.getElementById('injuredDonateInput');
    const banceElement =  document.getElementById('injuredBlance');
    const historyHeading =  document.getElementById('injuredHeading');
    showAddMoney(inputElement, banceElement, injuredHeading, historyHeading);
});

