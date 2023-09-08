const btn = document.querySelector('#btn')
const inp = document.querySelector('#input')
const search = document.querySelector('.search')

btn.addEventListener('click',()=>{
    search.classList.toggle('active')
    inp.focus();
})