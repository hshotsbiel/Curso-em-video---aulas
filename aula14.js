function parimp(n) {
    if( n%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

var res = parimp(5)

console.log(res)

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma(2, 3))