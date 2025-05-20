class HTTPTransport {

    get(url, options = {}) {

        return new Promise((resolve, reject) => {

            let query = url;
            let xhr = new XMLHttpRequest();

            //options
            if(options.data) {
                query += '?'
                for(let key in options.data) {
                    query += key + '=' + options.data[key] + '&'
                }
                query = query.slice(0, -1);
            }

            //timeout
            if (options.timeout) {
                xhr.timeout = options.timeout;
                xhr.ontimeout = () => {
                reject(new Error('Timeout exceeded'));
                }
            }
            xhr.open('GET', query);

            //headers
            if(options.headers) {
                for(let key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key])
                }
            }

            xhr.send();

            xhr.onerror = () => {
                reject(`Strange network error with status: ${xhr.status}`)
            }

            xhr.onload = () => {
                if(xhr.status>=200 && xhr.status < 300) {
                    resolve(xhr)
                }else {
                    reject(new Error(`Get request is failed with status: ${xhr.status}`))
                }
            }

        })
    }

    post(url, options = {}) {

        return new Promise((resolve, reject) => {

            let query = url;
            let postParams = options.data;
            let xhr = new XMLHttpRequest();

            //options
            if(postParams) {
                postParams = JSON.stringify(options.data, null, 2);
            } else {
                postParams = null;
            }

            //timeout
            if (options.timeout) {
                xhr.timeout = options.timeout;
                xhr.ontimeout = () => {
                reject(new Error('Timeout exceeded'));
                }
            }
            xhr.open('POST', query);

            //headers
            if(options.headers) {
                for(let key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key])
                }
            } else if(postParams) {
                xhr.setRequestHeader('Content-Type', 'application/json')
            }

            xhr.send(postParams);

            xhr.onerror = () => {
                reject(`Strange network error with status: ${xhr.status}`)
            }

            xhr.onload = () => {
                if(xhr.status>=200 && xhr.status < 300) {
                    resolve(xhr)
                }else {
                    reject(new Error(`Post request is failed with status: ${xhr.status}`))
                }
            }

        })
    }
    delete(url, options = {}) {
        return new Promise((resolve, reject) => {
            let query = url;
            let xhr = new XMLHttpRequest();

            if (options.data) {
                query += '?';
                for (let key in options.data) {
                    query += key + '=' + options.data[key] + '&';
                }
                query = query.slice(0, -1);
            }

            if (options.timeout) {
                xhr.timeout = options.timeout;
                xhr.ontimeout = () => {
                    reject(new Error('Timeout exceeded'));
                }
            }

            xhr.open('DELETE', query);

            if (options.headers) {
                for (let key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }

            xhr.send();

            xhr.onerror = () => {
                reject(`Strange network error with status: ${xhr.status}`);
            }

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr);
                } else {
                    reject(new Error(`Delete request failed with status: ${xhr.status}`));
                }
            }
        });
    }
    put(url, options = {}) {
        return new Promise((resolve, reject) => {
            let query = url;
            let putParams = options.data;
            let xhr = new XMLHttpRequest();

            if (putParams) {
                putParams = JSON.stringify(options.data, null, 2);
            } else {
                putParams = null;
            }

            if (options.timeout) {
                xhr.timeout = options.timeout;
                xhr.ontimeout = () => {
                    reject(new Error('Timeout exceeded'));
                }
            }

            xhr.open('PUT', query);

            if (options.headers) {
                for (let key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            } else if (putParams) {
                xhr.setRequestHeader('Content-Type', 'application/json');
            }

            xhr.send(putParams);

            xhr.onerror = () => {
                reject(`Strange network error with status: ${xhr.status}`);
            }

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr);
                } else {
                    reject(new Error(`Put request failed with status: ${xhr.status}`));
                }
            }
        });
    }
}
const transport = new HTTPTransport();

const button = document.getElementById("xml");
const info = document.getElementById("info")
button.addEventListener('click', handleClick);

function handleClick() {
    transport.get('https://jsonplaceholder.typicode.com/posts', {
    timeout: 10000,
    data: {
        userId: 1,
        id: 3,
    },
    headers : {
        'Content-Type': 'application/json',
    }
    }).then( response => {
        console.log(response);
        const data = JSON.parse(response.responseText);
        info.innerText = JSON.stringify(data, null, 2);
    })
}

