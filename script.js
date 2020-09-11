let guessWord;
let compWord;
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
    spaces = guessWord.length;
    // let holder = "";
    for (let j = spaces; j>0 ; j--) {
        holder =holder + ('_ ')
    }
    document.querySelector('#blanks').innerText = holder;
    document.querySelector('#user-word').value = '';
})



function changeBlank(letter) {
    let use = letter;
    if (guessWord.includes(letter) === true) {
        let blankPlace = (guessWord.indexOf(letter))*2;
        let letterPlace = guessWord.indexOf(letter);
        let before = holder.slice(0, (blankPlace));
        let after = holder.slice((blankPlace+1), ((guessWord.length*2)));
        console.log(blankPlace);
        console.log(before);
        console.log(after);
        holder = (before +  letter  + after);
        document.querySelector('#blanks').innerText = holder;
        guessWord = ((guessWord.slice(0, (letterPlace))) + "*" + (guessWord.slice((letterPlace+1), (guessWord.length))));
        console.log(guessWord);
        changeBlank(use);
        return
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