
function showAddMoney(inputElement, blanceElement) {

    const inputBlance = inputValidation(inputElement.value);
    blanceElement.innerText = parseFloat(blanceElement.innerText) + inputBlance;
    cashOut(inputBlance);
    inputElement.value = '';
}
