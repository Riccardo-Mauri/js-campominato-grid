//chiedo all'utente di inseririmi un numero di celle che andranno a crearsi
const cells =parseInt(prompt('Inserisci un numero'));
console.log('cells', cells, typeof cells);

//creo un ciclo che prenda il numero inserito dall'utente e crea le celle
for (let i = 0; i < cells; i++){
    const Element = document.createElement('div');
    Element.classList.add('cell');
    Element.innerHTML = i + 1;
    document.querySelector('.grid-container').append(Element);
}
