import { URL } from "../constants";
import superagent, { SuperAgentStatic } from "superagent";

const login = async (login: string, password: string): Promise<SuperAgentStatic> => {
  const agent = superagent.agent();
  
  await agent
    .post(`${URL}/acesso/login`)
    .withCredentials()
    .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9')
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
