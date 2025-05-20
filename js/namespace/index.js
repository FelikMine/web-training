
function namespace(word) {
    word = word.split('.')

    let baseObj = {}

    word.reduce((acc, key) => {

        return acc[key] = {}
    }, baseObj)

    return baseObj

}

console.log( namespace('a.b.c.d.e'));
