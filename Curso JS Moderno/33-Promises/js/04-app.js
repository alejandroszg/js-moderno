const paises = [];

const nuevoPais = pais => new Promise(resolve => {
    setTimeout(()=>{
        paises.push(pais);
        resolve('Agregado nuevo país: ');
    }, 3000);
});

nuevoPais('Alemania')
    .then(resultado =>{
        console.log(resultado);
        console.log(pai ses);
        return nuevoPais('Francia');
    })
    .then(resultado =>{
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Venezuela')
    })
    .then(resultado =>{
        console.log(resultado);
        console.log(paises);
    })