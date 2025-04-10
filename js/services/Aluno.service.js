class AlunoService {
    constructor() {
        this.alunos = []
        this.updateListAlunosFromLocalStorage()
    }

    add(aluno) {
        if(!aluno instanceof AlunoModel) {
            throw new Error('O aluno deve ser uma instância de AlunoModel')
        }
        this.alunos.push(aluno)
        this.updateLocalStorage()
    }

    update(aluno) {
        if (!aluno instanceof AlunoModel) {
            throw new Error('O aluno deve ser uma instância de AlunoModel')
        }
        let index = this.alunos.findIndex(a => a._id === aluno._id)
        if (index !== -1) {
            this.alunos[index] = aluno
            this.updateLocalStorage()
        }
    }

    searchById(id) {
        return this.alunos.find(aluno => aluno._id === id)
    }

    updateLocalStorage() {
        let alunos = JSON.stringify(this.alunos)
        localStorage.setItem('alunos', alunos)
    }

    updateListAlunosFromLocalStorage() {
        let local = localStorage.getItem('alunos')
        let alunos = []
        if (local) {
            alunos = JSON.parse(local)
        }
        alunos.forEach(aluno => {
            this.add(new AlunoModel(aluno))
        });
    }
    //guardar set
    //ler get
        
}
