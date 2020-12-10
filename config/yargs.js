const opts = {
    descripcion:{
       demand: true,
       alias: 'd',
       desc: 'Descripcion de la tara por hacer'
    },
    completado:{
        default: true,
        alias: 'c',
        desc: 'Marca como completada o pendiente la tarea'
    }
}

const argv = require('yargs')
                .command('crear', 'Crear una tarea por hacer', opts)
                .command('actualizar','Actualiza el estado de la tarea', opts)
                .command('borrar', 'Eliminar la tarea', opts)
                .help()
                .argv;

module.exports={
    argv
}