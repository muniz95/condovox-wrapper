import request from 'request-promise'
import fetch from './util/fetch'

const URL = 'https://www.spaziochampville.com.br'

export const assembleias = (user, pass) => {
    const options = {
        uri: `${URL}/assembleias`,
        resolveWithFullResponse: true
    }
    return fetch.login(user, pass)
        .then(req => req.get(options))
        .catch(err => err)
}