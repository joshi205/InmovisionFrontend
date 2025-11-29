import { Component } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-favoritos-page',
  standalone: true,
  imports: [Menu],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class FavoritosPageComponent {}
