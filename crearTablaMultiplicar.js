const fs = require('fs');


let crearFichero = (base, limite) => {


    return new Promise((resolve, reject) => {
        if (Number(base)) {
            let data = '';
            for (j = 0; j <= limite; j++) {
                data += `${base} * ${j} = ${base*j} \n`;

            }

            fs.writeFile(`tabla-${base}.txt'`, data, (err) => {
                if (err) throw err;
                resolve(`tabla-${base}.txt'`);
            });
        } else {
            reject(`La entrada es invalida`);
        }

    });

} //fin crearFichero

let mostrarTabla = (base, limite) =>{
    for(i=0; i<=limite; i++){
        console.log(`${base} * ${i} \n`);
    }
   
}//fin fichero

module.exports = {
    crearFichero,
    mostrarTabla
};