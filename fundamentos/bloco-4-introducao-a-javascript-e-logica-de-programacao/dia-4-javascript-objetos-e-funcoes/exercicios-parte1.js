let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178,",
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
}




// console.log('Bem-vinda ' + info.personagem);

info['recorrente'] = 'sim';

// for (const key in info) {
//     console.log(key);
// }

for (const key in info) {
    for (const key in info2) {
        console.log(info[key] + ' e ' + info2[key])
    }
}