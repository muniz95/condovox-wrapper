import request from 'request-promise'
import { URL } from '../constants'

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

export default {
    login
}