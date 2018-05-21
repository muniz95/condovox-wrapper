import domify from "../util/domify";

export const listAll = (response: string) => {
    const assembleias: Array<{ url: any; title: any; date: any; confirmed: any; }> = [];
    const dom = domify.getDocument(response);
    const nodes: Element[] = Array.from(dom.getElementsByTagName("tbody"));

    nodes.forEach((node) => {
        assembleias.push({
            confirmed: node.children[0].children[2].textContent,
            date: node.children[0].children[1].textContent,
            title: node.children[0].children[0].textContent,
            url: node.children[0].children[0].children[0].getAttribute("href"),
        });
    });
    return assembleias;
};

export default {
    listAll,
};
