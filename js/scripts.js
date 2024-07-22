//chiedo all'utente di inseririmi un numero di celle che andranno a crearsi
const cells =parseInt(prompt('Inserisci un numero'));
console.log('cells', cells, typeof cells);

//creo un ciclo che prenda il numero inserito dall'utente e crea le celle
for (let i = 0; i < cells; i++){
    const Element = document.createElement('div');
    Element.classList.add('cell');
    Element.innerHTML = i + 1;
    //Quando l'utente clicca su ogni cella, la cella cliccata si colora di LIGHTCORAL ed emetto un messaggio in console con il numero della cella cliccata.

    Element.addEventListener('click', function(){
        Element.classList.toggle('cell-hover');

    //stampo il contenuto delle celle in console una volta cliccata
        console.log(Element.textContent);
    });
    //aggiungo gli elementi cioè le celle all HTML
    document.querySelector('.grid-container').append(Element);
}
