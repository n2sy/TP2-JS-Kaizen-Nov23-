const inputIntitule = document.getElementById('intitule');
const inputMontant = document.getElementById('montant');
const btnAjouter = document.getElementById('btn-add');
const btnEffacer = document.getElementById('btn-erase');
const listeDepenses = document.getElementById('liste-dep');
const totalDepenses = document.getElementById('total-dep');
const inputFiltre = document.getElementById('filtre');

let sommeTotal = 0;

btnAjouter.addEventListener('click', () => {
    console.log(typeof inputMontant.value);

    if(inputIntitule.value.trim() == '' || inputMontant.value.trim().length == 0) {
        alert('Veuillez saisir les deux champs...')
    }
    else {
        const newLi = document.createElement('li');
       // newLi.appendChild(document.createTextNode(`${inputIntitule.value} : ${inputMontant.value} €`))
        newLi.textContent = `${inputIntitule.value} : ${inputMontant.value} €`;
        newLi.classList.add('list-group-item');
        listeDepenses.appendChild(newLi);
        //sommeTotal = sommeTotal + inputMontant.value;
        // sommeTotal += Number(inputMontant.value); V1
        // sommeTotal += parseInt(inputMontant.value); V2 
        sommeTotal += +inputMontant.value; // V3
        totalDepenses.textContent = `${sommeTotal} €`;
        erase();
    }
})

inputFiltre.addEventListener('keyup', () => {
  
   // console.log(inputFiltre.value);
    for (let element of listeDepenses.children) {
        console.log(element.textContent);
        //const depenseCible = element.textContent.match(/\d+/); // Avec les RegEx
        depenseCible = element.textContent.split(' ');
        console.log(inputFiltre.value, depenseCible[2]);
        if(Number(inputFiltre.value) < Number(depenseCible[2]))
            element.classList.add('list-group-item-danger');
        else
            element.classList.remove('list-group-item-danger');
        
    }
})

function erase() {
    inputMontant.value = '';
    inputIntitule.value = '';
}
btnEffacer.addEventListener('click', erase)