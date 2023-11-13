'use script';

const listaSpesa = ['latte', 'uova', 'carne', 'riso', 'vino', 'acqua', 'patate', 'pomodori'];


let i = 0;
while (i < listaSpesa.length - 1) {



    i++;
    console.log(listaSpesa[i]);
    const ul = document.querySelector('ul');
    const prodotto = document.createElement('li');
    prodotto.innerHTML = listaSpesa[i];
    ul.append(prodotto);
}
