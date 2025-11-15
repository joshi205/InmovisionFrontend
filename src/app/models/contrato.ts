import { Propiedad } from "./Propiedad";
import { Usuario } from "./Usuario";

export class Contrato {
    contrato_id: number = 0;
    propiedad: Propiedad = new Propiedad();
    arrendador: Usuario = new Usuario();
    tipo: string = "";
    fecha_inicio: Date = new Date();
    fecha_fin: Date = new Date();
    monto: number = 0;
    estado: string = "";
    terminos_y_condiciones: string = "";
}
