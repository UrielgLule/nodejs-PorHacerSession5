const fs = require('fs');
var colors = require('colors');


let listadoPorHacer = [];

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err) => {
        if(err)
        throw new Error('No se creo la db', err) 
    });

}

const cargarDB = () => {
    try{
        listadoPorHacer =  require('../db/data.json');
    } catch (error){
        listadoPorHacer = [];
    }
    
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = (descripcion) =>{

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDb();

    return porHacer;
}

const actualizar = (descripcion, completado = true) =>{
    
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if( index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    if( listadoPorHacer.length === nuevoListado.length ){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDb();
        return true;
    }
}

module.exports ={
    crear,
    getListado,
    actualizar,
    borrar
}