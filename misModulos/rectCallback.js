

module.exports=(x,y,callback) => {
    setTimeout(() => { 
    if(x<=0 || y<=0){
            
    var mensajeError="Las dimensiones no son invalidas";
    callback(new Error(mensajeError),null);

    }else{ 
        
            var rect = {
                area: () => (x * y),
                perimetro: () => (2*(x + y)),
                /*per2: function (a, b) {
                    return 2*(a + b);
                }*/
              }
     var mensajeOk="El modulo Funciona";
     callback(null,rect)
    
    }
    }, 2000);
}
