const username = document.getElementById('usernametxt');
const password = document.getElementById('passwordtxt');
const errortext = document.getElementById('texterror');

function showMasseg(){
    if(username.value == 'Ramin' & password.value == '987654321'){
        errortext.innerHTML= 'true'
        errortext.style.color= 'green'
        errortext.style.fontSize= '22'+ 'px'

    }else{
       errortext.innerHTML= 'incorect username or password'
    }
}
