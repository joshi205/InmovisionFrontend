import { Propiedad } from "./Propiedad";
import { Usuario } from "./Usuario";

export class Comparacion{
    idComparacion?: number
    usuario: Usuario = new Usuario();
    propiedad1: Propiedad = new Propiedad();
    propiedad2: Propiedad = new Propiedad();
}