import { JSDOM } from "jsdom";

export const getDocument = (htmlResponse: string): Document =>
  new JSDOM(htmlResponse).window.document;

export default {
  getDocument,
};
