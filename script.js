let display = document.getElementById('display');

function appendCharacter(char) {
    if (display.value === '0' && char !== '.') {
        display.value = char;
    } else {
        display.value += char;
    }
}

function clearDisplay() {
    display.value = '0';
}

function deleteLastChar() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            clearDisplay();
        }, 1500);
    }
}