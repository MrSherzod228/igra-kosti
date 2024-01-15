let block = document.querySelector('.block')
let btn = document.querySelector('button')

btn.onclick=()=>{
    block.innerHTML = Math.ceil(Math.random()*6)
}
