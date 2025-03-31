class MaterialModel {
    constructor({ nome, _id}) {
        this.nome = nome
        this._id = _id !== undefined ? _id : this.generateId()
    }

    generateId() {
        MaterialModel.maxId += 1
        return MaterialModel.maxId
    }
}

MaterialModel.maxId = 0