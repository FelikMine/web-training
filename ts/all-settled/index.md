### Задание

Необходимо написать функцию getResult, которая дождется выполнения всех Promise'ов и вернет их результаты.
На вход функция получает массив Promise, которые могут и резолвится и реджектится любыми валидаными JSON значениями. Функция должна вернуть Promise, который зарезолвится массивом с результатом выполнения исходных промисов.

```ts
const promises = [
    delay(50).then(() => 42),
    delay(75).then(() => { throw 'nope'; })
];

function getResult(promises) {
    // return Promise.resolve([{"status": "resolved", "value": 42}, {"status": "rejected", "reason": "nope"}]);
}
```
