class AlunoView {
    constructor(table) {
        this.tableList = table
        this.tableHeader = this.tableList.querySelector('thead')
        this.tableBody = this.tableList.querySelector('tbody')
        this.materias = ["backend_1", "frontend_2", "bancodados", "ferramentas"]

        this.renderHeader()
    }

    renderHeader() {
        const htmlHeader = document.createElement('tr')
        htmlHeader.innerHTML = '<td>Nome</td>'
        
        const htmlHeaderMaterias = this.materias.map(materia => {
            return `<td>${materia}</td>`
        }).join('')
        
        htmlHeader.innerHTML += htmlHeaderMaterias
        this.tableHeader.appendChild(htmlHeader)
    }

    render(alunos) {
        this.tableBody.innerHTML = ''
        alunos.forEach(aluno => {
            let htmlRow = document.createElement('tr')
            htmlRow.innerHTML = `<td>${aluno.nome}</td>`
            let encontrado = false
            this.materias.forEach(materia => {
                if(materia in aluno.notas) {
                    encontrado = true
                }
            })

            if(encontrado) {
                this.materias.forEach(materia => {
                    htmlRow.innerHTML += `<td>
                    ${aluno.media[materia] !== undefined ? aluno.media[materia] :
                        `<a href="edit.html?id=${aluno._id}">Incluir Nota</a>`}
                        </td>`
                })
            } else {
                htmlRow.innerHTML += ` <td colspan="${this.materias.length}">
                <a href="edit.html?id=${aluno._id}">
                    Incluir Nota
                </a>
                </td>`
            }
            this.tableBody.appendChild(htmlRow)
        })
    }
}