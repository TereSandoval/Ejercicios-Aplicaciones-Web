let array = [1, 2, 3, 4, 5];

function updateDisplay() {
    document.getElementById('array-display').textContent = JSON.stringify(array);
}

function displayResult(result) {
    document.getElementById('result').textContent = result;
}

function pop() {
    array.pop();
    updateDisplay();
    displayResult(`Pop: ${array}`);
}

function shift() {
    array.shift();
    updateDisplay();
    displayResult(`Shift: ${array}`);
}

function push() {
    array.push(6);
    updateDisplay();
    displayResult(`Push: ${array}`);
}

function unshift() {
    array.unshift(0);
    updateDisplay();
    displayResult(`Unshift: ${array}`);
}

function splice() {
    array.splice(2, 1, 'a', 'b');
    updateDisplay();
    displayResult(`Splice: ${array}`);
}

function deleteElement() {
    delete array[2];
    updateDisplay();
    displayResult(`Delete: ${array}`);
}

function reverse() {
    array.reverse();
    updateDisplay();
    displayResult(`Reverse: ${array}`);
}

function sortArray() {
    array.sort((a, b) => a - b);
    updateDisplay();
    displayResult(`Sort: ${array}`);
}

function concat() {
    let newArray = array.concat([6, 7, 8]);
    updateDisplay();
    displayResult(`Concat: ${newArray}`);
}

function join() {
    let joinedString = array.join(', ');
    displayResult(`Join: ${joinedString}`);
}

function getLength() {
    displayResult(`Length: ${array.length}`);
}

updateDisplay();
