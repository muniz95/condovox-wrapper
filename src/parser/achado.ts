import Achado from "../entity/achado";
import Usuario from "../entity/usuario";
import { parseDate } from "../util/date";
import domify from "../util/domify";

export const parseAll = (response: string): Achado[] => {
  const dom = domify.getDocument(response);
  const nodes: Element[] = Array.from(dom.getElementsByTagName("tbody"));

  return nodes.map(parse);
};

const parse = (node: Element) =>
  new Achado({
    foundBy: new Usuario({ nome: node.children[1]!.textContent!.trim() }),
    data: parseDate(node.children[2]!.textContent!.trim()),
    resolvido: node.children[3]!.textContent!.trim() !== "",
    titulo: node.children[0]!.textContent!.trim(),
  });

export default {
  parseAll,
};
