const btn = document.querySelector('.btn')
const rightBtn = document.getElementById('btn1')
const par = document.getElementById('answer')

btn.addEventListener('click', answer)

function answer() {
    if (y2.checked) {
        right_var.classList.remove('hidden')
        wrong_var.classList.add('hidden')
        par.classList.add('hidden')
    } else {
        right_var.classList.add('hidden')
        wrong_var.classList.remove('hidden')
    }
}

rightBtn.addEventListener('click', () => {
    par.classList.remove('hidden')
})
