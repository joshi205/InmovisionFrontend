import { Component } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [Menu],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class RegistroComponent {}
