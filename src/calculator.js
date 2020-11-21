const $ = elem => document.querySelector(elem)
const $$ = () => document.querySelectorAll(elem)
const getElementById = id => document.getElementById(id)

const DISPLAY = $('input[id="output"]')
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
    getElementById('1').addEventListener('click', () => (DISPLAY.value += '1'))
    getElementById('2').addEventListener('click', () => (DISPLAY.value += '2'))
    getElementById('3').addEventListener('click', () => (DISPLAY.value += '3'))
    getElementById('4').addEventListener('click', () => (DISPLAY.value += '4'))
    getElementById('5').addEventListener('click', () => (DISPLAY.value += '5'))
    getElementById('6').addEventListener('click', () => (DISPLAY.value += '6'))
    getElementById('7').addEventListener('click', () => (DISPLAY.value += '7'))
    getElementById('8').addEventListener('click', () => (DISPLAY.value += '8'))
    getElementById('9').addEventListener('click', () => (DISPLAY.value += '9'))
    getElementById('0').addEventListener('click', () => (DISPLAY.value += '0'))

    getElementById('AC').addEventListener('click', () => (DISPLAY.value = ''))
    getElementById('+').addEventListener(
        'click',
        () => (DISPLAY.value += ' + '),
    )
    getElementById('-').addEventListener(
        'click',
        () => (DISPLAY.value += ' - '),
    )
    getElementById('×').addEventListener(
        'click',
        () => (DISPLAY.value += ' * '),
    )
    getElementById('÷').addEventListener(
        'click',
        () => (DISPLAY.value += ' / '),
    )
    getElementById('(').addEventListener('click', () => (DISPLAY.value += '('))
    getElementById(')').addEventListener('click', () => (DISPLAY.value += ')'))
    getElementById('.').addEventListener('click', () => (DISPLAY.value += '.'))
    getElementById('%').addEventListener('click', () => (DISPLAY.value += '%'))
    getElementById('pow').addEventListener(
        'click',
        () => (DISPLAY.value += '**'),
    )

    getElementById('pi').addEventListener('click', () => pi())
    getElementById('e').addEventListener('click', () => euler())
    getElementById('sqrt').addEventListener('click', () => sqrt())
    getElementById('sin').addEventListener('click', () => sin())
    getElementById('asin').addEventListener('click', () => asin())

    getElementById('=').addEventListener('click', () => calculate())

    getElementById('output').addEventListener('click', event => {
        event.target.select()
        document.execCommand('copy')
    })

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
