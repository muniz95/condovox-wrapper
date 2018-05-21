import { JSDOM } from "jsdom";

export const getDocument = (htmlResponse: any) => new JSDOM(htmlResponse.body).window.document;

export default {
    getDocument,
};
