// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
// nome
// ruolo
// foto
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede


// MILESTONE 0
// Create an array with six objects insiede
const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO", 
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor", 
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager", 
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager", 
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer", 
        img: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer", 
        img: "barbara-ramos-graphic-designer.jpg"
    },

]

// MILESTONE 1
//console.log the keys and values of each object with a for loop
for (let key in team) {
    console.log(key, team[key]);
}


//MILESTONE 2
// Take an element from the DOM
const containerEl = document.querySelector(".container");
//inner the keys and values of each object with for loop and templete literal
// for (i=0; i < team.length; i++ ) {
//     const thisMember = team[i]; 
//     const info = `${thisMember.name}, ${thisMember.role}, ${thisMember.img} <br> `

//     containerEl.innerHTML += info

// }

// BONUS 1
// add img element with for loop inner html and template literal

for (i=0; i < team.length; i++ ) {
    const thisMember = team[i]; 
    const info = `<img src="./assets/img/${thisMember.img}" alt=""> ${thisMember.name}, ${thisMember.role} <br> `

    containerEl.innerHTML += info

}
//BONUS 2
// add complete HTML with for loop, inner HTML and template literl 