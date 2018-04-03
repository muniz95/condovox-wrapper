import request from 'request-promise'
import fetch from './util/fetch'
import Assembleia from './entity/assembleia'
import { URL } from './constants'

export class Condovox {
    async login(user, pass) {
        this.req = await fetch.login(user, pass)
        return this
    }
    
    assembleias(instance) {
        const options = {
            uri: `${URL}/assembleias`,
            resolveWithFullResponse: true
        }
        return instance.req.get(options)
            .then(res => new Assembleia(res))
            // .then(req => req.get(options))
            .catch(err => err)
    }
}
