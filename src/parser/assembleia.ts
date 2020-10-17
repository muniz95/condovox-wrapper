import Assembleia from "../entity/assembleia";
import { parseDate } from "../util/date";
import domify from "../util/domify";

export const parseAll = (response: string): Assembleia[] => {
  const dom = domify.getDocument(response);
  const nodes: Element[] = Array.from(dom.getElementsByClassName("ativado"));

  return nodes.map(parse);
};

const parse = (node: Element):Assembleia =>
  new Assembleia({
    confirmed: node.children[2].textContent === "Confirmed",
    date: parseDate(node.children[1].textContent!),
    title: node.children[0].textContent!,
    url: node.children[0].children[0].getAttribute("href")!,
  });

export default {
  parseAll,
};
