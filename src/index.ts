import { URL } from "./constants";
import Administradora from "./entity/administradora";
import Assembleia from "./entity/assembleia";
import parserAdministradora from "./parser/administradora";
import parserAssembleia from "./parser/assembleia";
import fetch from "./util/fetch";

export class Condovox {
    private req: any;
    private user: string;
    private pass: string;

    constructor(user: string, pass: string) {
        this.req = null;
        this.user = user;
        this.pass = pass;
    }

    public async login() {
        this.req = await fetch.login(this.user, this.pass);
        return this;
    }

    public async listAssembleias(): Promise<Assembleia[]> {
        const options = {
            resolveWithFullResponse: true,
            uri: `${URL}/assembleias`,
        };

        const {body: page} = await this.req.get(options);
        return parserAssembleia.parseAll(page);
    }

    public async listAdministradoras(): Promise<Administradora[]> {
        const options = {
            resolveWithFullResponse: true,
            uri: `${URL}/administradora`,
        };

        const {body: page} = await this.req.get(options);
        return parserAdministradora.parseAll(page);
    }
}

export default Condovox;
