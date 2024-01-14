let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn')
.onclick = () =>{
    navbar.classList.toggle('active');
    searchFom.classList.remove('active');
    cardItem.classList.remove('active');

}

let searchFom = document.querySelector('.search-form');

document.querySelector('#search-btn')
.onclick = () =>{
    searchFom.classList.toggle('active');
    navbar.classList.remove('active');
    cardItem.classList.remove('active');

}

let cardItem = document.querySelector('.card-items-container');

document.querySelector('#card-btn')
.onclick = () =>{
    cardItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchFom.classList.remove('active');

}

window.onscroll = ()=>{
    navbar.classList.remove('active');
    searchFom.classList.remove('active');
    cardItem.classList.remove('active');
}