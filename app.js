let product = { 
    count: 2,
    price: 12.55,
    type: "ropa" 
};
let productAlimentacion = { 
    count: 5,
    price: 0.90,
    type: "alimentacion" 
};
let productLibro = { 
    count: 3,
    price: 10.95,
    type: "libro" 
};


//Calcular precio total de un producto
function getTotal(){
    if(product.count === 0 && productAlimentacion.count === 0 && productLibro.count === 0){
        product.price = 0;
        console.log(product.price);
        productAlimentacion = 0;
        console.log(productAlimentacion.price);
        productLibro = 0;
        console.log(productLibro.price);
    } else {
        let totalPriceGeneral = product.count * product.price 
        let totalPriceAlimentacion = productAlimentacion.count * productAlimentacion.price 
        let totalPriceLibros = productLibro.count * productLibro.price
        console.log(Math.round(totalPriceGeneral));
        console.log(Math.round(totalPriceAlimentacion));
        console.log(Math.round(totalPriceLibros));
    } 
}
getTotal();

//Calcular el IVA dependiendo del tipo de producto e IVA

function getVat() {
    let iva = "alimentacion";
    
    switch (iva) {
        case "alimentacion":
            product.type === "alimentacion"
            let ivaAlimentacion = productAlimentacion.price * 1.1 //calcular iva
            let totalPriceAlimentacion = productAlimentacion.count * ivaAlimentacion//calcular precio total con iva añadido
            console.log(Math.round(totalPriceAlimentacion));
            break;
        case "libro":
            product.type === "libro"
            let ivaLibro = productLibro.price * 1.04//calcular iva
            let totalPriceLibros = productLibro.count * ivaLibro//calcular precio total con iva añadido
            console.log(Math.round(totalPriceLibros));
            break;
        default:
            product.type === "ropa"
            let ivaGeneral = product.price * 1.21//calcular iva
            let totalPriceGeneral = product.count * ivaGeneral//calcular precio total con iva añadido
            console.log(Math.round(totalPriceGeneral));
            break;
    };    
}

getVat();


//<-------------------------------------------------------------------->\\

/* Extra 1: Calcular sueldo neto en nómina: Vamos a hacer una simulación de calculo de sueldo neto en nómina.
Las condiciones:
Por rango de salario:
Si el empleado gana menos de 12.000 € bruto año aplicar una retención del 0%
Si el empleado gana menos de 24.000 € bruto año aplicar una reteneción del 8%
Si el empleado ganas menos de 34.000 € bruto año aplicar una reteneción del 16%
Si el empleado ganas más de 34.000 € bruto año aplicar una reteneción del 30%
Adicionalmente:
Si el empleado tiene hijos, restarle a la retencion 2 puntos.
Sacar el neto mensual (si es catorce pagas dividir por catorce, si no por 12)
*/

const empleado = {
    bruto: 10500,
    hijos: 0,
    pagas: 14
};

//Variables de acceso, condicionales y strings
let bruto = empleado.bruto;
let hijos = empleado.hijos;
let numPagas = empleado.pagas;
let tramoRetencion0 = bruto < 12000;
let tramoRetencion8 = bruto > 12000 && bruto < 24000 && hijos > 0;
let tramoRetencion16 = bruto > 24000 && bruto < 34000 && hijos > 0;
let tramoRetencionMas30 = bruto > 34000 && hijos > 0;
let resultadoRetencion = "La retención es ";
let resultadoAnual = "El sueldo neto anual es ";
let resultadoMensual = "El sueldo neto mensual es ";

//neto anual y mensual en nómina.

function salarioNetoMensualYAnual(){
    switch (true) {
        case bruto < 12000: //Comprobación salario bruto inferior a 12000€
            let netoAnualRetencion0 = tramoRetencion0 ? 0 : netoAnualRetencion8;
            console.log(resultadoRetencion + netoAnualRetencion0);
            console.log(resultadoAnual + (bruto - netoAnualRetencion0));
            console.log(resultadoMensual + Math.round((bruto - netoAnualRetencion0) / numPagas));
            break;
        case bruto > 12000 && bruto < 24000://Comprobación salario bruto entre 12000 - 24000€
            let netoAnualRetencion8 = tramoRetencion8 ? bruto * 0.06 : bruto * 0.08;
            console.log(resultadoRetencion + Math.round(netoAnualRetencion8));
            console.log(resultadoAnual + (bruto - netoAnualRetencion8));
            console.log(resultadoMensual + Math.round((bruto - netoAnualRetencion8) / numPagas));
            break;
        case bruto > 24000 && bruto < 34000://Comprobación salario bruto entre 24000 - 34000€
            let netoAnualRetencion16 = tramoRetencion16 ? bruto * 0.14 : bruto * 0.16;
            console.log(resultadoRetencion + Math.round(netoAnualRetencion16));
            console.log(resultadoAnual + (bruto - netoAnualRetencion16));
            console.log(resultadoMensual + Math.round((bruto - netoAnualRetencion16) / numPagas));
            break;
        default: //Salario más 34000€
            let retencionAnualMas30 = tramoRetencionMas30 ? bruto * 0.28 : bruto * 0.3
            console.log(resultadoRetencion + Math.round(retencionAnualMas30));
            console.log(resultadoAnual + (bruto - retencionAnualMas30));
            console.log(resultadoMensual + Math.round((bruto - retencionAnualMas30) / numPagas));
            break;
    };
}

salarioNetoMensualYAnual();