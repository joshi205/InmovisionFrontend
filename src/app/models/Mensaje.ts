import { Propiedad } from "./Propiedad"
import { Usuario } from "./Usuario"

export class Mensaje{
    idMensaje?: number=0
    enviado_por: string=""
    contenido: string=""
    enviado_en: Date=new Date() 
    usuario: Usuario = new Usuario()
    propiedad: Propiedad = new Propiedad()
}