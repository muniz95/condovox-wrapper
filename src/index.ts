import { SuperAgentStatic } from "superagent";
import { URL } from "./constants";
import Administradora from "./entity/administradora";
import Assembleia from "./entity/assembleia";
import parserAdministradora from "./parser/administradora";
import parserAssembleia from "./parser/assembleia";
import fetch from "./util/fetch";

export class Condovox {
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
