import { Usuario } from "./Usuario";
import { Contrato } from "./contrato";

export class Pago {
    pago_id: number = 0;
    usuario: Usuario = new Usuario();
    contrato: Contrato = new Contrato();
    fecha_pago: Date = new Date();
    monto: number = 0;
    metodo_pago: string = "";
    estado: string = "";
}