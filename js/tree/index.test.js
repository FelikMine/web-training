
const QUnit = require('qunit');

function tree(n) {

    if (typeof n !== 'number' && typeof n !== 'string') return null;

    if (isNaN(n)) {
        return null;
    }
    n = parseInt(n, 10);

    if (n < 3) {
        return null;
    }
    const treeLength = 2 * (n - 2) + 1;
    let emptyField = 0;
    let leavesCount = 1;
    let tree = '';

    for (let i = 0; i < (n - 1); i++) {
        emptyField = treeLength - leavesCount;
        tree += ' '.repeat(emptyField / 2) + '*'.repeat(leavesCount) + ' '.repeat(emptyField / 2) + '\n';
        leavesCount += 2;
    }
    tree += ' '.repeat((treeLength - 1) / 2) + '|' + ' '.repeat((treeLength - 1) / 2) + '\n';
    return tree;
}

// Тесты
QUnit.module('Тестируем функцию tree', function () {
    QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
        assert.strictEqual(tree(0), null);
        assert.strictEqual(tree(1), null);
        assert.strictEqual(tree(2), null);
        assert.strictEqual(tree('0'), null);
        assert.strictEqual(tree('1'), null);
        assert.strictEqual(tree('2'), null);
    });

    QUnit.test('Ёлочка высотой 3', function (assert) {
        const expected =
            ' * \n' +
            '***\n' +
            ' | \n';
        assert.strictEqual(tree(3), expected);
        assert.strictEqual(tree('3'), expected);
    });

    QUnit.test('Ёлочка высотой 4', function (assert) {
        const expected =
            '  *  \n' +
            ' *** \n' +
            '*****\n' +
            '  |  \n';
        assert.strictEqual(tree(4), expected);
        assert.strictEqual(tree('4'), expected);
    });

    QUnit.test('Ёлочка высотой 5', function (assert) {
        const expected =
            '   *   \n' +
            '  ***  \n' +
            ' ***** \n' +
            '*******\n' +
            '   |   \n';
        assert.strictEqual(tree(5), expected);
        assert.strictEqual(tree('5'), expected);
    });

    QUnit.test('Ёлочка высотой 8', function (assert) {
        const expected =
            '      *      \n' +
            '     ***     \n' +
            '    *****    \n' +
            '   *******   \n' +
            '  *********  \n' +
            ' *********** \n' +
            '*************\n' +
            '      |      \n';
        assert.strictEqual(tree(8), expected);
        assert.strictEqual(tree('8'), expected);
    });
});

QUnit.done(function(results) {
    console.log(`\n=== Итог ===`);
    console.log(`Всего тестов: ${results.total}`);
    console.log(`Пройдено: ${results.passed}`);
    console.log(`Провалено: ${results.failed}`);
});

QUnit.start();