// 1. Skriver ut tallene fra 0 til 50
let num = 0;
while (num <= 50) {
    console.log(num);
    num++;
}

// 2. Skriver ut alle partallene mellom 1 og 100
num = 2;
while (num <= 100) {
    console.log(num);
    num += 2;
}

// 3. Skriver ut alle tallene i 3-ganger'n opp til 999
num = 0;
while (num <= 999) {
    console.log(num);
    num += 3;
}

// 4. Skriver ut tall fra 1 til 1000 som er delbare med 3 og 5
num = 15;
while (num <= 1000) {
    console.log(num);
    num += 15;
}

// 5. Summerer alle tallene fra 1 til 100 og skriver bare ut summen
num = 1;
let totalSum = 0;
while (num <= 100) {
    totalSum += num;
    num++;
}
console.log(totalSum);

// 6. Skriver ut følgende mønster til konsollen:
// #
// ##
// ###
// ####
let text = "";
num = 1;
while (num <= 4) {
    text += "#";
    console.log(text);
    num++;
}

// 7. Modifisert versjon av forrige oppgave med 50 emneknagger på den siste linjen
text = "";
num = 1;
while (num <= 50) {
    text += "#";
    console.log(text);
    num++;
}
