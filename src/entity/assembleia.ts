export interface IParameters {
    url?: string;
    title?: string;
    date?: Date;
    confirmed?: boolean;
}

class Assembleia {
    public url?: string;
    public title?: string;
    public date?: Date;
    public confirmed?: boolean;

    constructor({
        url,
        title,
        date,
        confirmed,
    }: IParameters) {
        this.url = url;
        this.title = title;
        this.date = date;
        this.confirmed = confirmed;
    }

    /**
     * asJSON
     */
    public asJSON() {
        return JSON.stringify({
            confirmed: this.confirmed,
            date: this.date,
            title: this.title,
            url: this.url,
        });
    }
}

export default Assembleia;
