
function themeSwitcher(value) {
    let sheets = document.getElementsByTagName('link');
    sheets[0].href = value;
}

const display = document.getElementById('display')
const answer = document.getElementById('answer')
const erase = document.getElementById('erase')
const reset = document.getElementById('reset')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        display.value += btn.value
    })
})

reset.addEventListener('click', () => {
    display.value = ''
})

erase.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
})


answer.addEventListener('click', () => {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'ERR:SYNTAX'
    }
})

