import { RequestAPI } from "request";
import request from "request-promise";
import { URL } from "../constants";

export const login = async (
  acessoLogin: string,
  acessoSenha: string
): Promise<RequestAPI<any, any, any>> => {
  const options = {
    form: {
      acesso_login: acessoLogin,
      acesso_senha: acessoSenha,
      acesso_submit: "",
    },
    resolveWithFullResponse: true,
    simple: false,
    uri: `${URL}/acesso/login`,
  };
  const req = request.defaults({
    jar: true,
  });
  await req.post(options);

  return req;
};

export default {
  login,
};
