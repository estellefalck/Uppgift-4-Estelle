let cat = {
    name: "Gustav",  
    alive: true     
};

function checkCatStatus() {
    let isAlive = Math.random() < 0.5;  

    cat.alive = isAlive;

    if (cat.alive) {
        alert("Katten heter " + cat.name + " och han lever!");
    } else {
        alert("Katten hette " + cat.name + " och han är död...");
    }
}
