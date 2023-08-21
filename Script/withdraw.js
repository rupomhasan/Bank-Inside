document.querySelector('#withdraw-btn').addEventListener('click',function(){

    const inputFildAmount = getInputFildValue('withdrawFild')

    const preWithdrawAmount = getInnerTextValue('withdrawText')
    
    const preStoreBlance = getInnerTextValue('blanceText');


    const newTotalWithdraw = inputFildAmount + preWithdrawAmount;
    
    setValueAtPosition('withdrawText',newTotalWithdraw);

    const newTotalBalnce =preStoreBlance - inputFildAmount;

    setValueAtPosition('blanceText',newTotalBalnce);
});