import request from 'request-promise'
import fetch from './util/fetch'
import assembleia from './parser/assembleia'
import { URL } from './constants'

export class Condovox {
    async login(user, pass) {
        this.req = await fetch.login(user, pass)
        return this
    }
    
    listAssembleias(instance) {
        const options = {
            uri: `${URL}/assembleias`,
            resolveWithFullResponse: true
        }
        return instance.req.get(options)
            .then(assembleia.listAll)
            .catch(err => err)
    }
}
