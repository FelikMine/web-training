

function compress(arr) {
    arr.sort((a,b) => a-b);
    let result = arr[0] + '-x';

    for(let i = 1; i < arr.length; i++) {

        if(arr[i] == arr[i-1]+1) {
            result = result.slice(0, result.length-1) + arr[i]
        } else {
            if(result[result.length - 1] === 'x') {
                result = result.slice(0, result.length-2)
            }
            result += ',' + arr[i] + '-x'
        }
    }

    if(result[result.length - 1] === 'x') {
        return result.slice(0, result.length-2)
    } else {
        return result
    }

}


console.log(
    compress([1, 4, 5, 2, 3, 9, 8, 11, 0])
);
console.log(
    compress([1, 4, 3, 2])
);
console.log(
   compress([1, 4])
);