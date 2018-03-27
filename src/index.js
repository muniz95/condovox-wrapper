import request from 'request-promise'

const URL = 'http://www.spaziochampville.com.br'

export const login = async (acesso_login, acesso_senha) => {
  const options = {
    uri: `${URL}/acesso/login`,
    json: {acesso_login, acesso_senha, acesso_submit: ''}
  }
  const req = request.defaults({
    jar: true
  })
  await req.post(options)

  return req
}

export const assembleias = (user, pass) => {
    return login(user, pass).then(req => req.get(`${URL}/assembleias`))
}