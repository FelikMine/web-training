

function tree(n) {

    if(n<3) {
        return null
    }

    const treeLength = 2 * (n-2) + 1;
    let emptyField = 0;
    let leavesCount = 1
    let tree = '';

    for(let i = 0; i < (n-1); i++) {

        emptyField = treeLength - leavesCount;
        // console.log('Параметры: ' , emptyField, treeLength, leavesCount);

        tree += (' '.repeat(emptyField/2) + '*'.repeat(leavesCount) + ' '.repeat(emptyField/2) + '\n');

        leavesCount += 2;
    }
    tree += (' '.repeat((treeLength-1)/2) + '|' + ' '.repeat((treeLength-1)/2) + '\n');
    return tree
}

console.log(tree(5));
