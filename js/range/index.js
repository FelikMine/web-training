

function range (start = 0 , end , step = 1) {

    if(end == undefined) {
        end = start;
        start = 0;
    }

    if (start == 0 && end == undefined && step && undefined) {
        return []
    }

    if(step == 0) {
        return Array(Math.abs(end-start)).fill(start);
    }

    let arr = []

    for(let i = start; end>0 ? i < end : i > end; end>0 ? i+=step : i -= Math.abs(step)) {
        arr.push(i)
    }

    return arr
}

console.log(range(4));
console.log(range(-4));
console.log(range(1, 5));
console.log(range(0, 20, 5));
console.log(range(0, -4, -1));
console.log(range(1, 4, 0));
console.log(range(0));