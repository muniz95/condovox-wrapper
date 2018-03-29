import request from 'request-promise'

const URL = 'https://www.spaziochampville.com.br'

export const login = async (acesso_login, acesso_senha) => {
  const options = {
    uri: `${URL}/acesso/login`,
    form: {
        acesso_login, 
        acesso_senha,
        acesso_submit: ''
    },
    resolveWithFullResponse: true,
    simple: false
  }
  const req = request.defaults({
    jar: true
  })
  await req.post(options)

  return req
}

export const assembleias = (user, pass) => {
    const options = {
        uri: `${URL}/assembleias`,
        resolveWithFullResponse: true
    }
    return login(user, pass)
        .then(req => req.get(options))
        .catch(err => err)
}