import { Condovox } from "../src";

describe("login", () => {
  it('deve dar erro ao não informar usuário e senha', async () => {
    expect(() => {
      new Condovox('', '').login();
    }).toThrow()
  });
  it('deve dar erro ao informar apenas o usuário', async () => {
    expect(() => {
      new Condovox('teste', '').login();
    }).toThrow()
  });
  it('deve dar erro ao informar apenas a senha', async () => {
    expect(() => {
      new Condovox('', 'teste').login();
    }).toThrow()
  });
});