import domify from '../util/domify'

export const listAll = (response) => {
    const assembleias = []
    const dom = domify.getDocument(response)
    const nodes = Array.from(dom.getElementsByTagName('tbody'))
    console.log(nodes.length);
    
    nodes.forEach((node) => {
        assembleias.push({
            url: node.children[0].children[0].children[0].getAttribute('href'),
            title: node.children[0].children[0].textContent,
            date: node.children[0].children[1].textContent,
            confirmed: node.children[0].children[2].textContent,
        })
    })
    return assembleias
}

export default {
    listAll
}