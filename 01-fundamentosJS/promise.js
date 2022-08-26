const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let instancia = false;

        if(instancia){
            resolve('Descuento aplicado');
        } else {
            reject('No resuelto');
        }
    } , 3000)
});

promise
    .then((res)=> {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })