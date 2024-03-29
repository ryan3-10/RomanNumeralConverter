const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertButton.addEventListener("click", () => {
    if (numberInput.value === "") {
        output.innerText = "Please enter a valid number";
        return
    }
    const inputValue = parseInt(numberInput.value);
    if (inputValue <= 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return
    } 
    if (inputValue >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return;
    }
    output.innerText = toRomanNumberal(inputValue);
});

const toRomanNumberal = (input) => {
    let output = "";
    const map = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    }

    for (const key in map) {
        while (input >= map[key]) {
            output += key;
            input -= map[key]
        }
    }
    return output
}
