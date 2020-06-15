const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


const { creart, listart } = require('./multi/multi');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listart(argv.base, argv.limite)
        break;

    case 'crear':
        creart(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado:`, colors.blue(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocindo');
        break;
}
/* let argv2 = process.argv;
console.log('Limite', argv.limite); */
//let parametro = argv[2];
//let base = parametro.split('=')[1]