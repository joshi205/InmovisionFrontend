import { Distrito } from "./Distrito"
import { Usuario } from "./Usuario"

export class Propiedad{
    idPropiedad?:number
    titulo:string=""
    descripcion:string=""
    precio: number=0
    tipo:string=""
    categoria:string=""
    direccion:string=""
    fechaPublicacion:Date=new Date()
    estado:string=""
    metrosCuadrados:number=0
    habitaciones:number=0
    banos:number=0
    destacada:boolean=false
    latitud:number=0
    longitud:number=0
    urlVr:string=""
    notas:string=""
    usuario: Usuario = new Usuario();
    distrito: Distrito = new Distrito();

}