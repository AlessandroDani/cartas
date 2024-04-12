const buttonLogin  = document.getElementById('submit__button');
const user = document.getElementById('input__user');
const password = document.getElementById('input__password');

buttonLogin.addEventListener('click', ()=>{
    if(user.value == 'admin' && password.value == 1234){
        localStorage.setItem('usuario', user.value);
        alert('Bienvenido a su pagina web de cartas');
        window.location.href = "homepage.html";
    }else{
        alert("Sus credenciales son incorrectas, vuelve a intentarlo");
    }
})