class AlunoView{
    constructor(table, materias) {
        this.tableList = table
        this.tableHeader = this.tableList.querySelector('thead')
        this.tableBody = this.tableList.querySelector('tbody')
        this.materias = materias

        this.renderHeader()
    } 
    
    renderHeader() {
        const htmlHeader = document.createElement('tr')
        htmlHeader.innerHTML = '<td>Nome</td>'

        const htmlHeaderMaterias = this.materias.map(materia => {
            return `<td>${materia.nome}</td>`
        }).join('')

        htmlHeader.innerHTML += htmlHeaderMaterias
        this.tableHeader.appendChild(htmlHeader)
    }

    render(aluno) {
        this.tableBody.innerHTML = ''
        aluno.forEach(aluno => {
            let htmlRow = document.createElement('tr')
            htmlRow.innerHTML = `<td>${aluno.nome}</td>`
            let encontrado = false
            this.materias.forEach(materia => {
                if(materia._id in aluno.notas) {
                    encontrado = true
                }
            })

            if (encontrado) {
                this.materias.forEach(materia => {
                    const td = document.createElement('td')
                    td.innerHTML = (
                            aluno.media[materia._id] !== undefined && !Number.isNaN(aluno.media[materia._id])
                        ) ?
                        aluno.media[materia._id] :
                        `<a href="edit.html?id=${aluno._id}">Incluir Nota</a>`
                    htmlRow.appendChild(td)
                })
            } else {
                const td = document.createElement('td')
                td.colSpan = this.materias.length
                td.innerHTML += `<a href="edit.html?id=${aluno._id}">Incluir Nota</a>`
                htmlRow.appendChild(td)
            }

            this.tableBody.appendChild(htmlRow)
        })
    }
}