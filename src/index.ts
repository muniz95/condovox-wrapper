import { SuperAgentStatic } from "superagent";
import { URL } from "./constants";
import Administradora from "./entity/administradora";
import Assembleia from "./entity/assembleia";
import Notice from "./entity/Notice";
import parserAdministradora from "./parser/administradora";
import parserAssembleia from "./parser/assembleia";
import parserNotice from "./parser/notice";
import fetch from "./util/fetch";

class Condovox {
  private client: SuperAgentStatic | null;
  private user: string;
  private pass: string;

  constructor(user: string, pass: string) {
    if (!user) {
      throw new Error("O login deve ser informado");
    }
    if (!pass) {
      throw new Error("A senha deve ser informada");
    }
    this.client = null;
    this.user = user;
    this.pass = pass;
  }

  public async login() {
    this.client = await fetch.login(this.user, this.pass);
    return this;
  }

  public async getNotices(): Promise<Notice[]> {
    const { text: page } = await this.client!.get(`${URL}/avisos`);
    const allResults = await Promise.all(
      parserNotice.getLinks(page).map(
        async (link: string) => 
          parserNotice.parse((await this.client!.get(link)).text)
      )
    );
    return allResults;
  }

  public async listAssembleias(): Promise<Assembleia[]> {
    const { text: page } = await this.client!.get(`${URL}/assembleias`);
    return parserAssembleia.parseAll(page);
  }

  public async listAdministradoras(): Promise<Administradora[]> {
    const { text: page } = await this.client!.get(`${URL}/administradora`);
    return parserAdministradora.parseAll(page);
  }
}

export default Condovox;
