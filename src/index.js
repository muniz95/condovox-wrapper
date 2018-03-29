import request from 'request-promise'
import fetch from './util/fetch'
import { URL } from './constants'

export const assembleias = (user, pass) => {
    const options = {
        uri: `${URL}/assembleias`,
        resolveWithFullResponse: true
    }
    return fetch.login(user, pass)
        .then(req => req.get(options))
        .catch(err => err)
}