//get com fetch
/* fetch('pessoas.json').then((response) => response.json())
  .then((data) => addValue(data)); */

//get com axios
axios('pessoas.json').then((response) => addValue(response.data));

const addValue = (data) => {
  const table = document.createElement('table');

  for (let pessoa of data) {
    const tr = document.createElement('tr');

    const nome = document.createElement('td');
    nome.innerHTML = pessoa.nome;
    tr.appendChild(nome);

    const idade = document.createElement('td');
    idade.innerHTML = pessoa.idade;
    tr.appendChild(idade);

    /* const empresa = document.createElement('td');
    empresa.innerHTML = pessoa.empresa;
    tr.appendChild(empresa);
 */
    table.appendChild(tr);
  }
  const divResult = document.querySelector('.resultado');
  divResult.appendChild(table);
} 