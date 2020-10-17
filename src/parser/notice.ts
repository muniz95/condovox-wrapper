import Notice from "../entity/Notice";
import { parseDate } from "../util/date";
import domify from "../util/domify";

export const parseLinks = (document: Document): string[] => {
  return Array.from(document.querySelectorAll("td > a"))
    .map((a: Element) => (a as HTMLAnchorElement).href);
}

export const getLinks = (response: string): string[] => {
  const dom = domify.getDocument(response);
  return parseLinks(dom);
};

const parse = (response: string) => {
  const dom = domify.getDocument(response);
  const [dateParagraph, contentParagraph] = Array.from(dom.querySelectorAll('p'))!;
  console.log(contentParagraph);
  return new Notice(
    dom.querySelector<"h3">('h3')!.textContent!,
    new Date(parseDate(dateParagraph.textContent!)),
    contentParagraph.textContent!,
  );
}

export default {
  getLinks,
  parse,
};
