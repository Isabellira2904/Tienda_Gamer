export function calcularDescuento (total){
    if(total < 200){
        let faltante = 200 - total;
        return `Te faltan ${faltante} USD para promocion`;
    }else if (total >= 200 && total <= 500){
        let descuento = total * 0.05;
        let nuevoTotal = total - descuento;
        return `tienes un descuento del 5% y tu total a pagar es de: $${nuevoTotal}USD`;
    }else if (total > 500) {
        let descuento = total * 0.12;
        let nuevoTotal = total - descuento;
        return `Tienes un descuento del 12% y tu total a pagar es de: $${nuevoTotal}USD`;
    }
}