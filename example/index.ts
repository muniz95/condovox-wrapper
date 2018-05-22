import { config } from "dotenv";
import { Condovox } from "../src";

(async () => {
    config();

    let {user, pass} = process.env;
    if (user === undefined) {
        user = "";
    }
    if (pass === undefined) {
        pass = "";
    }
    const condovox = new Condovox(user, pass);
    await condovox.login();
    const assembleias = await condovox.listAssembleias();

    // tslint:disable-next-line:no-console
    console.debug(assembleias.map((a) => a.asJSON()));
})();
