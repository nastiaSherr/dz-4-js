const age = prompt(60);
if (age > -55 && age <= 99) {
    console.log("Число потрапляє");
} else {
    console.log("Число не потрапляє");
}

const manAge = 55;

if (manAge > -0 && manAge <= 16) {
    console.log("дитина");
} else if (manAge > -17 && manAge <= 60) {
    console.log("дорослий"); 
} else if (manAge > -61 && manAge <= 100) {
    console.log("пенсіонер");
} else {
    console.log("не знайдено");
}

const myName = "nastia";
const myLastName = "sheremeta";


if (myName.length > -4 && myLastName.length >= 5) {
    console.log("УПС");
} else {
    console.log("cool");
}

let word;

const lang = "ua";

switch (lang) {
    case "ua":
        word = "Жовтень";
        break;
    case "en":
        word = "Oktober";
        break;
    default:
        console.log("no");
}

console.log(word);
    
