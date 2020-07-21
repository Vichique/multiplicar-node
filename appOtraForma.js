/*const argv = require('yargs')
    .command('listar', 'muestra en consola la tabla de multiplicar', {
        base: {
            alias: 'b',
            demand: false
        },

        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'crea un fichero con la tabla de multiplicar', {
        base: {
            alias: 'c',
            demand: false
        },

        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;*/

const { crearFichero, mostrarTabla } = require('./crearTablaMultiplicar');
const argv = require('./config/yargs.js').argv;
const colors = require('C:/Program Files/nodejs/node_modules/npm/node_modules/colors');
/*console.log(process);
console.log(module);*/

console.log(process.argv);


let command = argv._[0];
console.log(command);
let base = argv.base;
let limite =  argv.limite;
console.log('----------'.green);
            console.log("la base es: " + argv.base);
			console.log("el limite es: " + argv.limite);
switch (command) {

    case 'listar':
        {
            console.log("**Listar**");
            mostrarTabla(base, limite);
            break;
        }

    case 'crear':
        {
        	console.log("**Listar**");
            crearFichero(base, limite).then(nombreArchivo => {
                console.log('Success '+ colors.red(`${nombreArchivo}`));
            }).catch(err => {
                console.log(`${err} . Verifica que sea valido`);
            });
            break;
        }

    default:
        {
            console.log('indique un comando');
            break;
        }

} // fin switch
//let base = 5;

/*let entrada = process.argv;
param = entrada[2];
base = param.split('=')[1];
crearFichero(base).then(nombreArchivo =>{
	console.log(`Success ${nombreArchivo}`);
}).catch(err =>{
	console.log(`${err} . Verifica que sea valido`);
});*/