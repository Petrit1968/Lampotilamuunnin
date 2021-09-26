function haeNumero(tunnus) {
    return parseInt(document.getElementById(tunnus).value)
}

function tulosCelsius(tulos) {
    fahrenheit = tulos * 1.8 + 32;
    document.getElementById("tulos").innerHTML = (tulos + " °C-astetta on " + fahrenheit + " °F-astetta");
    document.body.style = 'background-color: #bbb';

}

function tulosFahrenheit(tulos) {
    celsius = (tulos - 32) / 1.8;
    document.getElementById("tulos").innerHTML = (tulos + " °F-astetta on " + celsius + " °C-astetta")
    document.body.style = 'background-color: #Fccc';
}

function cfmuunnin() {
    tulosCelsius(haeNumero("asteet"))
}

function fcmuunnin() {
    tulosFahrenheit(haeNumero("asteet"))
}