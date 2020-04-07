const CONTAINER = document.createElement('div');
CONTAINER.className = 'container';
document.body.append(CONTAINER);


const TEXTAREA = document.createElement('textarea');
TEXTAREA.className = 'textarea';
TEXTAREA.id = 'area';
TEXTAREA.autofocus = 'false';
TEXTAREA.cols = 142;
TEXTAREA.rows = 20;
CONTAINER.prepend(TEXTAREA);

const KEYBOARD = document.createElement('div');
KEYBOARD.className = 'keyboard';
CONTAINER.append(KEYBOARD);

const DESCRIPTION = document.createElement('div');
DESCRIPTION.className = 'description';
DESCRIPTION.innerHTML = '<p>Клавиатура создана в операционной системе Windows.</p><p>Переключения языка с помощью комбинации клавиш вируальной клавиатуры "Ctrl" + "Alt".</p>';
CONTAINER.append(DESCRIPTION);



const KEYS = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 'Backspace', 'Tab', 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 'Delete', 'CapsLock', 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 'Enter', 'ShiftLeft', 220, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 'ArrowUp', 'ShiftRight', 'ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const en = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];

const EN = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspase', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];

const ru = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];

const RU = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspase', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];

let languages = [
    [en, EN],
    [ru, RU]
];

let createButtons = (keyboardLayout) => {
    keyboardLayout.forEach(char => {
        let button = document.createElement('button');
        button.innerHTML = `${char}`;
        button.className = 'button';
        KEYBOARD.appendChild(button);
    });
};

let language = 0;
let register = 0;

createButtons(languages[language][register]);


window.onload = function () {
    if (localStorage.getItem('lang')) {
        language = +localStorage.getItem('lang');
    }
    changeButtons(languages[language][register]);
};

const BUTTONS = document.querySelectorAll('button');

const setSpecialButtons = () => {
    let count = 1;
    BUTTONS.forEach(button => {
        switch (button.innerHTML) {
            case 'Enter':
                button.id = 'enter';
                button.classList.add('button_double-long', 'button-event');
                break;
            case 'Del':
                button.id = 'del';
                button.classList.add('button-event');
                break;
            case 'Backspase':
                button.id = 'backspase';
                button.classList.add('button_double-long', 'button-event');
                break;
            case ' ':
                button.id = 'gap';
                button.classList.add('button-event');
                break;
            case 'Tab':
                button.id = 'tab';
                button.classList.add('button-event');
                break;
            case 'Caps Lock':
                button.id = 'caps-lock';
                button.classList.add('button_double-long', 'button-event');
                break;
            case 'Shift':
                button.id = `shift-${count}`;
                if (count == 1) {
                    button.classList.add('button_double-long');
                }
                count++;
                button.classList.add('button-event');
                break;
            case 'Win':
                button.id = 'win';
                button.classList.add('button-event');
                break;
            case 'Ctrl':
                button.id = 'ctrl';
                button.classList.add('button-event');
                break;
            case 'Alt':
                button.id = 'alt';
                button.classList.add('button-event');
                break;
            case '←':
                button.id = 'arrow-left';
                button.classList.add('button-event');
                break;
            case '→':
                button.id = 'arrow-right';
                button.classList.add('button-event');
                break;
            case '↑':
                button.id = 'arrow-up';
                button.classList.add('button-event');
                break;
            case '↓':
                button.id = 'arrow-down';
                button.classList.add('button-event');
                break;
            default:
                button.classList.add('symbol-button');
        }
    });
};

setSpecialButtons();


const changeButtons = (keyboardLayout) => {
    BUTTONS.forEach((button, el) => {
        button.innerHTML = keyboardLayout[el];
    });
};

const changeLanguage = () => {
    if (language >= languages.length - 1) {
        language = 0;
    } else {
        language += 1;
    }
    localStorage.setItem('lang', language);
    changeButtons(languages[language][register]);
};




const eventButtons = (button) => {
    let str = TEXTAREA.value;
    let textCursorPosition;
    switch (button.id) {
        case 'enter':
            TEXTAREA.value += '\n';
            break;
        case 'backspase':
            textCursorPosition = TEXTAREA.selectionStart;
            if (TEXTAREA.selectionStart === TEXTAREA.selectionEnd) {
                TEXTAREA.value = str.slice(0, TEXTAREA.selectionStart - 1) + str.slice(TEXTAREA.selectionStart, str.length);
                TEXTAREA.selectionStart = TEXTAREA.selectionEnd = textCursorPosition - 1;
            }
            else {
                TEXTAREA.value = str.slice(0, TEXTAREA.selectionStart) + str.slice(TEXTAREA.selectionEnd, str.length);
                TEXTAREA.selectionStart = TEXTAREA.selectionEnd = textCursorPosition;
            }

            break;
        case 'del':
            textCursorPosition = TEXTAREA.selectionStart;
            if (TEXTAREA.selectionStart === TEXTAREA.selectionEnd) {
                TEXTAREA.value = str.slice(0, TEXTAREA.selectionStart) + str.slice(TEXTAREA.selectionStart + 1, str.length);
            }
            else {
                TEXTAREA.value = str.slice(0, TEXTAREA.selectionStart) + str.slice(TEXTAREA.selectionEnd, str.length);
            }
            TEXTAREA.selectionStart = TEXTAREA.selectionEnd = textCursorPosition;
            break;
        case 'gap':
            TEXTAREA.value += ' ';
            break;
        case 'tab':
            TEXTAREA.value += '         ';
            break;
        case 'win':
            break;
        case 'ctrl':
            break;
        case 'alt':
            break;
        case 'arrow-left':
            textCursorPosition = TEXTAREA.selectionStart;
            TEXTAREA.selectionStart = TEXTAREA.selectionEnd = textCursorPosition - 1;
            break;
        case 'arrow-right':
            textCursorPosition = TEXTAREA.selectionStart;
            if (textCursorPosition == TEXTAREA.value.length) {
                TEXTAREA.selectionStart = TEXTAREA.selectionEnd = 0;
            } else {
                TEXTAREA.selectionStart = TEXTAREA.selectionEnd = textCursorPosition + 1;
            }
            break;
        case 'arrow-up':
            textCursorPosition = TEXTAREA.selectionStart;
            TEXTAREA.selectionStart = TEXTAREA.selectionEnd = textCursorPosition - TEXTAREA.cols;
            break;
        case 'arrow-down':
            textCursorPosition = TEXTAREA.selectionStart;
            TEXTAREA.selectionStart = TEXTAREA.selectionEnd = textCursorPosition + TEXTAREA.cols;
            break;
        case 'caps-lock':
            register == 0 ? register = 1 : register = 0;
            changeButtons(languages[language][register]);
            break;
    }
    TEXTAREA.focus();
};

KEYBOARD.querySelectorAll('.shift').forEach(btn => {
    btn.addEventListener('mousedown', () => {
        register == 0 ? register = 1 : register = 0;
        changeButtons(languages[language][register]);
    });

    btn.addEventListener('mouseup', () => {
        register == 1 ? register = 0 : register = 1;
        changeButtons(languages[language][register]);
    });
});

let printSymbolsClick = (button) => {
    TEXTAREA.focus();
    TEXTAREA.value += button.innerHTML;
};

KEYBOARD.addEventListener('click', event => {
    if (event.target != KEYBOARD) {
        event.target.classList.contains('button-event') ? eventButtons(event.target) : printSymbolsClick(event.target);
        if (event.target == document.getElementById('caps-lock')) {
            event.target.classList.toggle('button_active');
        }
    }
});

KEYBOARD.addEventListener('moseup', event => {
    event.target.classList.remove('button_active');
});

const highlightButton = () => {
    TEXTAREA.focus();
    KEYS.forEach((key, index) => {
        if (event.keyCode === key || event.code === key) {
            BUTTONS[index].classList.add('button_active');
        }
    });
};

const printSymbolsKeyboard = (keyboardLayout) => {
    KEYS.forEach((key, index) => {
        if (event.keyCode === key) {
            event.preventDefault();
            TEXTAREA.value += keyboardLayout[index];
        }
    });
    TEXTAREA.focus();
};

let pressedButtons = new Set();
document.addEventListener('keydown', event => {
    pressedButtons.add(event.code);
    if (pressedButtons.has('ControlLeft') && pressedButtons.has('AltLeft') || pressedButtons.has('ControlRight') && pressedButtons.has('AltRight')) {
        changeLanguage();
    }

    if (event.code == 'CapsLock' || event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        register == 0 ? register = 1 : register = 0;
        changeButtons(languages[language][register]);
    }

    if (pressedButtons.has('Tab')) {
        event.preventDefault();
        TEXTAREA.value += '        ';
        TEXTAREA.focus();
    }

    printSymbolsKeyboard(languages[language][register]);
    highlightButton();
});

document.addEventListener('keyup', event => {
    BUTTONS.forEach(button => {
        if (button.getAttribute('id') !== 'caps-lock' || register == 0) {
            button.classList.remove('button_active');
        }
    });

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        register == 1 ? register = 0 : register = 1;
        changeButtons(languages[language][register]);
    }
    pressedButtons.delete(event.code);
});

