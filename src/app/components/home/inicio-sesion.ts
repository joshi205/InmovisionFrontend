import { Component } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [Menu],
  templateUrl: './inicio_sesion.html',
  styleUrl: './inicio_sesion.css',
})
export class InicioSesionComponent {}
