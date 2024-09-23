function cashOut(money) {
    const yourTotalBlance = document.getElementById('yourBlance');
    yourTotalBlance.innerText = parseFloat(yourTotalBlance.innerText) - money;
 }