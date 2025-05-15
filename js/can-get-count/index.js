
function canGetCount(n) {
    return () => {

        if(n>0) {
            n-=1
            return 'yes'
        } else {
            return 'no'
        }
    }
}

const getOne = canGetCount(1);

console.log(getOne())
console.log(getOne())

console.log(getOne())
console.log(getOne())

console.log(getOne())
console.log(getOne())
