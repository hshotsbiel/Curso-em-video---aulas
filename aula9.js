var hora = 20
console.log(`Agora são ${hora} horas`)
if (hora < 6) {
    console.log('MADRUGADA! Vá dormir')
} else if (hora < 12) {
    console.log('Boa Dia')
} else if (hora < 18) {
    console.log('Boa Tarde')
} else {
    console.log('Boa noite')
}
