const options ={
    base: {
            demand: true
        },

        limite: {
            default: 7,
            demand: true
        }
}

const argv = require('yargs')
    .command('listar', 'muestra en consola la tabla de multiplicar', options)
    .command('crear', 'crea un fichero con la tabla de multiplicar', options)
    .help()
    .argv;

    module.exports = {
    argv
    }