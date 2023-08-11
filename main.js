const fpass = document.querySelector("#fpass")
const cpass = document.querySelector("#cpass")

document.querySelector('button').addEventListener('click',()=>{
    if(fpass.value !== cpass.value){
        document.querySelector('div > span').innerHTML = "*Passwords do not match"
        fpass.classList.add('error')
        cpass.classList.add('error')
    }
})