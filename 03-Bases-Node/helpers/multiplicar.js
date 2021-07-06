const fs = require('fs');

const crearArchivo = async( base = 5 , listar, hasta = 10) => {

    let salida = '';
    try{
        for (let i = 1; i<= hasta; i++){
            salida += (` ${ base } x ${i} = ${ base * i}\n`);
            
        }

        if (listar){
            console.log(salida);
        }
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        return `Se creo el archivo tabla-${base}.txt correctamente`;

    }catch (err) {
        throw err;
    }
    
   
}

module.exports = {
    crearArchivo
}
