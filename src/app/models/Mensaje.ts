import { Propiedad } from "./Propiedad"
import { Usuario } from "./Usuario"

export class Mensaje{
    idMensaje?: number=0
    contenido: string=""
    enviadoEn: Date=new Date() 
    usuario: Usuario = new Usuario()
    propiedad: Propiedad = new Propiedad()
}