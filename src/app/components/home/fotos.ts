import { Component } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [Menu],
  templateUrl: './fotos.html',
  styleUrl: './fotos.css',
})
export class FotosComponent {}
