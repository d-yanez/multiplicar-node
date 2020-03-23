//requires



const { crearAchivo, listarTabla } = require('./multiplicar/multiplicar'); //destructuracion, ver que funcion cargar
const { argv } = require('./config/yars');
const colors = require('colors');
//const argv = require('./config/yars').argv;

//console.log(argv);
let comando = argv._[0];

switch (comando) {

    case 'listar':
        //console.log('listar');
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        crearAchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado:${colors.red(archivo)}`))
            .catch(err => console.log(err));
        //console.log('crear');
        break;
    default:
        console.log('comando no conocido');
        break;

}


//let base = process.env.BASE || 1;
//let base = process.env.BASE || 1;
// let argv = process.argv;
// let base = argv[2]; //argumento
//comando en consola: node app listar --base 5 --limite 10

// console.log(argv.limite);
// console.log(argv.max);