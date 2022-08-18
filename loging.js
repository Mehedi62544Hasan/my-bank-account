 document.getElementById("press-button").addEventListener('click', function(){
    const emailValue = document.getElementById(" input-email");
    const email = emailValue.value ;
    const passValue = document.getElementById("input-pass") 
    const password = passValue.value ;
    if(email === 'mehedi@gmail.com' && password === '123456'){
       window.location.href = 'bank.html'
    }
    else{
        alert('Invalid password')
    }
 })
 