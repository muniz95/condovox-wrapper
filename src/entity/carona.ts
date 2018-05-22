interface IParameters {
    destino?: string;
    diaFrequencia?: string;
}

class Carona {
    public destino?: string;
    public diaFrequencia?: string;

    constructor({
        destino,
        diaFrequencia,
    }: IParameters) {
        this.destino = destino;
        this.diaFrequencia = diaFrequencia;
    }
}
