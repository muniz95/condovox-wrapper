import { URL } from "./constants";
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

        return await this.req.get(options);
    }
}

export default Condovox;
