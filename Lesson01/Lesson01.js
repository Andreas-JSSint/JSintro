const button01 = document.querySelector("#button");
const paragraph01 = document.querySelector("#paragraph01");
const paragraph02 = document.querySelector("#paragraph02");
button01.addEventListener('click', function (e) {
    paragraph01.classList.toggle('change');
    paragraph02.classList.toggle('change');    
}, false);