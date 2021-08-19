
// get pin
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
};

// generate pin
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    document.getElementById('generate-input').value = pin;
});

// typed number
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            typedInput.value = '';
        }
    }
    else {
        const previousTyped = typedInput.value;
        const newTyped = previousTyped + number;
        typedInput.value = newTyped;
    }
});

// submit button
function verifyPin() {
    const generatePin = document.getElementById('generate-input').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const wrongPin = document.getElementById('wrong-pin');
    const rightPin = document.getElementById('right-pin');
    if (generatePin == typedPin) {
        wrongPin.style.display = 'none';
        rightPin.style.display = 'block';
    }
    else {
        wrongPin.style.display = 'block';
        rightPin.style.display = 'none';
    }
}