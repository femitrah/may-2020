function validation() {
    let display = document.getElementById('text').value;
    var regex = /^[A-Za-z0-9 ]+$/
    display = display.replace(/\s+/g, ' ').trim();
    let rex_val = regex.test(display);//false 
    let array = display.split(" ");

    if (display == "") {
        console.log(display);
        document.getElementById("errordisplay").innerHTML = "Please enter a sentence"

    }
    else if (!rex_val) {

        document.getElementById("errordisplay").innerHTML = "Special Character(s) not allowed"
        document.getElementById("display").innerHTML = ``;
        document.getElementById("max").innerHTML = "";
        document.getElementById("min").innerHTML = "";

    }

    else if (array.length == 1) {

        document.getElementById("errordisplay").innerHTML = 'Please enter a sentence which has more than one word'
    }
    else if (array) {
        console.log(array)
        let min = array[0];
        let max = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i].length > max.length) {
                max = array[i];
            }
            else if (array[i].length < min.length) {
                min = array[i];
            }
        }
        if (array.length <= 2 && max.length !== min.length) {     
            output(display ,min ,max)
        }
        else if (max.length === min.length) {
            document.getElementById("errordisplay").innerHTML = 'length are equal '
        }
        else {
            output(display ,min ,max)
        }

    }
}

const output=(display ,min ,max )=>{
    document.getElementById("errordisplay").innerHTML = ' '
            document.getElementById("display").innerHTML = ` <h2>${display}</h2> `;
            document.getElementById("max").innerHTML = "max value " + max;
            document.getElementById("min").innerHTML = "min value " + min;
}

function cleared() {
    document.getElementById("text").value = "";
    document.getElementById("max").innerHTML = "";
    document.getElementById("min").innerHTML = "";
    document.getElementById("errordisplay").innerHTML = ""
    document.getElementById("display").innerHTML = "";
    document.getElementById("equal").innerHTML = ' '
}

