import Usuario from "./usuario";

interface IParameters {
    id?: number;
    achadoPor?: Usuario;
    data?: Date;
    foto?: string;
    observacoes?: string;
    resolvido?: boolean;
    titulo?: string;
}

class Achado {
    public id?: number;
    public achadoPor?: Usuario;
    public data?: Date;
    public foto?: string;
    public observacoes?: string;
    public resolvido?: boolean;
    public titulo?: string;

    constructor({
        id,
        achadoPor,
        data,
        foto,
        observacoes,
        resolvido,
        titulo,
    }: IParameters) {
        this.id = id;
        this.achadoPor = achadoPor;
        this.data = data;
        this.foto = foto;
        this.observacoes = observacoes;
        this.resolvido = resolvido;
        this.titulo = titulo;
    }
}

export default Achado;
