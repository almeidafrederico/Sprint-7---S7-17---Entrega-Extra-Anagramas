const button = document.getElementById("findButton");

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

function getAnagramsOf(typedText){
    let anagramas   = document.querySelector("ul");
    let h1          = document.querySelector("h1");
    anagramas.innerText = "";
    let contaAnagramas = 0;
    for(let i in palavras){
        if(alphabetize(typedText)===alphabetize(palavras[i])){
            contaAnagramas++;
            let li = document.createElement("li");
            li.innerText =  palavras[i];
            anagramas.appendChild(li);
        }
    }
    if(!typedText){
        h1.innerText = "Anagramas";
    }else if(contaAnagramas===0){
        h1.innerText = "Nenhum Anagrama encontrado";
    }else{
        if(contaAnagramas>1){
            h1.innerText =`${contaAnagramas} Anagramas encontrados`;
        }else{
            h1.innerText =`${contaAnagramas} Anagrama encontrado`;
        }
    }
}


button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
});

