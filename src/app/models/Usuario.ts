import { Rol } from './Rol';

export class Usuario {
  idUser?: number;
  nombre: string = "";
  apellido: string = "";
  correo: string = "";
  username: string = "";
  password: string = "";
  telefono: string = "";
  fotourl: string = "";
  fecha_registro: string = ""; // formato 'YYYY-MM-DD'
  enabled: boolean = true;
  roles: Rol[] = [];
}
