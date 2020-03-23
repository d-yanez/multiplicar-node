const fs = require('fs'); //FileSystem
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    //return new Promise((resolve, reject) => {

    console.log('=======================');
    console.log(`===tabla de ${base}=====`.red);
    console.log('========================');
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

    //});


}


let crearAchivo = (base, limite = 10) => { //o module.exports.crearArchivo

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es numero');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            // throw new Error(err);
            else
                resolve(`tablas/tabla-${base}.txt`)
                //return `tablas/tabla-${base}.txt`;

        });

    });
}

module.exports = { crearAchivo, listarTabla }