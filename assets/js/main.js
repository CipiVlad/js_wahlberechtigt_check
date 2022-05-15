// if---condition ------

function check() {
    const alter = document.getElementById("alter").value;
    console.log(alter);
    const ja = document.getElementById("ja").value;
    const nein = document.getElementById("nein").value;
    const antwort = document.getElementById("antwort");


    if (alter >= 18 && ja == 1) {
        console.log(`Du bist deutscher Staatsbürger!`);
        antwort.innerHTML = `Du bist wahlberechtigt. Du bist 18 oder älter und du bist deutscher Staatsbürger`;
        document.getElementById('nein').disabled = true;
    }

    else if (ja == 1 && nein == 0 && alter == 0) {
        antwort.innerHTML = `Überleg doch, das geht nicht! Gib dein Alter ein`;
    }
    // else if (ja == 1 && nein == 0 && alter.disabled) {
    //     antwort.innerHTML = `Überleg doch, das geht nicht! Ich brauche eine Altersangabe und du kannst nicht zugleich deutscher Staatsbürger sein und nicht sein.`;
    // }
    else if (alter == 18 && nein == 0) {
        antwort.innerHTML = `Du bist genau 18 jedoch bist du kein deutscher Staatsbürger, weshalb du nicht wahlberechtigt bist`;
        document.getElementById('ja').disabled = true;

    }

    else if (alter <= 18 && ja == 1) {
        console.log(`Du bist zu jung und stammst aus dem Ausland`);
        antwort.innerHTML = `Leider darfst du nicht wählen! Obwohl du  deutscher Staatsbürger bist, bist du keine 18 oder älter `;
    }

    else if (alter <= 18 && nein == 0) {
        console.log(`Du bist zu jung und stammst aus dem Ausland`);
        antwort.innerHTML = `Leider darfst du nicht wählen! Du bist keine 18 oder älter und du bist kein deutscher Staatsbürger`;
    }


    else if (alter >= 18 && nein == 0) {
        antwort.innerHTML = `Du bist zwar 18 oder älter, aber du bist kein deutscher Staatsbürger, weshalb du nicht wahlberechtigt bist`;
        document.getElementById('nein').disabled = true;

    }

    else {
        antwort.innerHTML = `Um wahlberechtigt zu sein, musst du mindestens 18 Jahre alt sein UND zugleich ein deutscher Staatsbürger sein`;
    }
};