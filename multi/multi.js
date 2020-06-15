const fs = require('fs');
const colors = require('colors');

let listart = (base, limite = 10) => {

    console.log(`Tabla de multiplicas de ${ base }`.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }

}

let creart = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al${ limite }.txt`);

        });
    });
}

module.exports = {
    creart,
    listart
}