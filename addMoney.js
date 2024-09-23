
function showAddMoney(inputElement, blanceElement, historyHeading) {

    const inputBlance = inputValidation(inputElement.value);
    blanceElement.innerText = parseFloat(blanceElement.innerText) + inputBlance;
    cashOut(inputBlance);
    inputElement.value = '';
    
    if(inputBlance){
        showHistoryById(inputBlance, historyHeading);
    }
}
