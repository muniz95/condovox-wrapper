import domify from '../util/domify'

class Assembleia {
    constructor(htmlResponse) {
        console.log(htmlResponse)
        this.document = domify.getDocument(htmlResponse)
    }
    
    listAssembleias() {
        const assembleias = []
        const nodes = Array.from(this.document.getElementsByTagName('tbody'))
        nodes.forEach((node) => {
            assembleias.push({
                title: node.children[0].children[0].textContent,
                date: node.children[0].children[1].textContent,
                confirmed: node.children[0].children[2].textContent,
            })
        })
        return assembleias
    }
}

export default Assembleia