document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdraw = withdrawField.value;
    const newWithdrawNumber = parseFloat(newWithdraw);

    const previousWithdrawBox = document.getElementById('previous-withdraw');
    const previousWithdraw = previousWithdrawBox.innerText;
    const previousWithdrawNumber = parseFloat(previousWithdraw);

    const totalWithdraw = previousWithdrawNumber + newWithdrawNumber;
    previousWithdrawBox.innerText = totalWithdraw;


    const totalBalanceBox = document.getElementById('total-balance');
    const totalBalance = totalBalanceBox.innerText;
    const totalBalanceNumber = parseFloat(totalBalance);

    const currentTotalBalance = totalBalanceNumber - newWithdrawNumber;
    totalBalanceBox.innerText = currentTotalBalance;

    withdrawField.value = "";

})