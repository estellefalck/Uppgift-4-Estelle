function charRemove(char, text) {

    if (typeof char != 'string' || typeof text != 'string') {
        console.log("wrong datatype");
        return;
    }


    if (char.length != 1) {
        console.log("wrong datatype");
        return;
    }

    
    let resultat = text.split(char).join('');
    return resultat;
}
