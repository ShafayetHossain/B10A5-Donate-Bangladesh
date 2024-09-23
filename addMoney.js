document.getElementById('noakhaliDonateBtn').addEventListener('click', function(){

    let noakhaliDonateMoney = document.getElementById('noakhaliDonateInput');
    const moneyForNoakhali = inputValidationById(noakhaliDonateMoney.value);

    let noakhaiBlanceTag = document.getElementById('noakhaliBlance');

    noakhaiBlanceTag.innerText = parseFloat(noakhaiBlanceTag.innerText) + moneyForNoakhali;
    noakhaliDonateMoney.value = '';
    cashOut(moneyForNoakhali)
});