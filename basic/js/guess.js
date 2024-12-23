let guess = 0;
function checkGuess(){
    guess = guess + 1;
    const randomNumer = Math.floor(Math.random() * 10 + 1);
    const val = document.getElementById('guess').value;

    if(randomNumer == val){
        document.getElementById('result').innerText = 'you won' + guess;
    } else if(val <= randomNumer){
        document.getElementById('result').innerText = 'guess is low';
    } else if(val >= randomNumer){
        document.getElementById('result').innerText = 'guess is high';
    }

    console.log(val, randomNumer, guess)

}
