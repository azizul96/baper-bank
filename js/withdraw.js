document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdraw = withdrawField.value;
    const newWithdrawNumber = parseFloat(newWithdraw);


    const previousWithdrawBox = document.getElementById('previous-withdraw');
    const previousWithdraw = previousWithdrawBox.innerText;
    const previousWithdrawNumber = parseFloat(previousWithdraw);

    const totalBalanceBox = document.getElementById('total-balance');
    const totalBalance = totalBalanceBox.innerText;
    const totalBalanceNumber = parseFloat(totalBalance);

    withdrawField.value = "";

    if(newWithdrawNumber > totalBalanceNumber){
        alert('Not Enough Money In Your Baap-Er-Bank' )
        return;
    }

    const totalWithdraw = previousWithdrawNumber + newWithdrawNumber;
    previousWithdrawBox.innerText = totalWithdraw;

    // (ei code guloke if er upore nie gechi validation er jonno)
    // const totalBalanceBox = document.getElementById('total-balance');
    // const totalBalance = totalBalanceBox.innerText;
    // const totalBalanceNumber = parseFloat(totalBalance);

    const currentTotalBalance = totalBalanceNumber - newWithdrawNumber;
    totalBalanceBox.innerText = currentTotalBalance;

    // withdrawField.value = "";

})