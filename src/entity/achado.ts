import Usuario from "./usuario";

interface IParameters {
    id?: number;
    foundBy?: Usuario;
    data?: Date;
    foto?: string;
    observacoes?: string;
    resolvido?: boolean;
    titulo?: string;
}

class Achado {
    public id?: number;
    public foundBy?: Usuario;
    public data?: Date;
    public foto?: string;
    public observacoes?: string;
    public resolvido?: boolean;
    public titulo?: string;

    constructor({
        id,
        foundBy,
        data,
        foto,
        observacoes,
        resolvido,
        titulo,
    }: IParameters) {
        this.id = id;
        this.foundBy = foundBy;
        this.data = data;
        this.foto = foto;
        this.observacoes = observacoes;
        this.resolvido = resolvido;
        this.titulo = titulo;
    }
}

export default Achado;
