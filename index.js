import { calcularEnvio } from "./envios.js";
import { calcularDescuento } from "./descuentos.js";
import { esVIP } from "./vip.js";

let nombre = "Isabel";
let cantPro = 20;
let total  1320;

console.log(`Hola ${nombre}`);
console.log(calcularEnvio(cantPro));
console.log(esVIP(cantPro, total));
