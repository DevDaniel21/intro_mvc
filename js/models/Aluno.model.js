class AlunoModel {
    //Vai dar os valores nome, _id, começa vazio notas; Mas se não der nota ele vai deixar vazio
    constructor({ nome, _id, notas } = { notas:{} } ) {
        this.nome = nome;
        this._id = _id !== undefined ? _id : this.generateId();
        this.notas = { ...notas }
        this.media = {}
    }

    generateId() {
        AlunoModel.maxId += 1
        return AlunoModel.maxId
    }
}

AlunoModel.maxId = 0