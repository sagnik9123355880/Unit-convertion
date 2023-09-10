function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}

function weight(){
    //To convert KGs to metric ton
    // KG / 1000
    var kg = document.getElementById("kilo").value;
    var p = kg / 1000
    document.getElementById("Metricton").value = p
}

function Height() {
    // Get the value in feet from the input field with id "Foot"
    var feet = parseFloat(document.getElementById("Foot").value);

    // Convert feet to inches (1 foot = 30.48 cm)
    var CM = feet * 30.48;

    // Set the result in the input field with id "Inch"
    document.getElementById("CM").value = CM;
}