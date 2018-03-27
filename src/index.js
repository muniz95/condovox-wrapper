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
    simple: false,
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4,eo;q=0.2',
        'Connection': 'keep-alive',
        'Content-Length': '57',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'condovox=51f686e75df3e4e99c5574100bb30fc5',
        'Host': 'www.spaziochampville.com.br',
        'Referer': 'https://www.spaziochampville.com.br/',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0'
    }
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
        resolveWithFullResponse: true,
        simple: false,
        headers: {
            'Host': 'www.spaziochampville.com.br'
        }
    }
    return login(user, pass)
        .then(req => req.get(options))
        .catch(err => err)
}