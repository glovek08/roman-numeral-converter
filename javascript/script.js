const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
let result = '';

const checkUserInput = () => {
    const inputInt = parseInt(userInput.value);
    if (!userInput.value || isNaN(inputInt)) {
        output.textContent = 'Please enter a valid number';
        clearInput();
        return;
    } else if (inputInt <= 0) {
        output.textContent = 'Please enter a number greater than or equal to 1';
        clearInput();
        return;
    } else if (inputInt >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999';
        clearInput();
        return;
    }
    output.textContent = convertToRoman(inputInt);
    result = '';
    clearInput();
}


const convertToRoman = int => {
    if (int !== 0) {
        if (int >= 1000) {
            result += 'M';
            convertToRoman(int - 1000);
        } else if (int >= 900 && int < 1000) {
            result += 'CM';
            convertToRoman(int - 900);
        } else if (int >= 500 && int < 900) {
            result += 'D';
            convertToRoman(int - 500);
        } else if (int >= 400 && int < 500) {
            result += 'CD';
            convertToRoman(int - 400);
        } else if (int >= 100 && int < 400) {
            result += 'C';
            convertToRoman(int - 100);
        } else if (int >= 90 && int < 100) {
            result += 'XC';
            convertToRoman(int - 90);
        } else if (int >= 50 && int < 90) {
            result += 'L';
            convertToRoman(int - 50);
        } else if (int >= 40 && int < 50) {
            result += 'XL';
            convertToRoman(int - 40);
        } else if (int >= 10 && int < 40) {
            result += 'X';
            convertToRoman(int - 10);
        } else if (int === 9) {
            result += 'IX';
            convertToRoman(int - 9);
        } else if (int >= 5 && int < 9) {
            result += 'V';
            convertToRoman(int - 5);
        } else if (int === 4) {
            result += 'IV';
            convertToRoman(int - 4);
        } else if (int > 0) {
            result += 'I';
            convertToRoman(int - 1);
        }
    }
    return result;
};

const clearInput = () => {
    userInput.value = '';
}

convertBtn.addEventListener('click', checkUserInput);
userInput.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
        checkUserInput();
    }
});
