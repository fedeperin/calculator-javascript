const operations = document.querySelectorAll('.calculator button.operation')
const btns = document.querySelectorAll('.calculator button')
const input = document.querySelector('input')
const del = document.querySelector('.del')
const reset = document.querySelector('.reset')
const equal = document.querySelector('.equal')
let lastResult = ''

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        if(lastResult == '') {
            input.value += operation.textContent
        }else {
            input.value = lastResult
            input.value += operation.textContent
            lastResult = ''
        }
    })
})

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let touched = document.createElement('p')
        touched.textContent = btn.textContent
        touched.classList.add('touched')

        document.body.appendChild(touched)
    })
})

del.addEventListener('click', () => {
    input.value = input.value.substr(-input.value.length, input.value.length - 1)
    lastResult = ''
})
reset.addEventListener('click', () => {
    input.value = ''
    lastResult = ''
})
equal.addEventListener('click', () => {
    if(eval(input.value) != undefined) {
        lastResult = eval(input.value)
        input.value = input.value + ' = ' + lastResult
    }
})