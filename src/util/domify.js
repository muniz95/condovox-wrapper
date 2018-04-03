import { JSDOM } from 'jsdom'

export const getDocument = (htmlResponse) => new JSDOM(htmlResponse.body).window.document

export default {
    getDocument
}