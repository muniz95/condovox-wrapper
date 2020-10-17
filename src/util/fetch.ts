import { URL } from "../constants";
import superagent, { SuperAgentStatic } from "superagent";

const login = async (login: string, password: string): Promise<SuperAgentStatic> => {
  const agent = superagent.agent();
  
  await agent
    .post(`${URL}/acesso/login`)
    .withCredentials()
    .set('Accept', 'text/html')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({
      acesso_login: login,
      acesso_senha: password,
      acesso_submit: ""
    })
    .redirects(1);

  return agent as SuperAgentStatic;
}

export default {
  login,
};
