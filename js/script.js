function calculate() {
    // Get the input value
    var sideLength = document.getElementById('sideLength').value;

    // Validate input
    if (sideLength <= 0 || isNaN(sideLength)) {
        alert('Please enter a valid positive number for the side length.');
        return;
    }

    // luas dan keliling
    var luas = sideLength * sideLength;
    var keliling = 4 * sideLength;

    // Display the result
    document.getElementById('result-area').innerText = 'Luas: ' + luas + ', Keliling: ' + keliling;
}
