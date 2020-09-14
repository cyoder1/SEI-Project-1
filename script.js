let guessWord;
let gate;
let compWord;
let submitBtn = document.querySelector('#submit-btn');
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letterContainer = document.querySelector('.guess');
let spaces;
let screenBlanks = document.querySelector('#blanks');
let holder = "";
let wrongGuess = 0;
let hangMan = document.querySelector('#pic');
let subClicks = 0;
let reset = document.querySelector('#reset-btn');

let missedGuess = [``,
`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0==========
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||       
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||        
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||     
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||  
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||    
\xa0\xa0____||________________
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||`, 

`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0==========
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0_=_      
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00        
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||     
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||  
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||    
\xa0\xa0____||________________
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||`,

`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0==========
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0_=_      
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00        
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|    
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||  
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||    
\xa0\xa0____||________________
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||`,

`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0==========
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0_=_      
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00        
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/\xa0|    
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||  
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||    
\xa0\xa0____||________________
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||`,

`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0==========
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0_=_      
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00        
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/\xa0|\xa0\\    
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||  
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||    
\xa0\xa0____||________________
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||`,    

`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0==========
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0_=_      
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00        
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/\xa0|\xa0\\    
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||    
\xa0\xa0____||________________
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||`, 

`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0==========
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0_=_      
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00        
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/\xa0|\xa0\\    
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/\xa0\\  
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||    
\xa0\xa0____||________________
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||`,

`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0==========
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0_=_      
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00        
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/\xa0|\xa0\\    
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/\xa0\\  
\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||    
\xa0\xa0____||_______\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0____
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||
\xa0\xa0||\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\\\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0||`]



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
    if (subClicks < 1) {
    guessWord = document.querySelector('#user-word').value;
    guessWord = guessWord.toUpperCase();
    gate = document.querySelector('#user-word').value;
    gate= guessWord.toUpperCase();
    spaces = guessWord.length;
    subClicks ++;
    for (let j = spaces; j>0 ; j--) {
        holder =holder + ('_ ')
    }
    document.querySelector('#blanks').innerText = holder;
    document.querySelector('#user-word').value = '';
    }
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
    } else if (gate.includes(letter) === false) {
        wrongGuess ++;
        document.querySelector('#pic').innerText = missedGuess[wrongGuess];
    }
}

reset.addEventListener('click', function(){
    document.querySelector('#pic').innerText = "";
    wrongGuess = 0;
    subClicks = 0;
    guessWord='';
    document.querySelector('#blanks').innerText = "";
    holder = '';
})

