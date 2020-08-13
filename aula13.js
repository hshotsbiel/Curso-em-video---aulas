var num = [5,8,4]
num[3]=6
num.push(7)

console.log(`Nosso vetor é o ${num}`)

for(var c = 0; c < num.length; c++) {
    console.log(num[c])
}

console.log('***************')

for(let c in num) {
    console.log(num[c])
}