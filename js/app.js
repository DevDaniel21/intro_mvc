const alunoService = new AlunoService()

const alunoView = new AlunoView(document.querySelector('[data-table-alunos]'));
const alunoController = new AlunoController(alunoService, alunoView);

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('first_name').value;
    alunoController.add({ nome });
})