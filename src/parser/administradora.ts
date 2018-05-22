import Administradora from "../entity/administradora";
import domify from "../util/domify";

export const parseAll = (response: string) => {
    const dom = domify.getDocument(response);
    const nodes: Element[] = Array.from(dom.getElementsByTagName("tbody"));

    return nodes.map((node) => parse(node)) as Administradora[];
};

const parse = (node: Element): Administradora =>
    new Administradora({
        nome: node.children[0].textContent as string,
        telefone: node.children[1].textContent as string,
    });

export default {
    parseAll,
};
