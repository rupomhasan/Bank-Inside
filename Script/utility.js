function getInputFildValue(InputID)
{
    const inputFild = document.getElementById(InputID);
    const inputFildValue = parseFloat(inputFild.value);
    inputFild.value = '';

    return inputFildValue
}
function getInnerTextValue (TextID)
{
    const previousDeposit = document.getElementById(TextID);
    const previousAmount = parseFloat(previousDeposit.innerText);
    
    return previousAmount;
}


function setValueAtPosition (getSetId,newTotal)
{
    setAmount =document.getElementById(getSetId)
    setAmount.innerText = newTotal
}