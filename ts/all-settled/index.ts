interface promiseObjectStatus<T> {
    status: "resolved" | "rejected" | '',
    value?: T,
    reason?: string,
}

async function getResult<T>(promises : Promise<T>[]) {

    let statuses : promiseObjectStatus<T>[] = [];

    async function statusPromise(promise : Promise<T>) {

        let status : promiseObjectStatus<T> = {
            status: '',
        } ;

        await promise
        .then(value => { status.status = "resolved"; status.value = value; })
        .catch(error => { status.status = "rejected"; status.reason = error; });

        return status;

    }
    for(let i = 0; i<promises.length; i++) {
        const promStatus = await statusPromise(promises[i]);
        statuses.push(promStatus);
    }
    return statuses;
}
const promise = new Promise((res, rej)=> {

    return setTimeout(()=> res('hello'), 1000);

})
promise.then(console.log)

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const promises = [
    delay(50).then(() => 42),
    delay(75).then(() => { throw 'nope'; })
];
//async возвращает промис всегда
getResult(promises).then(console.log);
