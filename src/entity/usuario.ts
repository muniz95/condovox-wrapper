interface IParameters {
    id?: number;
    nome?: string;
    bloco?: number;
    apartamento?: number;
}

class Usuario {
    public id?: number;
    public nome?: string;
    public bloco?: number;
    public apartamento?: number;

    constructor({
        id,
        nome,
        bloco,
        apartamento,
    }: IParameters) {
        this.id = id;
        this.nome = nome;
        this.bloco = bloco;
        this.apartamento = apartamento;
    }
}

export default Usuario;
