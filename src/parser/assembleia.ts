import Assembleia from "../entity/assembleia";
import { parseDate } from "../util/date";
import domify from "../util/domify";

export const parseAll = (response: string) => {
  const dom = domify.getDocument(response);
  const nodes: Element[] = Array.from(dom.getElementsByClassName("ativado"));

  return nodes.map((node) => parse(node)) as Assembleia[];
};

const parse = (node: Element) =>
  new Assembleia({
    confirmed: node.children[2].textContent === "Confirmed",
    date: parseDate(node.children[1].textContent as string),
    title: node.children[0].textContent as string,
    url: node.children[0].children[0].getAttribute(
      "href"
    ) as string,
  });

export default {
  parseAll,
};
