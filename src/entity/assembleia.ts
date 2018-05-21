import domify from "../util/domify";

class Assembleia {
    private document: any;

    constructor(htmlResponse: any) {
        this.document = domify.getDocument(htmlResponse);
    }

    public listAssembleias() {
        const assembleias: Array<{ title: any; date: any; confirmed: any; }> = [];
        const nodes: Element[] = Array.from(this.document.getElementsByTagName("tbody"));
        nodes.forEach((node) => {
            assembleias.push({
                confirmed: node.children[0].children[2].textContent,
                date: node.children[0].children[1].textContent,
                title: node.children[0].children[0].textContent,
            });
        });
        return assembleias;
    }
}

export default Assembleia;
