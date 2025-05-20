const { log } = require("qunit");

function flatten(list) {

    let newList = [];

    while(list.length) {
        const element = list.pop()
        if(element && element.constructor === Array) {
            list.push(...element)
        } else {
            newList.push(element)
        }
    }

    return newList.reverse();

    // for(let i = 0; i < list.length; i++) {

    //     if(list[i] && list[i].constructor === Array ) {
    //        list.splice(i, 1, ...list[i])
    //        console.log(list);

    //     }
    // }
}


console.log('Result: ', flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [],
['el', ['elel', 'e', ['l', 'k', ['m', 'v']]]],
{ a: 1 }]));
