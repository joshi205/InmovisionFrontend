import { Contrato } from "./contrato";
import { Usuario } from "./Usuario";

export class Pago {
    pago_id: number = 0;
    usuario: Usuario = new Usuario();
    contrato: Contrato = new Contrato();
    fecha_pago: Date = new Date();
    monto: number = 0;
    metodo_pago: string = "";
    estado: string = "";
}