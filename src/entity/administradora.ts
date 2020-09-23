export interface IParameters {
  id?: number;
  nome?: string;
  endereco?: string;
  telefone?: string;
  email?: string;
  site?: string;
}

class Administradora {
  public id?: number;
  public nome?: string;
  public endereco?: string;
  public telefone?: string;
  public email?: string;
  public site?: string;

  constructor({ id, nome, endereco, telefone, email, site }: IParameters) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.site = site;
  }
}

export default Administradora;
