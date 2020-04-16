const generateElement = (name, props) => {
    const el = document.createElement(name);
    if (typeof props == 'object') {
        for (var i in props) {
            el.setAttribute(i, props[i]);
        }
    }
    return el;

};

const container = generateElement('div', { class: 'container' });
document.body.append(container);

const textareaBlock = generateElement('textarea', { class: 'textarea', id: 'area', autofocus: 'false', cols: 142, rows: 20 });
container.prepend(textareaBlock);

const keyboard = generateElement('div', { class: 'keyboard' });
container.append(keyboard);

const description = generateElement('div', { class: 'description', innerHTML: '<p>Клавиатура создана в операционной системе Windows.</p><p>Переключения языка с помощью комбинации клавиш вируальной клавиатуры "Ctrl" + "Alt".</p>' });
container.append(description);


const KEYS = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 'Backspace', 'Tab', 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 'Delete', 'CapsLock', 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 'Enter', 'ShiftLeft', 220, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 'ArrowUp', 'ShiftRight', 'ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const languages = {
    english: {
        lowerCase: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
        upperCase: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspase', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']
    },
    russian: {
        lowerCase: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
        upperCase: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspase', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']
    }
};

const createButtons = (keyboardLayout) => {
    keyboardLayout.forEach(char => {
        let button = generateElement('button', { class: 'button' });
        button.innerHTML = `${char}`;
        keyboard.appendChild(button);
    });
};

let language = 'russian';
let register = 'lowerCase';

createButtons(languages[language][register]);


window.onload = function () {
    if (localStorage.getItem('lang')) {
        language = localStorage.getItem('lang');
    }
    changeButtons(languages[language][register]);
};

const buttons = document.querySelectorAll('button');


const setSpecialButtons = () => {
    let count = 1;
    buttons.forEach(button => {
        switch (button.innerHTML) {
            case 'Enter':
                button.id = 'enter';
                button.classList.add('button_double-long');
                break;
            case 'Del':
                button.id = 'del';
                break;
            case 'Backspase':
                button.id = 'backspase';
                button.classList.add('button_double-long');
                break;
            case ' ':
                button.id = 'gap';
                break;
            case 'Tab':
                button.id = 'tab';
                break;
            case 'Caps Lock':
                button.id = 'caps-lock';
                button.classList.add('button_double-long');
                break;
            case 'Shift':
                button.id = `shift-${count}`;
                if (count == 1) {
                    button.classList.add('button_double-long', 'shift');
                }
                count++;
                break;
            case 'Win':
                button.id = 'win';
                break;
            case 'Ctrl':
                button.id = 'ctrl';
                break;
            case 'Alt':
                button.id = 'alt';
                break;
            case '←':
                button.id = 'arrow-left';
                break;
            case '→':
                button.id = 'arrow-right';
                break;
            case '↑':
                button.id = 'arrow-up';
                break;
            case '↓':
                button.id = 'arrow-down';
                break;
            default:
                button.classList.add('symbol-button');
        }
        if (button.id) button.classList.add('button-event');
    });

};

setSpecialButtons();

const changeButtons = (keyboardLayout) => {
    buttons.forEach((button, el) => {
        button.innerHTML = keyboardLayout[el];
    });
};

const changeLanguage = () => {
    if (language === 'russian') {
        language = "english";
    } else {
        language = 'russian';
    }
    localStorage.setItem('lang', language);
    changeButtons(languages[language][register]);
};

const eventButtons = (button) => {
    const textValue = textareaBlock.value;
    let textCursorPosition;
    switch (button.id) {
        case 'enter':
            textareaBlock.value += '\n';
            break;
        case 'backspase':
            textCursorPosition = textareaBlock.selectionStart;
            if (textareaBlock.selectionStart === textareaBlock.selectionEnd) {
                textareaBlock.value = textValue.slice(0, textareaBlock.selectionStart - 1) + textValue.slice(textareaBlock.selectionStart, textValue.length);
                textareaBlock.selectionStart = textareaBlock.selectionEnd = textCursorPosition - 1;
            }
            else {
                textareaBlock.value = textValue.slice(0, textareaBlock.selectionStart) + textValue.slice(textareaBlock.selectionEnd, textValue.length);
                textareaBlock.selectionStart = textareaBlock.selectionEnd = textCursorPosition;
            }

            break;
        case 'del':
            textCursorPosition = textareaBlock.selectionStart;
            if (textareaBlock.selectionStart === textareaBlock.selectionEnd) {
                textareaBlock.value = textValue.slice(0, textareaBlock.selectionStart) + textValue.slice(textareaBlock.selectionStart + 1, textValue.length);
            }
            else {
                textareaBlock.value = textValue.slice(0, textareaBlock.selectionStart) + textValue.slice(textareaBlock.selectionEnd, textValue.length);
            }
            textareaBlock.selectionStart = textareaBlock.selectionEnd = textCursorPosition;
            break;
        case 'gap':
            textareaBlock.value += ' ';
            break;
        case 'tab':
            textareaBlock.value += '         ';
            break;
        case 'win':
            break;
        case 'ctrl':
            break;
        case 'alt':
            break;
        case 'arrow-left':
            textCursorPosition = textareaBlock.selectionStart;
            textareaBlock.selectionStart = textareaBlock.selectionEnd = textCursorPosition - 1;
            break;
        case 'arrow-right':
            textCursorPosition = textareaBlock.selectionStart;
            if (textCursorPosition == textareaBlock.value.length) {
                textareaBlock.selectionStart = textareaBlock.selectionEnd = 0;
            } else {
                textareaBlock.selectionStart = textareaBlock.selectionEnd = textCursorPosition + 1;
            }
            break;
        case 'arrow-up':
            textCursorPosition = textareaBlock.selectionStart;
            textareaBlock.selectionStart = textareaBlock.selectionEnd = textCursorPosition - textareaBlock.cols;
            break;
        case 'arrow-down':
            textCursorPosition = textareaBlock.selectionStart;
            textareaBlock.selectionStart = textareaBlock.selectionEnd = textCursorPosition + textareaBlock.cols;
            break;
        case 'caps-lock':
            register == 'lowerCase' ? register = 'upperCase' : register = 'lowerCase';
            changeButtons(languages[language][register]);
            break;
        default:
            console.log('бывает всякое )');
    }
    textareaBlock.focus();
};

keyboard.querySelectorAll('.shift').forEach(btn => {
    btn.addEventListener('mousedown', () => {
        register == 'lowerCase' ? register = 'upperCase' : register = 'lowerCase';
        changeButtons(languages[language][register]);
    });

    btn.addEventListener('mouseup', () => {
        register == 'upperCase' ? register = 'lowerCase' : register = 'upperCase';
        changeButtons(languages[language][register]);
    });
});

let clickHandler = (button) => {
    textareaBlock.focus();
    textareaBlock.value += button.innerHTML;
};

keyboard.addEventListener('click', event => {
    if (event.target != keyboard) {
        event.target.classList.contains('button-event') ? eventButtons(event.target) : clickHandler(event.target);
        if (event.target == document.getElementById('caps-lock')) {
            event.target.classList.toggle('button_active');
        }
    }
});

keyboard.addEventListener('moseup', event => {
    event.target.classList.remove('button_active');
});

const highlightButton = () => {
    textareaBlock.focus();
    KEYS.forEach((key, index) => {
        if (event.keyCode === key || event.code === key) {
            buttons[index].classList.add('button_active');
        }
    });
};

const keyboardClickHandler = (keyboardLayout) => {
    KEYS.forEach((key, index) => {
        if (event.keyCode === key) {
            event.preventDefault();
            textareaBlock.value += keyboardLayout[index];
        }
    });
    textareaBlock.focus();
};

let pressedButtons = new Set();
document.addEventListener('keydown', event => {
    pressedButtons.add(event.code);
    if (pressedButtons.has('ControlLeft') && pressedButtons.has('AltLeft') || pressedButtons.has('ControlRight') && pressedButtons.has('AltRight')) {
        changeLanguage();
    }

    if (event.code == 'CapsLock' || event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        register == 'lowerCase' ? register = 'upperCase' : register = 'lowerCase';
        changeButtons(languages[language][register]);
    }

    if (pressedButtons.has('Tab')) {
        event.preventDefault();
        textareaBlock.value += '        ';
        textareaBlock.focus();
    }

    keyboardClickHandler(languages[language][register]);
    highlightButton();
});

document.addEventListener('keyup', event => {
    buttons.forEach(button => {
        if (button.getAttribute('id') !== 'caps-lock' || register == 'lowerCase') {
            button.classList.remove('button_active');
        }
    });

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        register == 'upperCase' ? register = 'lowerCase' : register = 'upperCase';
        changeButtons(languages[language][register]);
    }
    pressedButtons.delete(event.code);
});
