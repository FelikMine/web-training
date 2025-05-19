const { log } = require("qunit");

class OBJ {

    #_value = null;

    getValue () {
        return this.#_value;
    }
    setValue (value) {
        this.#_value = value;
    }
};

const object = new OBJ();   

object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство
object.getValue(); // 73

// Должно быть. Можно трогать и переписывать полностью весь код выше 16й строчки.

object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство
object.getValue(); // 42

console.log('Новое свойство: ', object._value);
console.log('Приватное свойство: ', object.getValue());

