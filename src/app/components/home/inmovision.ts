import { Component } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-inmovision',
  standalone: true,
  imports: [Menu],
  templateUrl: './inmovision.html',
  styleUrl: './inmovision.css',
})
export class InmovisionComponent {}
