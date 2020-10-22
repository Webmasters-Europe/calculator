const $ = elem => document.querySelector(elem)
const $$ = () => document.querySelectorAll(elem)
const DISPLAY = $('input[type="text"]')

const init = () => {
    addButtonEventListeners()
}

const calculate = () => {
    if (DISPLAY.value) {
        DISPLAY.value = eval(DISPLAY.value)
    }
}

function pi() {
    DISPLAY.value += Math.PI.toFixed(2)
}

function euler() {
    DISPLAY.value += Math.E.toFixed(2)
}

const addButtonEventListeners = () => {
    $('input[id="1"]').addEventListener('click', () => (DISPLAY.value += '1'))
    $('input[id="2"]').addEventListener('click', () => (DISPLAY.value += '2'))
    $('input[id="3"]').addEventListener('click', () => (DISPLAY.value += '3'))
    $('input[id="4"]').addEventListener('click', () => (DISPLAY.value += '4'))
    $('input[id="5"]').addEventListener('click', () => (DISPLAY.value += '5'))
    $('input[id="6"]').addEventListener('click', () => (DISPLAY.value += '6'))
    $('input[id="7"]').addEventListener('click', () => (DISPLAY.value += '7'))
    $('input[id="8"]').addEventListener('click', () => (DISPLAY.value += '8'))
    $('input[id="9"]').addEventListener('click', () => (DISPLAY.value += '9'))
    $('input[id="0"]').addEventListener('click', () => (DISPLAY.value += '0'))

    $('input[id="AC"]').addEventListener('click', () => (DISPLAY.value = ''))
    $('input[id="+"]').addEventListener('click', () => (DISPLAY.value += ' + '))
    $('input[id="-"]').addEventListener('click', () => (DISPLAY.value += ' - '))
    $('input[id="×"]').addEventListener('click', () => (DISPLAY.value += ' * '))
    $('input[id="÷"]').addEventListener('click', () => (DISPLAY.value += ' / '))
    $('input[id="("]').addEventListener('click', () => (DISPLAY.value += '('))
    $('input[id=")"]').addEventListener('click', () => (DISPLAY.value += ')'))
    $('input[id="."]').addEventListener('click', () => (DISPLAY.value += '.'))
    $('input[id="%"]').addEventListener('click', () => (DISPLAY.value += '%'))
    $('input[id="pi"]').addEventListener('click', () => pi())
    $('input[id="e"]').addEventListener('click', () => euler())

    $('input[id="="]').addEventListener('click', () => calculate())
}

init()
