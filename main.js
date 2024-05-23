document.getElementById('changeColorButton').addEventListener('click', colorChange);

function colorChange() {
    var selectedColor = document.getElementById("selectColor").value;
    document.body.style.backgroundColor = selectedColor;

    var header = document.getElementById("mainHeader");
    if (selectedColor === 'white') {
        header.style.color = 'black';
    } else {
        header.style.color = 'white';
    }
}