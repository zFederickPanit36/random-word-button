let words = [];

const shuffle = (array) => {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}

header = document.getElementById("header");
button = document.getElementById("button");
textBox = document.getElementById("word-input");

let wordLength = words.length;
let counter = 0;;
let isStarted = false;

document.getElementById("click-submit").onclick = (e) => {
    let input = textBox.value;

    e.preventDefault();

    if (textBox.value != "") {
        textBox.value = "";
    }

    words.push(input);
    wordLength = words.length;
    console.log("aggiunto nell'array", input);
};

button.onclick = () => {

    if (wordLength === 0) {
        if (header.innerHTML == "Enter some words!") {
            header.innerHTML = "Click to show words";
        } else {
            header.innerHTML = "Enter some words!";
        }
        console.log("inserisci almeno una parola");
    } else {

        console.log("------------");

        if (!isStarted) {
            words = shuffle(words);
            counter = wordLength;
            isStarted = true;
            console.log("le parole sono state mischiate");
        }

        if (counter === 0) {
            words = shuffle(words);
            counter = wordLength - 1;
            console.log("le parole sono state mischiate");
            console.log("ciclo finito");
        } else {
            counter--;
        }

        header.innerHTML = words[counter];
        console.log("parola printata", words[counter]);

    }

    console.log(counter);
}