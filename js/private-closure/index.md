### Задание

Как сделать приватное свойство value в JS?
**Предложить 2 решения.**


```js
const object = {
  _value: null,
  getValue () {
    return this._value;
  },
  setValue (value) {
    this._value = value;
  },
};

object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство
object.getValue(); // 73

// Должно быть. Можно трогать и переписывать полностью весь код выше 16й строчки.

object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство
object.getValue(); // 42

```
