                        //---------------\\
                      //   PLEASE DEPOSIT   \\
                        //---------------\\

document.getElementById("deposit-button").addEventListener('click', function(){
    const depositInput = document.getElementById("deposit-input");
     const inputValue = depositInput.value ;
     const sumDeposit = document.getElementById('sum-deposit');
     const sumValue = sumDeposit.innerText;
     const inputValuenum = parseInt(inputValue);
     const sumValuenum = parseInt(sumValue);
     const intotal = inputValuenum + sumValuenum ;
   sumDeposit.innerText = intotal ;
   depositInput.value = '';

           //    TOTAL BALANCE 
   const totalBalance =  document.getElementById('total-balance');
   const Totalbalance = totalBalance.innerText ;
   const tBalance = parseInt(Totalbalance) ;
   totalBalance.innerText = tBalance + inputValuenum ;
})


                     //----------------\\
                   //   PLEASE WITHDRAW  \\
                     //----------------\\

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value ;
    const withdrawInt = parseInt(withdrawValue)
    const sumWithdraw = document.getElementById("sum-withdraw");
    const sumInnertext = sumWithdraw.innerText ;
    const suminner = parseInt(sumInnertext);
    sumWithdraw.innerText = suminner + withdrawInt

                    
                        // TOTAL BALANCE  \\
                        
    const totalBalance =  document.getElementById('total-balance');
    const Totalbalance = totalBalance.innerText ;
    const tBalance = parseInt(Totalbalance) ;
    totalBalance.innerText = tBalance - withdrawInt
    withdrawInput.value = '';
})