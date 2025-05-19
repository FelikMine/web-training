const { log } = require("qunit");

//При вызове функции создаем объект с двумя функциями
//Эти функции сохраняют внешнюю обл.видимости
//В том числе _value
function createObject () {

    let _value = null;

    return {
        getValue () {
            return _value;
        },
        setValue (value) {
            _value = value;
        }
    }

};

const object = createObject();

// object.setValue(42);
// object._value = 73; // изменили напрямую приватное свойство
// object.getValue(); // 73

// Должно быть. Можно трогать и переписывать полностью весь код выше 16й строчки.

object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство
object.getValue(); // 42

console.log('Новое свойство: ', object._value);
console.log('Приватное свойство: ', object.getValue());

