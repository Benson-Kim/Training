
function themeSwitcher(value) {
    let sheets = document.getElementsByTagName('link');
    sheets[0].href = value;
}

const result = document.getElementById('result')

let calculate = (number) => {
    result.value += number;
}

let answer = () => {
    try {
        result.value = eval(result.value)
    } catch (error) {
        alert("Enter valid input")
    }
}

function reset() {
    result.value = "";
}

let del = () => {
    result.value = result.value.slice(0, -1);
}