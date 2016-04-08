$.get('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8', function (json) {
    console.log('Random Number: ' + json.data);
    $("p").text('Random Number: ' + json.data);
});