const materiaService = new materiaService()
let materias = materiaService.getAll()
if (materias.length === 0) {
    materiaService.add(new MateriaModel({ nome: 'Back-end 1'}))
    materiaService.add(new MateriaModel({ nome: 'Front-end 2'}))
    materiaService.add(new MateriaModel({ nome: 'Banco de Dados'}))
    materiaService.add(new MateriaModel({ nome: 'Ferramentas Web'}))
}

const alunoService = new AlunoService()

const alunoView = new AlunoView(
    document.querySelector('[data-table-alunos]'),
    materiaService.getAll()
);
const alunoController = new AlunoController(alunoService, alunoView);

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('first_name').value;
    alunoController.add({ nome });
})