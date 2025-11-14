import { Usuario } from "./Usuario";
import { Propiedad } from "./Propiedad";

export class SimulacionPrecios {
    simulacion_id: number = 0;
    usuario: Usuario = new Usuario();
    propiedad: Propiedad = new Propiedad();
    monto_inicial: number = 0;
    tasa_intereses: number = 0;
    plazo_meses: number = 0;
    cuota_mensual: number = 0;
    fecha: Date = new Date();
}