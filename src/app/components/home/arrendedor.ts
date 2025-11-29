import { Component } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-arrendedor',
  standalone: true,
  imports: [Menu],
  templateUrl: './arrendedor.html',
  styleUrl: './arrendedor.css',
})
export class ArrendedorComponent {}
