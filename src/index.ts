import { URL } from "./constants";
import { listAll } from "./parser/assembleia";
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

    public async listAssembleias() {
        const options = {
            resolveWithFullResponse: true,
            uri: `${URL}/assembleias`,
        };

        const {body: page} = await this.req.get(options);
        return listAll(page);
    }
}

export default Condovox;
