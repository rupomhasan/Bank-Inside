document.querySelector('#deposit-btn').addEventListener('click',function(){

    const inputFildAmount = getInputFildValue('depositFild')

    const preDepositAmount = getInnerTextValue('depositText')
    
    const preStoreBlance = getInnerTextValue('blanceText');


    const newTotalDeposit = inputFildAmount + preDepositAmount;
    
    setValueAtPosition('depositText',newTotalDeposit);

    const newTotalBalnce =preStoreBlance + inputFildAmount;

    setValueAtPosition('blanceText',newTotalBalnce);
});