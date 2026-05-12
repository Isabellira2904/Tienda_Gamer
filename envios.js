export function calcularEnvio (cantPr){
    if(cantPr < 3){
        return "no se permiten compras menores a 3";
    } else if (cantPr >= 3 && cantPr <= 1){
        return "El costo de envio es de $15USD"
    } else {
        return "El envio es gratuito";
    }
}