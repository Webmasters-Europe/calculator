const $ = elem => document.querySelector(elem)
const $$ = () => document.querySelectorAll(elem)

const DISPLAY = $('input[type="text"]')
const KEY_UP = 38
const KEY_DOWN = 40
const history = []
let historyIndex = null

const init = () => {
    addButtonEventListeners()
}

const calculate = () => {
    history.push(DISPLAY.value)
    DISPLAY.value = eval(DISPLAY.value)
    history.push(DISPLAY.value)
    historyIndex = history.length - 1
}

function pi() {
    DISPLAY.value += Math.PI.toFixed(2)
}

function euler() {
    DISPLAY.value += Math.E.toFixed(2)
}

function sin() {
    DISPLAY.value = Math.sin(eval(DISPLAY.value))
}

function asin() {
    DISPLAY.value = Math.asin(eval(DISPLAY.value))
}

function sqrt() {
    history.push(DISPLAY.value)
    DISPLAY.value = Math.sqrt(eval(DISPLAY.value)).toFixed(3)
    history.push(DISPLAY.value)
    historyIndex = history.length - 1
}

const addButtonEventListeners = () => {
    $('button[id="1"]').addEventListener('click', () => (DISPLAY.value += '1'))
    $('button[id="2"]').addEventListener('click', () => (DISPLAY.value += '2'))
    $('button[id="3"]').addEventListener('click', () => (DISPLAY.value += '3'))
    $('button[id="4"]').addEventListener('click', () => (DISPLAY.value += '4'))
    $('button[id="5"]').addEventListener('click', () => (DISPLAY.value += '5'))
    $('button[id="6"]').addEventListener('click', () => (DISPLAY.value += '6'))
    $('button[id="7"]').addEventListener('click', () => (DISPLAY.value += '7'))
    $('button[id="8"]').addEventListener('click', () => (DISPLAY.value += '8'))
    $('button[id="9"]').addEventListener('click', () => (DISPLAY.value += '9'))
    $('button[id="0"]').addEventListener('click', () => (DISPLAY.value += '0'))

    $('button[id="AC"]').addEventListener('click', () => (DISPLAY.value = ''))
    $('button[id="+"]').addEventListener(
        'click',
        () => (DISPLAY.value += ' + '),
    )
    $('button[id="-"]').addEventListener(
        'click',
        () => (DISPLAY.value += ' - '),
    )
    $('button[id="×"]').addEventListener(
        'click',
        () => (DISPLAY.value += ' * '),
    )
    $('button[id="÷"]').addEventListener(
        'click',
        () => (DISPLAY.value += ' / '),
    )
    $('button[id="("]').addEventListener('click', () => (DISPLAY.value += '('))
    $('button[id=")"]').addEventListener('click', () => (DISPLAY.value += ')'))
    $('button[id="."]').addEventListener('click', () => (DISPLAY.value += '.'))
    $('button[id="%"]').addEventListener('click', () => (DISPLAY.value += '%'))
    $('button[id="pow"]').addEventListener('click', () => (DISPLAY.value += '**'))

    $('button[id="pi"]').addEventListener('click', () => pi())
    $('button[id="e"]').addEventListener('click', () => euler())
    $('button[id="sqrt"]').addEventListener('click', () => sqrt())
    $('button[id="sin"]').addEventListener('click', () => sin())
    $('button[id="asin"]').addEventListener('click', () => asin())

    $('button[id="="]').addEventListener('click', () => calculate())

    $('body').addEventListener('keydown', checkKeyboard)
}

const checkKeyboard = event => {
    if (event.keyCode === KEY_DOWN) {
        DISPLAY.value = history[historyIndex + 1] ?? ''
        historyIndex !== history.length ? historyIndex++ : null
    }
    if (event.keyCode === KEY_UP) {
        DISPLAY.value = history[historyIndex - 1] ?? ''
        historyIndex !== -1 ? historyIndex-- : null
    }
}

init()
