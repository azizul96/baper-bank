// add eventlistener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){

    const depositField = document.getElementById('deposit-field');
    const pushDeposit = depositField.value;
    const pushDepositNumber = parseFloat(pushDeposit);

    const previousDepositBox = document.getElementById('previous-deposit');
    const previousDeposit = previousDepositBox.innerText;
    const previousDepositNumber = parseFloat(previousDeposit);

    const totalDeposit = pushDepositNumber + previousDepositNumber;
    previousDepositBox.innerText = totalDeposit;

    const totalBalanceBox = document.getElementById('total-balance');
    const totalBalance = totalBalanceBox.innerText;
    const totalBalanceNumber = parseFloat(totalBalance);

    const currentTotalBalance = totalBalanceNumber + pushDepositNumber;
    totalBalanceBox.innerText = currentTotalBalance;


    depositField.value = "";

    
})