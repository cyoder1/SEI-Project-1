let guessWord;
let submitBtn = document.querySelector('#submit-btn');
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letterContainer = document.querySelector('.guess');
let spaces;
let screenBlanks = document.querySelector('#blanks');
let holder = "";

for (let i = 0; i <= 25 ; i++) {
    let letter = alphabet[i];
    let newButton = document.createElement('button');
    let btnVal = document.createTextNode(letter)
    newButton.appendChild(btnVal);
    newButton.addEventListener('click', function() {changeBlank(alphabet[i])});
    newButton.setAttribute("class", "let");
    letterContainer.appendChild(newButton);
}

submitBtn.addEventListener('click', function() {
    guessWord = document.querySelector('#user-word').value;
    guessWord = guessWord.toUpperCase();
    console.log(guessWord.length);
    spaces = guessWord.length;
    // let holder = "";
    for (let j = spaces; j>0 ; j--) {
        holder =holder + ('_ ')
    }
    document.querySelector('#blanks').innerText = holder;
    document.querySelector('#user-word').value = '';
    console.log(guessWord);
})



function changeBlank(letter) {
    console.log(guessWord);
    console.log(letter);
    if (guessWord.includes(letter) === true) {
        let place = (guessWord.indexOf(letter))*2;
        let before = holder.slice(0, (place-1));
        let after = holder.slice((place), ((guessWord.length*2)-2));
        console.log(before);
        console.log(after);
        holder = (before + " " +letter + " " + after);
        document.querySelector('#blanks').innerText = holder;
        
    }
}


//     _______
//     |     |
//     |     0
//     |    /|\
//     |    / \
//     |    
// ____|________________
// ||                 ||