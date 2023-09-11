const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

function dolar(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var dolar = n1 * 0.0568629;
    document.getElementById("dolar").innerHTML = "Son: "+dolar+" US$";
}

function libra(){
    var n2 = parseFloat(document.getElementById("n2").value);
    var libra = n2 * 0.0456081;
    document.getElementById("libra").innerHTML = "Son: "+libra+" £";
}

function euro(){
    var n3 = parseFloat(document.getElementById("n3").value);
    var euro = n3 * 0.05310;
    document.getElementById("euro").innerHTML = "Son: "+euro+" €";
}