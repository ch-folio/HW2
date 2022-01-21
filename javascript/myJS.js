let word = [];


console.log(word);


document.addEventListener("DOMContentLoaded", function (event) {
   
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("swapWords").style.display = "none";
    document.getElementById("start").addEventListener("click", function() {
        swap()
    });
    

    for( let i=0; i<3; i++) {
        word[i]   = prompt("Please enter a word:");
    }
    
    let ulVar = document.getElementById('myUL');
    for (let i = 0; i < word.length; i++) {
        let liVar = document.createElement('li');
        liVar.innerHTML = word[i];
        ulVar.appendChild(liVar);
    };

    document.getElementById("start").style.visibility = "visible";

});

function swap() {

    let swapped = word.map(function(oneWord) {
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); });


    let ulVar2 = document.getElementById('myUL2');
    for (let i = 0; i < swapped.length; i++) {
        let liVar = document.createElement('li');
        liVar.innerHTML = swapped[i];
        ulVar2.appendChild(liVar);
    };

    document.getElementById("swapWords").style.display = "block";
    document.getElementById("GetWords").style.display = "none";
}