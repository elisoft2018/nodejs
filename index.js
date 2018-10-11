/*var rectangulo = {
    area: (a, b) => (a * b),
    perimetro: (a, b) => (2*(a + b)),
    per2: function (a, b) {
        return 2*(a + b);
    }
}*/

var rectangulo = require('./rectangulo');
var moduloRectangulo= require('./misModulos/rectCallback');
  function calcularRect(l,b) {
    console.log("calculando el rectangulo con l = " + l + " y b = " + b);

    if (l <= 0 || b <= 0) {
        console.log("las dimenciones del rectagulos deben ser mayores que 0 :  l = "
               + l + ",  y b = " + b);
    }
    else {
	    console.log("el area del rectangulo es  " + rectangulo.area(l,b));
	    console.log("el perimetro del rectangulo  " + rectangulo.perimetro(l,b));
    }
  }
 /* calcularRect(10,-5);
  calcularRect(10,5);
  calcularRect(-10,5);
  calcularRect(10,0);*/
  moduloRectangulo(-10,10,function(err,rect){
    if(err){
        console.log(err);
    }else{
      console.log("***FUNCIONA***");
      console.log(rect.area());
      console.log(rect.perimetro());
    }
})