const alunos = [
    {
      _id: 0,
      nome: "chico melato",
      notas: {
        backend_1: [1, 1, 2, 2],
        frontend_2: [2, 2, 2, 2],
        bancodados: [2, 2, 3, 3],
        ferramentas: [3, 3, 3, 3],
      },
    },
    {
      _id: 1,
      nome: "talita lima",
      notas: {
        backend_1: [4, 4, 4, 4],
        frontend_2: [4, 4, 5, 5],
        bancodados: [5, 5, 6, 6],
        ferramentas: [7, 7, 8, 9],
      },
    },
];

const AlunoService = new AlunoService()

alunos.forEach(aluno => {
    AlunoService.add(new AlunoModel(aluno))
});
//


const htmlHeader = document.createElement('tr')
htmlHeader.innerHTML = '<td>Nome</td>'

const htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    return `<td>${materia}</td>`
}).join('')

htmlHeader.innerHTML += htmlHeaderMaterias

document.querySelector('[data-table-alunos] thead').appendChild(htmlHeader)
// Inserir no tbody da tabela a lista de alunos e suas médias

function render() {
    document.querySelector(`[data-table-alunos] tbody`).innerHTML = ''
    alunos.forEach(aluno => {
        let htmlRow = document.createElement('tr')
        htmlRow.innerHTML = `<td>${aluno.nome}</td>`
        let htmlRowMaterias = Object.keys(aluno.media).map(materia => {
            return `<td>${aluno.media[materia]}</td>`
        }).join('')
        htmlRow.innerHTML += htmlRowMaterias
        document.querySelector(`[data-table-alunos] tbody`).appendChild(htmlRow)
    })
}
render();

// Inserir aluno
// Padrão do HTML, o form quando tem um botão ele automaticamente quando clicado gera o submit
document.querySelector('form').addEventListener('submit', function(event) {
    //Por padrão quando ocorre um submit, ele atualiza a página
    event.preventDefault()
    //Pegar o valor de um elemento em especifico, o que foi escrito como nome do aluno
    const nome = document.getElementById('first_name').value
    const newAluno = {
        _id: 0,
        nome,
        notas: {
            backend_1: [6, 6, 6, 6],
            frontend_2: [7, 7, 7, 7],
            bancodados: [6, 6, 6, 6],
            ferramentas: [7, 7, 7, 7],
        }
    }
    newAluno.media = {}
    for(let materia in newAluno.notas) {
        newAluno.media[materia] = average(...newAluno.notas[materia])
    }
    alunos.push(newAluno)
    render()
})


