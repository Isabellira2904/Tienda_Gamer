export function esVIP (cantPro, total){
    if(cantPro > 20 && total >1000){
        return true;
    } else {
        return false;
    }
}